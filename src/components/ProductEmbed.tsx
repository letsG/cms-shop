'use client'
import {useEffect, useRef} from "react";
import {shopifyLoad} from "@/lib/shopifyLoad";

const ProductEmbed = ({product}: {
    product: {
        productId: string;
        id: string
    }
}) => {
    let {current} = useRef(false)

    useEffect(() => {
        if(current) return
        current = true
        shopifyLoad(product.id, product.productId)
    }, [product])

    return (
        <div id={`product-component-${product.productId}`}></div>
    )
}

export default ProductEmbed