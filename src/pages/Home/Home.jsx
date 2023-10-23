import React, { useEffect, useState } from 'react'
import './Home.css'
import { useSelector } from 'react-redux';
import ArticleList from '../../components/ArticleList/ArticleList';

export default function Home() {
    //Выводим 3 записи по умолчанию, 
    const articles = useSelector((state) => state.articles.posts)
    const [max, setMax] = useState(3)
    const [countPosts, setCountPosts] = useState(3)
    const [isBlocked, setIsBlocked] = useState(false)
    const [isBig, setIsBig] = useState("Make big cards")

    //кнопку можно кликать до тех пор, пока все записи не будут получены, когда они кончаться, кнопка скрывается.
    useEffect(() => {
        if (countPosts >= articles.length) {
            setIsBlocked(true)
        }
    }, [countPosts, articles])

    //при клике на "Show more" из стора получаем ещё 3 записи
    function loadMore() {
        setCountPosts((prev) => prev + max)
    }
    //при клике на "Make big cards" отображаются по 2 карточки на строку, при клике на "Make small cards" - по 2
    function makeBigCards(e) {
        if (isBig === "Make big cards") {
            setIsBig('Make small cards')
            setCountPosts(2)
            setMax(2)
        } else if (isBig === "Make small cards") {
            setIsBig('Make big cards')
            setCountPosts(3)
            setMax(3)
        }
    }


    return (
        <div className='home'>
            <ArticleList
                articles={articles.slice(0, countPosts)}
                loadMore={loadMore}
                isBlocked={isBlocked}
                makeBigCards={makeBigCards}
                isBig={isBig}
            />
        </div>
    )
}
