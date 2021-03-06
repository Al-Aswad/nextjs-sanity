import Head from 'next/head'
import Image from 'next/image'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

export default function Home({ products, bannerData }) {
    // console.log(products);
    console.log(bannerData);
    return (
        <div>
            <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

            <div className='product-heading mb-6'>
                <h1 className='text-xl font-bold text-center'>Best Seller Produuct</h1>
                <p className='text-center'>Speaker there and many variant</p>
            </div>

            <div className='flex justify-center gap-4 px-10 flex-wrap mb-6'>
                {products?.map(
                    (product) => <Product key={product._id} product={product} />
                )}
            </div>


            <FooterBanner footerBanner={bannerData && bannerData[0]} />

        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "product"]`;
    const products = await client.fetch(query)

    const baneerQuery = `*[_type == "banner"]`;
    const bannerData = await client.fetch(baneerQuery)
    return {
        props: {
            products, bannerData
        }
    }
}

