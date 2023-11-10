import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function StaticExample(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Do you really want to delete this card?
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button onClick={props.handleDelete}>Yes</Button>
                <Button onClick={() => props.setModalShowDelete(false)}>No</Button>

            </Modal.Footer>
        </Modal>
    );
}