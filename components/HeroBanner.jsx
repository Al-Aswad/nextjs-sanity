import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container h-[40vh] bg-gray-200 pt-20 px-10'>
            <div>
                <p>Small</p>
                <h3 className='font-bold text-4xl'>Mid Text</h3>
                <img src="" alt="hero-banner-image" />

                <div>
                    <Link href="/product/ID">
                        <button className='p-2 bg-red-700 rounded-lg text-white' type="button">Button Text</button>
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