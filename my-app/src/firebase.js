import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyD3h3rPlL-WKbyKWe4jjy75spr5Rg2DFA4",
    authDomain: "projektnr1-41be8.firebaseapp.com",
    databaseURL: "https://projektnr1-41be8.firebaseio.com",
    projectId: "projektnr1-41be8",
    storageBucket: "projektnr1-41be8.appspot.com",
    messagingSenderId: "562254773350"
};
firebase.initializeApp(config);

export const database = firebase.database();