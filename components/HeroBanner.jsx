import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container min-h-[40vh] bg-gray-200 pt-20 px-10 pb-10'>
            <div className=''>
                <p>{heroBanner.smallText}</p>
                <h3 className='font-bold text-xl'>{heroBanner.midText}</h3>
                <h1 className='font-bold text-8xl'>{heroBanner.largeText1}</h1>
                <img className='w-40 ' src={urlFor(heroBanner.image)} alt="hero-banner-image" />

                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button className='p-2 bg-red-500 rounded-lg text-white' type="button">{heroBanner.buttonText}</button>
                    </Link>

                    <div className='float-right text-right'>
                        <h5 className='desc font-bold text-xl'>
                            Description
                        </h5>
                        <p className='font-thin uppercase'>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner