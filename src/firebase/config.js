import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkiyLPXTU-Xh4R2WSzZXyW54JIRCR-eGw",
    authDomain: "vue-blog-system-16997.firebaseapp.com",
    projectId: "vue-blog-system-16997",
    storageBucket: "vue-blog-system-16997.appspot.com",
    messagingSenderId: "635452370664",
    appId: "1:635452370664:web:b56d2b72d284655942235d",
    measurementId: "G-4KK3DPJ8E9"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default { db };