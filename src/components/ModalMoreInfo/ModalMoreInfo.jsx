import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { parsePhoneNumber } from 'libphonenumber-js'


export default function ModalMoreInfo(props) {
    console.log(props.elem);
    const phoneNumber = parsePhoneNumber(props.elem.phone, 'US')

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    More information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.elem.name}</h4>
                <h6>user-name: {props.elem.username}</h6>
                <h6>web-site: {props.elem.website}</h6>
                <h6>phone number: {phoneNumber.formatNational()}</h6>
            </Modal.Body>
            <Modal.Body>
                <h6>Address</h6>
                <p>city: {props.elem.address.city}</p>
                <p>street: {props.elem.address.street}</p>
                <p>suite: {props.elem.address.suite}</p>
                <h6>Company</h6>
                <p>{props.elem.company.name}</p>
                <p>{props.elem.company.bs}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>)
}
