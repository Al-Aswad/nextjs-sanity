import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: {image, name, slug, price} }) => {
    console.log("Slug ",slug)
// const Product = ({ product}) => {
//     console.log("product ",product)
    return (
        <div className=''>
            <Link href={`/product/${slug.current}`}>
                <div className='card-product'>
                    <img className='bg-gray-300 rounded-md hover:scale-105 hover:duration-300' src={urlFor(image && image[0])} 
                    width={250}
                    height={250}
                    alt="card-image" />
                    <p className="product-name">{name}</p>
                    <p className="product-price font-bold">{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product