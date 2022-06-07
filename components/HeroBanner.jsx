import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container h-[40vh] bg-gray-200 pt-20 px-10'>
            <div>
                <p>{heroBanner.smallText}</p>
                <h3 className='font-bold text-4xl'>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <img className='w-40' src={urlFor(heroBanner.image)} alt="hero-banner-image" />

                <div>
                    <Link href="/product/ID">
                        <button className='p-2 bg-red-700 rounded-lg text-white' type="button">{heroBanner.buttonText}</button>
                    </Link>

                    <div>
                        <h5 className='desc font-bold text-xl'>
                            Lorem ipsum
                        </h5>
                        <p>Desc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner