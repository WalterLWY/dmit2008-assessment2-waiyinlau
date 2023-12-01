import { Card } from "../components/card/Card"
import Link from 'next/link'

async function getProducts(){
    const res = await fetch (`https://assessment2-product-default-rtdb.firebaseio.com/product.json`)   
    return await res.json()
}

async function ProductsPage () {
  const products = await getProducts()
  const productDetails = Object.keys(products).map(key=>{
        return products[key]
  })
  return (
    <>
      
    
      <header className="text-center p-12">
        <h2 className="text-extrabold text-4xl text-green-800">Check Out Our Products!</h2>
      </header>
      <main className="p-10 my-5 flex flex-wrap justify-center">
        {
          productDetails.map((product) => <Card key={product.uid}  {...product} />) 
        }
      </main>
  
     
    </>
  );
}

export default ProductsPage
export {getProducts}