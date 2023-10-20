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

    return (
        <div className='home'>
            <ArticleList
                articles={articles.slice(0, countPosts)}
                loadMore={loadMore}
                isBlocked={isBlocked}
            />
        </div>
    )
}