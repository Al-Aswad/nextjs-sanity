import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='navbar-container flex justify-between px-10 py-4'>
            <p>
                <Link href="/">
                    JSM Headphones
                </Link>
            </p>

            <button type='button' className='relative'>
                <AiOutlineShoppingCart  className='w-8 h-8'/>
                <span className='cart-item-qty text-white absolute top-0 w-4 h-4 right-0 p-1 text-[12px] flex justify-center items-center bg-red-600 rounded-full'>1</span>
            </button>
        </div>
    )
}

export default Navbar