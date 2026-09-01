import useCartStore from "../store/zustand-store/useCartStore";

export default function CartModal({onClose}){
    const cart=useCartStore((state)=>state.cart);
    const removeFromCart=useCartStore((state)=>state.removeFromCart);
    const increaseQuantity=useCartStore((state)=>state.increaseQuantity);
    const decreaseQuantity=useCartStore((state)=>state.decreaseQuantity);
    const clearCart=useCartStore((state)=>state.clearCart);
    const totalPrice=cart.reduce((total,item)=>total+item.price*item.quantity,0);
    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button onClick={onClose} className="text-gray-500 text-xl"> ✕ </button>
                    <button onClick={clearCart} className="text-red-500">Clear Cart</button>
                </div>
                {cart.length===0?(
                    <p className="text-center py-8">Your cart is empty.</p>
                    ):(
                    <div className="space-y-4">{cart.map((item)=>(
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <div><h3 className="font-semibold">{item.name}</h3>
                                    <p>{item.price.toLocaleString()}$</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={()=>decreaseQuantity(item.id)} className="border px-2 rounded">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=>increaseQuantity(item.id)} className="border px-2 rounded">+</button>
                                    <button onClick={()=>removeFromCart(item.id)} className="text-red-500 ml-2">remove</button>
                                </div>
                            </div>
                    ))}</div>
                )}
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>{totalPrice.toLocaleString()}$</span>
                    </div>
                </div>
            </div>
        </div>
    );
}