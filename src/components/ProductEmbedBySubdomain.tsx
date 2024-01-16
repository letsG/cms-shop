'use client'
import {useEffect, useState} from "react";
import {shopifyLoad} from "@/lib/shopifyLoad";

const ProductEmbedBySubdomain = ({products}: {
    products: Record<string, {
        productId: string;
        id: string
    }>
}) => {
    let [product, setProduct] = useState(null as typeof products[keyof typeof products] | null)

    useEffect(() => {
        const subdomain = window.location.hostname.split('.')[0]
        const newProduct = products[subdomain]
        if(!newProduct) return
        setProduct(products[subdomain])
        if(!product) return
        shopifyLoad(product.id, product.productId)
    }, [product])

    if(!product) return null

    return (
        <div id={`product-component-${product.productId}`}></div>
    )
}

export default ProductEmbedBySubdomain