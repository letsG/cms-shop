'use client'
import {useEffect, useRef} from "react";
import {shopifyLoad} from "@/lib/shopifyLoad";
import Product from "@/components/Product";

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

    return <Product product={product || undefined} loaded={current}/>
}

export default ProductEmbed