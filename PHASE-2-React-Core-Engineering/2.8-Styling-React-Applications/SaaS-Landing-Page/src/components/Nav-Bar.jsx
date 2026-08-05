import { Link } from "react-router-dom";

function NavBar(){
    return(
    
        <ul className="flex justify-center space-x-5 bg-black p-4">
            <li><Link to='/' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Hero Section</Link></li>
            <li><Link to='/Features' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Features Grid</Link></li>
            <li><Link to='/PricingSection' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Pricing Section</Link></li>
            <li><Link to='/Footer' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Footer</Link></li>
        </ul>

    )
}
export default NavBar;
