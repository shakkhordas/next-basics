const ProductDetails = ({ params }: {
    params: { productId: string }
}) => {
    return (
        <div>
            <h1>Details of Product {params.productId}</h1>
        </div>
    )
}

export default ProductDetails