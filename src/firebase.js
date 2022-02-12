import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: 'AIzaSyA8sr0cRpBE96bPUWwAU-80pj94sW_SGY8',
  authDomain: 'uinchat.firebaseapp.com',
  projectId: 'uinchat',
  storageBucket: 'uinchat.appspot.com',
  messagingSenderId: '312224401738',
  appId: '1:312224401738:web:8a9ec52d74d14937b459b3',
}).auth()

