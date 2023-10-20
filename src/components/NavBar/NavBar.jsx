import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

import './NavBar.css'
export default function NavBar() {
    // expand="lg" - точка остановки, менее котрой произойдет сворачивание панели навигации
    //bg="dark" - background
    //Navbar.Brand - логотип сайта
    //Navbar.Toggle - кнопка, которая сворачивает меню
    // Navbar.Collapse - разворачивает все меню по id, которое прописали в Navbar.Toggle
    //Nav - родительский компонент
    //Nav.Link - ссылки
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark' className='nav-bar'>
            <Navbar.Brand href="#home">React-Bootstrap-Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                    <Nav.Link href="/photos">Photos</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </>)
}
