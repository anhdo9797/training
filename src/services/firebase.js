import firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyCOwN9vJ1mjrod0vXlnQZ_flrHmkByhNAI',
    authDomain: 'selloapp-eb391.firebaseapp.com',
    databaseURL: 'https://selloapp-eb391.firebaseio.com',
    projectId: 'selloapp-eb391',
    storageBucket: 'selloapp-eb391.appspot.com',
    messagingSenderId: '408740375125',
    appId: '1:408740375125:web:c1c23492b4fb04e19242dc',
    measurementId: 'G-646ZEF137L',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
