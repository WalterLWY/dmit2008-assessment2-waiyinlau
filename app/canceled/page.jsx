 export default function Cancel ( {children}){
    return (
        <header className="  max-w-lg  mx-auto     items-center mt-28">
    
           <div className="text-center ">
         
           
           <h1 className="bg-rose-500 rounded-lg text-sm  mb-5 w-fit mx-auto  px-4 py-1 text-red-50 font-medium"> Transaction Canceled</h1> 
           <p className="px-4  mb-10 text-center ">The payment was declined by your bank.</p>
           <Link className='text-blue-600 font-extrabold' href={`/products`}>Back to Products Page</Link>
           </div>
     </header>
    )
        
 }



 