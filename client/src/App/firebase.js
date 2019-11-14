import * as firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyA20qu9ddnRJPAQgGpn9ySQLuqjLH2WWPI",
  authDomain: "firefightingmonitoringsystem.firebaseapp.com",
  databaseURL: "https://firefightingmonitoringsystem.firebaseio.com/",
  projectId: "firefightingmonitoringsystem",
  storageBucket: "firefightingmonitoringsystem.appspot.com",
  messagingSenderId: "406168990526"
}

firebase.initializeApp(firebaseConfig);

export default firebase;