 import Link from "next/link"
 
 
 export default function Success ( {children}){
    return (
         
     <header className="  max-w-lg  mx-auto     items-center mt-28">
    
           <div className=" ">
         
           
           <h1 className="bg-lime-400 rounded-lg text-sm  mb-5 w-fit mx-auto  px-4 py-1 text-green-800 font-medium"> Transaction Successful</h1> 
           <p className="px-4  text-center ">Thank you for your purchase!</p>
           <Link className='text-blue-600 font-extrabold' href={"../"}>Back to Store</Link>
  

           </div>

     </header>
        
    )
 }



 