import firebase from 'firebase';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAF3El7Hs-Q-HCM-SJnMTCNetrysChTx0k',
  authDomain: 'payments-charge.firebaseapp.com',
  projectId: 'payments-charge',
  storageBucket: 'payments-charge.appspot.com',
  messagingSenderId: '373455553529',
  appId: '1:373455553529:web:4135386aae09d68c39b328',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
