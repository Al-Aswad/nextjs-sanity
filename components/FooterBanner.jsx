import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner: {discount, largeText1,largeText2, saleTime, smallText, midText,product, desc, buttonText, image}}) => {
    // console.log("footerBanner ",footerBanner)
    return (
        <div className='container-footer-banner bg-red-600 min-h-[40vh] rounded-lg pt-20 px-20'>
            <div className='banner-desc flex justify-between items-center'>
                <div className='left flex gap-2 flex-col justify-center'>
                    <p>{discount}</p>
                    <h3 className='font-bold text-white text-6xl'>{largeText1}</h3>
                    <h3 className='font-bold text-white text-6xl'>{largeText2}</h3>
                    <p>{saleTime}</p>
                </div>
                    <img className='' src={urlFor(image)} alt="footer-banner" />
                <div className='right text-white'>
                    <p>{smallText}</p>
                    <h3 className='font-bold text-white text-6xl'>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/product/${product}`} >
                        <button className="bg-white p-2 rounded-lg text-red-500 font-semibold text-sm" type='button'>{buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner