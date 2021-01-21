import app from 'firebase/app';

import React from 'react';
import 'firebase/firestore'
import 'firebase/database'
 
//const FirebaseContext = React.createContext(null);
 


const config = {
    apiKey: 
    authDomain: 
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId:
    appId: 
  };

  //class Firebase {
  //  constructor() {
  //    app.initializeApp(config);
  //    this.db =  app.firestore();
  //    this.rdb =  app.database();
  //  }
 // }
   
const fbApp = app.initializeApp(config);
export const DB = fbApp.firestore();
export const RDB = fbApp.database();

 // export default Firebase;

 // export {FirebaseContext};