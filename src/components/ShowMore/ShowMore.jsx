import React from 'react'
import Button from 'react-bootstrap/Button';


export default function ShowMore({ loadMore, visible }) {
    return (
        <>
            <Button className='article__button' variant="primary" onClick={loadMore}>Show more</Button>
        </>

    )
}
