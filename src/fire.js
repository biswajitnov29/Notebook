import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAGIixMosdPWZ1ncK5D89mHGmM9utPdtQw",
    authDomain: "notebook-f0de1.firebaseapp.com",
    databaseURL: "https://notebook-f0de1.firebaseio.com",
    projectId: "notebook-f0de1",
    storageBucket: "notebook-f0de1.appspot.com",
    messagingSenderId: "1089234785100"
  };
var fire = firebase.initializeApp(config);
export default fire;