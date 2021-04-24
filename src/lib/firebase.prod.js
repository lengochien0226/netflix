
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

// const config = {
//     apiKey: "AIzaSyC_4Jdh6aIbZbQ5lAvTYx1XwH_QP8apRr4",
//     authDomain: "netflix-a9c41.firebaseapp.com",
//     projectId: "netflix-a9c41",
//     storageBucket: "netflix-a9c41.appspot.com",
//     messagingSenderId: "241711240767",
//     appId: "1:241711240767:web:e9cb5bc450f71578150a8a"
// };
const config = {
    apiKey: "AIzaSyChqCO8KQJyqIIHo3i7_RrijbSQvyAwg5c",
    authDomain: "netflix-backup-8cba8.firebaseapp.com",
    projectId: "netflix-backup-8cba8",
    storageBucket: "netflix-backup-8cba8.appspot.com",
    messagingSenderId: "938737392256",
    appId: "1:938737392256:web:c373c9a81c19231c1ce465"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };