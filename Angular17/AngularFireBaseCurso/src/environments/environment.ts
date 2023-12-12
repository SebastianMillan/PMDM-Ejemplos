// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD3vg3_t5inUX74ZhUxk-GIQVN40bFbKEA",
        authDomain: "angularfirebasecurso-1afad.firebaseapp.com",
        databaseURL: "https://angularfirebasecurso-1afad-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "angularfirebasecurso-1afad",
        storageBucket: "angularfirebasecurso-1afad.appspot.com",
        messagingSenderId: "786939493731",
        appId: "1:786939493731:web:7d14da25958cf6ee7be756",
        measurementId: "G-51KSDVTDL1"
    },
    title: 'AngularFirebaseProject DEV'
}

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);