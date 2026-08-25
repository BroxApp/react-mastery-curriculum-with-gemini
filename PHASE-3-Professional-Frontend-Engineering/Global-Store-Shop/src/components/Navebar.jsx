

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            <div className="text-xl font-bold">
                Global Store Shop
            </div>

            <div className="flex items-center gap-6">
                <a href="#" className="hover:text-blue-600">
                    Products
                </a>
                <div>
                    🛒 Cart
                    <span className="ml-1">(0)</span>
                </div>
                <div>
                    ❤️ Favorites
                    <span className="ml-1">(0)</span>
                </div>
            </div>
        </nav>
    )
}
