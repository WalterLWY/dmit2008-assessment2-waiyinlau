import {db} from '@/app/lib/firebase/firebase-config'

/* 
    Route Path To The GET function...
    api/fire/

*/



async function GET (req, {params}) {

   const dbRef = db.ref('/employees')
   const dataSnapshot = await dbRef.once('value')
   const employees = await dataSnapshot.val()
   
  return Response.json(employees)
}

export {GET}