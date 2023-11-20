import { Card } from "../components/card/Card"

async function getProducts(){
    const res = await fetch (`https://assessment2-product-default-rtdb.firebaseio.com/product.json`)   
    return await res.json()
}

async function ProductsPage ({children}) {
  const products = await getProducts()
  const productDetails = Object.keys(products).map(key=>{
        return products[key]
  })
  return (
    <>
      
    
      <header className="text-center pt-28">
        <h2 className="text-medium text-green-800">Check Out Our Products!</h2>
      </header>
      <main className=" min-h-screen py-60 my-1">
        {
          productDetails.map((product) => <Card key={product.uid}  {...product} />) 
        }
      </main>
  
     
    </>
  );
}

export default ProductsPage