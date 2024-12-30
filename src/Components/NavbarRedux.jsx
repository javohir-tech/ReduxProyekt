import React from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Cart2 } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function NavbarRedux() {

    const { allProducts, products, price } = useSelector((state) => state.product)
    // console.log(allProducts, products, price)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                    <Link to="/">Redux Proyekt</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-5 align-items-center">
                        <Link to="/" className=''>Home</Link>
                        <Link className=''>About</Link>
                        <Link className=''>Contact</Link>
                    </Nav>
                    <Link to="/Cart" className='btn btn-success'>
                            <Cart2/> <Badge bg="secondary">{allProducts}</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
