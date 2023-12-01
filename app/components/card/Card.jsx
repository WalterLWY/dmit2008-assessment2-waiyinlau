import Link from 'next/link'
// Week 5 - Class 2 - Employee Instructor - 2
/* 
           Presentational Component
           jsx + data ==== templating
*/ 

function Card ({product_name, price, image_url, description, uid} ){
    return (
         <aside className="w-[500px] m-2 bg-green-50">
            <header>
                <h2>{product_name}</h2>
            </header>
            <ul>
                <li><img src={image_url} alt="product-image" width={150}/></li>
                <li>Price: {price}</li>
                <li>Description: {description}</li>
                <li>Product ID: {uid}</li>
                <li><Link className='text-blue-600 font-semibold' href={`/product/${uid}`}>Single Product Link to Product Page {uid}</Link></li>
            </ul>
         </aside>
       
    )
 }


// function Card ({ name, email, phone, id} ){
//     return (
//          <aside className="w-[320px] h-[250px] bg-gray-50">
//             <header>
//                 <h2>{name}</h2>
//             </header>
//             <ul>
//                 <li>{email}</li>
//                 <li>{phone}</li>
//                 <li>{id}</li>
//             </ul>
//          </aside>
       
//     )
//  }

 export {Card}