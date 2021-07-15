import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD92HjB-jnI3IWkhttHhg7Dx_Hl2tks8Lg",
  authDomain: "fir-fda30.firebaseapp.com",
  projectId: "fir-fda30",
  storageBucket: "fir-fda30.appspot.com",
  messagingSenderId: "159989316951",
  appId: "1:159989316951:web:94845753ceab57c9ca9212"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app()
  const db = app.firestore()
  export default db