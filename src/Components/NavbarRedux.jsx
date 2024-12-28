import React from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function NavbarRedux() {

    const {allProducts} = useSelector((state)=>state.product)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Redux Proyekt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button variant="primary">
                            Profile <Badge bg="secondary">{allProducts}</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
