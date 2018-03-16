import firebase from 'firebase';

const config = {
        apiKey: "AIzaSyCcQ3LnzQtM0ffQTAt8csbAeW72meXUSZY",
        authDomain: "bus-pickups.firebaseapp.com",
        databaseURL: "https://bus-pickups.firebaseio.com",
        projectId: "bus-pickups",
        storageBucket: "bus-pickups.appspot.com",
        messagingSenderId: "1076430871908"
 };
firebase.initializeApp(config);
export default firebase