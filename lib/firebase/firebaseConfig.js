import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import {serviceKey} from "@/config/serviceKey" 
 
 
 
 if(!getApps().length){
  initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL:"https://assessment2-product-default-rtdb.firebaseio.com/",
    databaseAuthVariableOverride: {
      uid: "retailshop"
    }
  });
 }

// app/api/test/route.js
const db = admin.database()
 
export {db}

