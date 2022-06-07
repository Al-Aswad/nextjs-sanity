import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'rwvijzmp',
    dataset: 'production',
    useCdn: true,
    apiVersion: 'v2021-10-21',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
