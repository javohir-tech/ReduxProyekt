import React from 'react'
//bootstrap
import { Container } from 'react-bootstrap'

//request
import { request } from '../Util/Request'

//components
import { AllProducts } from '../Components'

export const loader = async () => {
    const req = await request.get("/products")
    return req.data
}

export default function Home() {

    return (
        <Container>
            <h2>All Products:</h2>
            <AllProducts/>
        </Container>
    )
}
