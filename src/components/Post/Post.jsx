import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Post.css'
import MyVerticallyCenteredModal from '../ModalView/ModalView';

export default function Post({ elem, bigSizePost }) {
    //модалка
    const [modalShow, setModalShow] = useState(false)

    //цвет карточек
    const [colorCard, setColorCard] = useState('white')
    function changeColor() {
        if (colorCard === "white") {
            setColorCard('aliceblue')
        } else if (colorCard === 'aliceblue') {
            setColorCard('darkorange')
        } else if (colorCard === 'darkorange') {
            setColorCard('navajowhite')
        } else if (colorCard === 'navajowhite') {
            setColorCard('white')
        }
    }

    return (
        <>
            <Card
                style={bigSizePost ? { width: '47%', fontSize: '18px' } : { width: '20rem' }}
                className={colorCard === 'white' && 'post' ||
                    colorCard === 'aliceblue' && 'post post__aliceblue' ||
                    colorCard === 'darkorange' && 'post post__darkorange' ||
                    colorCard === 'navajowhite' && 'post post__navajowhite'
                }
            >
                <Card.Body>
                    <Card.Title className='post__title'>{elem.title}</Card.Title>
                    <Card.Text>
                        {elem.body}
                    </Card.Text>
                </Card.Body>
                <div className='post__btn'>
                    <Button
                        variant="outline-secondary"
                        onClick={() => setModalShow(true)}
                    >View</Button>{' '}
                    <Button
                        variant="outline-secondary"
                        onClick={changeColor}
                    >Change color</Button>{' '}
                </div>
            </Card>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                elem={elem}
            />
        </>

    )
}
