import {db} from '@/lib/firebase/firebaseConfig'

/* 
    Route Path To The GET function...
    api/fire/

*/

async function GET (req, {params}) {

  const dbRef =  db.ref('/product')
  const dataSnapshot = await dbRef.once('value')
  const rtdData = dataSnapshot.val()
  return Response.json(rtdData)

  // const res = await fetch(`https://assessment2-product-default-rtdb.firebaseio.com/product.json`)
  // const data = await res.json()
  // return Response.json(data)

  //  const dbRef = db.ref('/employees')
  //  const dataSnapshot = await dbRef.once('value')
  //  const employees = await dataSnapshot.val()
   
  // return Response.json(employees)
}

export {GET}