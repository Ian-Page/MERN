import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyD-tMCuiGkUNqkiPUc7Dad7QjggOKQKLVU",
    authDomain: "tinder-clone-app-745c5.firebaseapp.com",
    projectId: "tinder-clone-app-745c5",
    storageBucket: "tinder-clone-app-745c5.appspot.com",
    messagingSenderId: "768244448150",
    appId: "1:768244448150:web:a1bfaa7a7cb1d5a679bbb7",
    measurementId: "G-EPE7693ZR9"

};
const firebaseApp = firebase.intializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
/*1:35:28*/