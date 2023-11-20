import Link from "next/link"
import { LuBoxes } from "react-icons/lu";

function NavBar ({children}){
    return (
        <nav className="px-4 py-4 bg-green-50 shadow shadow-black-400">
            <ul className="flex justify-between gap-x-8 items-center">
                <li><Link className="text-rose-600 font-medium" href="/">
                        <figure className="flex items-center text-green-800 gap-1">
                            <LuBoxes className="w-8 h-8"/>
                            <figcaption className="text-sm">Super Savings Store</figcaption>                          
                        </figure>                    
                    </Link></li>
                <li><Link className="text-green-800 font-medium" href="/products">Our Products</Link></li>
                <li><Link className="text-green-800 font-medium" href="/product">Product</Link></li>
           </ul>
        </nav>
    )
 }


 export {NavBar}