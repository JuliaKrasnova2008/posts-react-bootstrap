import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Post.css'

export default function Post({ elem }) {
    console.log(elem);
    return (
        <Card style={{ width: '20rem' }} className='post'>
            <Card.Body>
                <Card.Title className='post__title'>{elem.title}</Card.Title>
                <Card.Text>
                    {elem.body}
                </Card.Text>
            </Card.Body>
            <div className='post__btn'>
                <Button variant="outline-secondary">View</Button>{' '}
                <Button variant="outline-secondary">Change color</Button>{' '}
            </div>

        </Card>
    )
}
