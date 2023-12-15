import Link from 'next/link'
import Image from 'next/image'
import { BuyNow } from '../buynowform/BuyNowForm'


function SingleProductCard ({product_name, price, image_url, description, uid, priceId}){
    return (
           <aside className='m-10 p-10 bg-green-200'>
            <h2 className='p-1 font-bold text-lg'>{product_name}</h2>
            <img className='p-1' src={image_url} alt="product-image" width={150}/>
            <p className='p-1 font-bold'>Price: {price}</p>
            <p className='p-1 font-bold'>UID: {uid}</p>
            <p className='p-1'>Description: {description}</p>
            <BuyNow priceId={priceId}/>
            <Link className='text-blue-600 font-semibold' href={`/products`}>Back to Products Page</Link>
           </aside>
    )
  }

  export {SingleProductCard}