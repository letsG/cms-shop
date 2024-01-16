const Product = ({loaded, product}: {loaded: boolean, product?: {productId: string}}) => {
    if(!loaded)
        return <div className="spinner"></div>

    if(!product)
        return <p>not found</p>

    return (
        <div id={`product-component-${product.productId}`}></div>
    )
}

export default Product