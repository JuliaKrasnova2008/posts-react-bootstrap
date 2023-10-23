import React from 'react'
import Button from 'react-bootstrap/Button';
import ShowMore from '../ShowMore/ShowMore'

import './ArticleList.css'
import Post from '../Post/Post';

export default function ArticleList({ loadMore, isBlocked, articles, makeBigCards, isBig }) {

    const bigSizePost = isBig === 'Make small cards'
    console.log(articles);

    return (
        <>
            <div className='article'>
                <div className='article__title-block'>
                    <h1 className='article__title'>Article List</h1>
                    <div className='article__buttons'>
                        <Button
                            className='article__button'
                            variant="primary"
                            onClick={(e) => {
                                console.log(isBig);
                                makeBigCards(e)
                                console.log(e.target.innerText);
                            }}
                        >{isBig}</Button>{' '}
                        <Button
                            className='article__button'
                            variant="primary"
                        >Add Articles</Button>{' '}
                    </div>
                </div>
                <ul className='article__list'>
                    {articles.map((elem, index) => {
                        return <Post elem={elem} key={index} bigSizePost={bigSizePost} />
                    })}
                </ul>
            </div >
            {!isBlocked && <ShowMore loadMore={loadMore} />}

        </>


    )
}
