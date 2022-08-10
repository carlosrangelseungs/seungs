import {initializeApp} from 'firebase/app'

import {getFirestore}  from  '@firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyA66uiRT_npen_dOyBf0ne81eKYqZ_CKxo",
    authDomain: "seungs-solution.firebaseapp.com",
    databaseURL: "https://seungs-solution-default-rtdb.firebaseio.com",
    projectId: "seungs-solution",
    storageBucket: "seungs-solution.appspot.com",
    messagingSenderId: "357600281790",
    appId: "1:357600281790:web:f3da59b161bfcb237b8aef",
    measurementId: "G-36TJWSCRCS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db=getFirestore(app)
