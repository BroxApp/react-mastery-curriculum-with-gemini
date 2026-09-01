
import { useState } from "react";
import useCartStore from "../store/zustand-store/useCartStore";
import useFavoritesStore from "../store/zustand-store/useFavoritesStore";
import CartModal from "./CartModal";
import {useAuth} from "../context/AuthContext";

export default function Navbar() {

    // وضعیت باز یا بسته بودن CartModal
    const [isCartOpen, setIsCartOpen] = useState(false);

    // دریافت اطلاعات سبد خرید از Zustand
    const cart = useCartStore((state) => state.cart);

    // محاسبه تعداد کل واحدهای محصولات داخل سبد خرید
    const cartItemsCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // دریافت لیست علاقه‌مندی‌ها از Zustand
    const favorites = useFavoritesStore(
        (state) => state.favorites
    );

    const {user, isLoggedIn, login, logout} =useAuth();

    return (
        <>
            {/* Navigation Bar */}
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

                {/* Website Name */}
                <div className="text-xl font-bold">
                    Global Store Shop
                </div>


                {/* Navigation Items */}
                <div className="flex items-center gap-6">

                    {/* Products */}
                    <a
                        href="#"
                        className="hover:text-blue-600"
                    >
                        Products
                    </a>


                    {/* Cart */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative"
                    >
                        🛒 Cart

                        {/* Cart Items Count */}
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>


                    {/* Favorites */}
                    <div>
                        ❤️ Favorites

                        <span className="ml-1">
                            ({favorites.length})
                        </span>
                    </div>

                   {isLoggedIn ? (
                    <>
                    <span>
                        Hello, {user.name}
                    </span>
                    <button onClick={logout} className="border px-3 py-1 rounded">
                        Logout
                    </button>
                    </>
                   ):(
                    <button onClick={()=>login("User","Customer")} className="bg-blue-500 text-white px-3 py-1 rounded">
                        Login
                    </button>
                   )}
                </div>
            </nav>

            {
                isCartOpen && (
                    <CartModal onClose={()=>setIsCartOpen(false)}/>
                )
            }

            {/* Cart Modal */}
            {isCartOpen && (
                <CartModal
                    onClose={() => setIsCartOpen(false)}/>
            )}
        </>
    );
}

