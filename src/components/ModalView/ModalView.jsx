import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './ModalView.css'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/slices/articlesReducer';

export default function MyVerticallyCenteredModal(props) {

    const isOwn = props.elem.isOwn
    const [title, setTitle] = useState(props.elem.title)
    const [body, setBody] = useState(props.elem.body)

    function handleUpdate() {
        dispatch(editPost({
            title: title,
            body: body,
            id: props.elem.id,
        }))
        props.onHide()
    }
    const dispatch = useDispatch()
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Article info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isOwn ? (
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
                ) : (
                    <>
                        <h4>{props.elem.title}</h4>
                        <p>{props.elem.body}</p>
                    </>
                )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                {isOwn &&
                    <Button onClick={handleUpdate}>Update</Button>
                }
            </Modal.Footer>
        </Modal>
    );
}