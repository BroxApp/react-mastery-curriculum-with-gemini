import {create} from "zustand";

//ایجاد هوک سبد خرید
const useCartStore = create((set)=>({
    //سبد خرید خالی است
    cart:[],
    //تابع اضافه کردن محصول به سبد خرید
    addToCart: (product)=>set((state)=>{
        //ابتدا چک می‌کنیم که آیا محصول از قبل در سبد خرید وجود داشته است یا خیر
        const existingProduct = state.cart.find(
            (item)=>item.id === product.id
        );
        //اگر محصول از قبل وجود داشت فقط تعداد را افزایش می‌دهیم
        if(existingProduct){
            return{
                cart: state.cart.map((item)=>item.id === product.id
                    ?{...item, quantity: item.quantity+1} : item
                ),
            };
        }
        //اگر محصول از قبل وجود نداشته باشد،‌ آن را اضافه می‌کنیم
        return{
            cart:[
                ...state.cart,
                {...product, quantity:1},
            ],
        };
    }),
    //تابع حذف محصول از سبد خرید
    removeFromCart: (productId)=>
        //تمام محصولاتی را نگه می‌دارد که آی دی آن‌ها با آی دی محصول مورد نظر متفاوت است
        set((state)=>({
            cart: state.cart.filter(
                (item)=>item.id !== productId
            ),
        })),
    //برای افزایش تعداد یک محصول
    increaseQuantity: (productId)=>
        //وقتی کاربر روی  علامت (+) کلیک کند،‌ این اکشن اجرا می‌شود
        set((state)=>({
            cart: state.cart.map((item)=>
                item.id===productId
                ?{...item, quantity:item.quantity+1}
                :item
            ),
        })),
    //برای کاهش تعداد یک محصول
    decreaseQuantity: (productId)=>
        //وقتی کاربر روی علامت (-) کلیک کند، این اکشن اجرا می‌شود
        set((state)=>({
            cart:state.cart.map((item)=>
            item.id === productId && item.quantity>1
            ?{...item, quantity: item.quantity-1}
            :item
         ),
    })),
    //این اکشن سبد خرید را خالی می‌کند
    clearCart:()=>set({cart:[]}),
}));
export default useCartStore;