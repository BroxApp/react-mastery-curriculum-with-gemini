import useCartStore from "../store/zustand-store/useCartStore";
import useFavoritesStore from "../store/zustand-store/useFavoritesStore";

function ProductCard ({product}){
    const addToCart = useCartStore((state)=>state.addToCart);
    const toggleFavorite = useFavoritesStore((state)=>state.toggleFavorite);
    return (
        <article>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover"/>
            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="mt-2">{product.price.toLocaleString()}$</p>
            <div className="flex gap-2 mt-4">
                <button onClick={()=>addToCart(product)} className ="flex-1 bg-blue-500 text-white px-4 py-2 rounded"> Add To Cart</button>
                <button onClick={()=>toggleFavorite(product)}className="px-4 py-2 border rounded">❤️</button>
            </div>
        </article>
    )
}
export default ProductCard;
