'use client'
import {useEffect, useState} from "react";
import {shopifyLoad} from "@/lib/shopifyLoad";
import Product from "@/components/Product";

const ProductEmbedBySubdomain = ({products}: {
    products: Record<string, {
        productId: string;
        id: string
    }>
}) => {
    let [product, setProduct] = useState(null as typeof products[keyof typeof products] | null)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const subdomain = window.location.hostname.split('.')[0]
        const newProduct = products[subdomain]
        if(!newProduct) return
        setProduct(products[subdomain])
        setLoaded(true)
        if(!product) return
        shopifyLoad(product.id, product.productId)
    }, [product])

    return <Product product={product || undefined} loaded={loaded}/>
}

export default ProductEmbedBySubdomain