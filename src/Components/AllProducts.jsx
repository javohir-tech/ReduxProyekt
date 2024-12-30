import React from 'react'
import { useLoaderData } from 'react-router-dom'

//components
import SingleProduct from './SingleProduct'

export default function AllProducts() {
    const data = useLoaderData()
    const { products } = data
    return (
        <div className='row g-3'>
            {products.map((product) => {
                const { id, thumbnail, title, price, discountPercentage , reviews } = product
                return <div className='col-6 col-md-4 col-xl-3' key={id}>
                    <SingleProduct   id={id} image={thumbnail} product={product} price={price} reviews={reviews.length} title={title }/>
                </div>
            })}
        </div>
    )
}
