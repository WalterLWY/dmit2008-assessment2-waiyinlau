// Week 5 - Class 1 - Employee Instructor - 1
import Link from "next/link"


function NavBar ({children}){
    return (
        <nav className="py-4 bg-slate-100 shadow-slate-400">
            <ul className="flex justify-center gap-x-8">
                <li><Link className="text-blue-600 font-medium" href="/">home</Link></li>
                <li><Link className="text-blue-600 font-medium" href="/employees">employees</Link></li>
                <li><Link className="text-blue-600 font-medium" href="/employee">employee</Link></li>
            </ul>
        </nav>
    )
 }


 export {NavBar}