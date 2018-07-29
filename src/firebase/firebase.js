import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAtaSlPyhptYO5qZuXUFYUea-ZNvl8agjk",
    authDomain: "movie-libary.firebaseapp.com",
    databaseURL: "https://movie-libary.firebaseio.com",
    projectId: "movie-libary",
    storageBucket: "movie-libary.appspot.com",
    messagingSenderId: "352931970617"
};
firebase.initializeApp(config);

// const database = firebase.database();
const dbRef = firebase.database();

export default dbRef;

// export { firebase, database as default };