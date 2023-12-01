import { SingleProductCard } from "../../components/card/SingleProductCard"
import {getProducts} from "../../products/page"


async function getProduct(id){
    const payload = await getProducts()
    const products = Object.values(payload)
    const singleItem = products.find(item => item.uid == id)
    return singleItem
}

async function ProductPage ({params}){
    const id = params.id
    const productData = await getProduct(id)
    if (id == ""){
    return (
        <>
            <header className="text-center pt-28">
                <h2 className="text-medium text-green-800">Single Product Page</h2>
            </header>
            <main className="min-h-screen py-24">
            </main> 
        </>
    );
    }
    else{
        return (
            <>
                <SingleProductCard key={productData.uid}{...productData}/>
            </>
        )
    
    }
}

export default ProductPage