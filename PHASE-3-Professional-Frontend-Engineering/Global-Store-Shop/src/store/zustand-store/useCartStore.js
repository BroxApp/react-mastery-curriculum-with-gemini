import {create} from "sustand";

const useCartStore = create((set)=>({
    cart:[],
    addToCart: (product)=>set((state)=>{
        const existingProduct = state.cart.find(
            (item)=>item.id === product.id
        );
        if(existingProduct){
            return{
                cart: state.cart.map((item)=>item.id === product.id
                ?{...item, quantity: item.quantity+1} : item
            ),
            };
        }
        return{
            cart:[
                ...state.cart,
                {...product, quantity:1},
            ],
        };
    }),
    removeFromCart: (product)=>
        set((state)=>({
            cart: state.cart.filter(
                (item)=>item.id !== product
            ),
        })),
    increaseQuantity: (productId)=>
        set((state)=>({
            cart: state.cart.map((item)=>
            item.id===productId
            ?{...item, quantity:item.quantity+1}
            :item
            ),
        })),
    decreaseQuantity: (productId)=>
        set((state)=>({
            cart:state.map((item)=>
            item.id===productId && item.quantity>1
            ?{...item, quantity: item.quantity-1}
            :item
         ),
    })),
    clearCart:()=>set({cart:[]}),
}));
export default useCartStore;