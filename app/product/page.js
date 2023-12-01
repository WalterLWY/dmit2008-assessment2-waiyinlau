import { SingleProductCard } from "../components/card/SingleProductCard"
import {getProducts} from "../products/page"
import Link from 'next/link'


async function getProduct(id){
    const payload = await getProducts()
    const products = Object.keys(payload)
    const singleItem = products.find(item => item.uid == id)
    return singleItem
}

async function ProductPage ({params}){
    const id = params.id
    const productData = await getProduct(id)
    return (
        <>
            <main className="min-h-screen py-24">
                <SingleProductCard key={productData.uid} />
            </main>
        </>
    )
}


// function Page ({uid}){
//     return (
//         <>
//             <header className="text-center pt-28">
//                 <h2 className="text-medium text-green-800">Single Product Page</h2>
//             </header>
//             <main className="min-h-screen py-24">
//             </main>
                    
//         </>
//     );
// }

export default ProductPage