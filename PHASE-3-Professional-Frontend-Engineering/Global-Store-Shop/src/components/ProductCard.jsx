function ProductCard ({product}){
    return (
        <article>
            <img src="product.image" alt="product.name" />
            <h2>{product.name}</h2>
            <p>{product.price}$</p>
            <button>افزودن به سبد خرید:</button>
            <button>افزودن به علاقه‌مندی‌ها</button>
        </article>
    )
}
export default ProductCard;
