import * as firebase from 'firebase'
import 'firebase/storage';

// var firebaseConfig = {
//     apiKey: "AIzaSyACruybcovD1JOIZXhO0r_SYFlwRAuFjiI",
//     authDomain: "yomanq-626e0.firebaseapp.com",
//     databaseURL: "https://yomanq-626e0.firebaseio.com",
//     projectId: "yomanq-626e0",
//     storageBucket: "yomanq-626e0.appspot.com",
//     messagingSenderId: "273900831925",
//     appId: "1:273900831925:web:2ce778c5ee178906d2eafc"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyD75i2YWo9ylatizQxt0pi4rSNCjIxV4_Q",
//     authDomain: "YOUR AUTH DOMAIN",
//     databaseURL: "https://yoman-c8e76.firebaseio.com/",
//     projectId: "yoman-c8e76",
//     storageBucket: "gs://yoman-c8e76.appspot.com/",
//     messagingSenderId: "YOUR SENDER ID ",
//     appId: "1:495102656636:web:49e7a86ad8f11cadcd49f9"
//   };

// var firebaseConfig = {
//     apiKey: "AIzaSyD75i2YWo9ylatizQxt0pi4rSNCjIxV4_Q",
//     authDomain: "yoman-c8e76.firebaseapp.com",
//     databaseURL: "https://yoman-c8e76.firebaseio.com",
//     projectId: "yoman-c8e76",
//     storageBucket: "yoman-c8e76.appspot.com",
//     messagingSenderId: "495102656636",
//     appId: "1:495102656636:web:49e7a86ad8f11cadcd49f9",
//     measurementId: "G-SG02SNQHPW"
// };

const firebaseConfig = {
    apiKey: "AIzaSyD75i2YWo9ylatizQxt0pi4rSNCjIxV4_Q",
    authDomain: "yoman-c8e76.firebaseapp.com",
    databaseURL: "https://yoman-c8e76.firebaseio.com/",
    projectId: "yoman-c8e76",
    storageBucket: "gs://yoman-c8e76.appspot.com/",
    messagingSenderId: "YOUR SENDER ID ",
    appId: "1:495102656636:web:49e7a86ad8f11cadcd49f9"
};
//

// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default fireDB.database().ref();
