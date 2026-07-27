import { Link } from "react-router-dom";

function NavBar(){
    return(
        <ul className="flex justify-center space-x-5 bg-black p-4">
            <li><Link to='/' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Home</Link></li>
            <li><Link to='/About' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">About</Link></li>
            <li><Link to='/Order' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Order</Link></li>
            <li><Link to='/Footer' className="text-white font-bold uppercase hover:text-yellow-300 transition duration-300 
                     relative after:content-[''] after:block after:h-[1px] after:bg-orange-400 
                     after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Footer</Link></li>
        </ul>
    )
}
export default NavBar;
