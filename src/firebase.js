import { firebase } from '@firebase/app'
import { database } from '@firebase/database'
// Initialize Firebase
 export const config = {
    apiKey: "AIzaSyDrT4Z65vOkqojuI5Ywv0UbaxxqNn8uRqk",
    authDomain: "vianorte-7d0ee.firebaseapp.com",
    databaseURL: "https://vianorte-7d0ee.firebaseio.com",
    projectId: "vianorte-7d0ee",
    storageBucket: "vianorte-7d0ee.appspot.com",
    messagingSenderId: "965766462637"
  };
  export const init = firebase.initializeApp(config);
  export const rootRef = init.database();
