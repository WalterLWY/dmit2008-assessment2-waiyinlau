import Link from 'next/link'


function ProductPageBlank () {
    return (
        <>
            <header className="text-center pt-28">
                <h2 className="text-4xl text-green-800">View our Products</h2>
            </header>
            <main className="min-h-screen py-24 text-center">
                <Link className='text-blue-600 font-extrabold' href={`/products`}>Back to Products Page</Link>
            </main> 
        </>
)}

export default ProductPageBlank

