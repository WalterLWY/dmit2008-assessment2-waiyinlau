import Link from 'next/link'
import Image from 'next/image'


function SingleProductCard ({product_name, price, image_url, description, uid}){
    return (
           <aside className='m-10 px-10'>
            <h2>{product_name}</h2>
            <img src={image_url} alt="product-image" width={150}/>
            <p>Price: {price}</p>
            <p>UID: {uid}</p>
            <p>Description: {description}</p>
            <Link className='text-blue-600 font-semibold' href={`/products`}>Back to Products Page</Link>
  
           </aside>
    )
  }

  export {SingleProductCard}