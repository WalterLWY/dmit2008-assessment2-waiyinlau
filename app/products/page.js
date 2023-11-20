import { Card } from "../components/card/Card"

async function getProducts(){
    const res = await fetch (`https://assessment2-product-default-rtdb.firebaseio.com/product.json`)   
    return await res.json()
}

// async function ProductsPage ({children}) {
//     const products = await getProducts()
//     const keys = Object.keys(products)
//     keys.map(key=> {
//       console.log(products[key])
//     })
//     return (
//     <>
      
//       <header className="text-center pt-28">
//         <h2 className="text-medium text-green-800">Check Out Our Products!</h2>
//       </header>
//       <main className=" min-h-screen py-24">
//         {
//           products.map((product) => <Card key={product.uid}  {...product} />) 
//         }
//       </main>
     
//     </>
//   );
// }


async function ProductsPage ({children}) {
        // RTDB---> Object of Objects  Nosql
        // Object extract the keys----Object.keys()
  const employees = await getProducts()
  const keys = Object.keys(employees)
        // map filter find sort reduce....
        // obj.propname  associative array
        // first_name
        // obj['propname']
        // array[0] index array

  keys.map(key=> {
    console.log(employees[key])
  })

  return (
    <>
      
    
      <header className="text-center pt-28">
        <h2 className="text-medium text-green-800">Check Out Our Products!</h2>
      </header>
      <main className=" min-h-screen py-24">
        {
          // employees.map(employee => console.log("employee card compon"))
          employees.map((employee) => <Card key={employee.id}  {...employee} />) 
        }
      </main>
  
     
    </>
  );
}

export default ProductsPage