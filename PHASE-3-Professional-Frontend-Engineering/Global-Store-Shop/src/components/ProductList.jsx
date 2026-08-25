import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList (){
    return(
             <div className="grid grid-cols-3 gap-4">{
                products.map(
                    (product)=><ProductCard key={product.id} product={product}/>
                )
            }</div>
       
    )
}
