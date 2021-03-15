
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC_4Jdh6aIbZbQ5lAvTYx1XwH_QP8apRr4",
    authDomain: "netflix-a9c41.firebaseapp.com",
    projectId: "netflix-a9c41",
    storageBucket: "netflix-a9c41.appspot.com",
    messagingSenderId: "241711240767",
    appId: "1:241711240767:web:e9cb5bc450f71578150a8a"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };