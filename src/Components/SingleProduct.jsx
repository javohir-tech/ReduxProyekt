import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SingleProduct({ id, image, product, title }) {

    

    return (
        <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
            <Card style={{ width: '18rem' }} className='h-100'>
                <Card.Img variant="top" src={image} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}
