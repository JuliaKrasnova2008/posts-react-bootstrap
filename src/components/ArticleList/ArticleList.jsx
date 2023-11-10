import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ShowMore from '../ShowMore/ShowMore'

import './ArticleList.css'
import Post from '../Post/Post';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/slices/articlesReducer';
import StaticExample from '../ModalDelete/ModalDelete';

export default function ArticleList({ loadMore, isBlocked, articles, makeBigCards, isBig }) {
    //модалка
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')



    const bigSizePost = isBig === 'Make small cards'

    const array = useSelector((state) => state.articles.posts)

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
                                makeBigCards(e)
                            }}
                        >{isBig}</Button>{' '}
                        <Button
                            className='article__button'
                            variant="primary"
                            onClick={handleShow}
                        >Add Articles</Button>{' '}
                    </div>
                </div>
                <ul className='article__list'>
                    {articles?.map((elem) => {
                        return <Post elem={elem} key={elem.id} bigSizePost={bigSizePost} />
                    })}
                </ul>
            </div >
            {!isBlocked && <ShowMore loadMore={loadMore} />}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Text</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={body}
                                onChange={(e) => setBody(e.target.value)}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                        setTitle("")
                        setBody("")
                    }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch(addPost(array, title, body))
                        handleClose()
                        setTitle("")
                        setBody("")
                    }}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal >

        </>


    )
}
