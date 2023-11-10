import React, { useEffect, useState } from 'react'
import User from '../User/User'
import Button from 'react-bootstrap/Button';
import ShowMore from '../ShowMore/ShowMore';

import './UsersList.css'


export default function UsersList({ users }) {
    const [count, setCount] = useState(3)
    const [max, setMax] = useState(3)
    const [visible, setVisible] = useState(true)

    //реализация кнопки "Show more"
    useEffect(() => {
        if (users.length < count) {
            setVisible(false)
        }
    }, [count, users])

    function loadMore() {
        setCount((prev) => prev + max)
    }

    //реализация кнопки "Make a big/small cards"
    const [makeCard, setMakeCard] = useState("Make big cards")

    function makeBigSmallCard() {
        if (makeCard === "Make big cards") {
            setMakeCard("Make small cards")
            setCount(2)
            setMax(2)
        } else {
            setMakeCard("Make big cards")
            setCount(3)
            setMax(3)
        }
    }


    return (
        <div className='users'>
            <div className='article'>
                <div className='article__title-block'>
                    <h1 className='article__title'>Users List</h1>
                    <div className='article__buttons'>
                        <Button
                            className='article__button'
                            variant="primary"
                            onClick={makeBigSmallCard}
                        >{makeCard}</Button>
                        <Button
                            className='article__button'
                            variant="primary"
                        >Add User</Button>{' '}
                    </div>
                </div>
                <div className='article__list '>
                    {
                        users.slice(0, count).map((elem) => {
                            return <User elem={elem} key={elem.id} max={max} />
                        })
                    }
                </div>
            </div>
            {visible && <ShowMore loadMore={loadMore} />}
        </div >


    )
}
