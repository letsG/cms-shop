import {load} from 'outstatic/server'
import ProductEmbedBySubdomain from "@/components/ProductEmbedBySubdomain";

export default async function Index() {
    const { allProducts} = await getData()
    console.log('allProducts', allProducts)
    return (
        <ProductEmbedBySubdomain
            products={allProducts.reduce((acc, product) => ({...acc, [product.slug]: {...product}}), {})}/>

    )
}

async function getData() {
    const db = await load()

    const allProducts = await db
        .find({collection: 'products'}, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags',
            'productId',
            'id'
        ])
        .sort({publishedAt: -1})
        .toArray()

    return {
        allProducts,
    }
}
