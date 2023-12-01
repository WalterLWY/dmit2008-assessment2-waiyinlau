import Link from 'next/link'
import Image from 'next/image'


function SingleProductCard ({product_name, price, image_url, description, uid}){
    return (
           <aside>
            <h2>{product_name}</h2>
            <Image
             src={image_url}
             width={200}
             height={200}
             alt={product_name}
            />
            <p>Price: {price}</p>
            <p>UID: {uid}</p>
            <p>Description: {description}</p>
            <Link className='text-blue-600 font-semibold' href={`/products`}>Back to Products Page</Link>
  
           </aside>
    )
  }

  export {SingleProductCard}