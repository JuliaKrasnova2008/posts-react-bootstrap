import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { parsePhoneNumber } from 'libphonenumber-js'
import ModalMoreInfo from '../ModalMoreInfo/ModalMoreInfo';

export default function User({ elem, max }) {
    const phoneNumber = parsePhoneNumber(elem.phone, 'US')

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Card style={max === 3 ? { width: '32%' } : { width: '49%' }}>
                <Card.Body>
                    <Card.Title>{elem.username}</Card.Title>
                    <Card.Text> {elem.email}</Card.Text>
                    <Card.Text> {phoneNumber.formatNational()}</Card.Text>
                    <Button variant="primary"
                        onClick={() => setModalShow(true)}
                    >More information</Button>
                </Card.Body>
            </Card>
            <ModalMoreInfo show={modalShow}
                onHide={() => setModalShow(false)}
                elem={elem}
            />
        </>

    )
}
