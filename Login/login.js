// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIdmRUXyqZdXq1UMZYUvQC7PSpYwbaCWs",
  authDomain: "strorylogin.firebaseapp.com",
  databaseURL: "https://strorylogin-default-rtdb.firebaseio.com",
  projectId: "strorylogin",
  storageBucket: "strorylogin.appspot.com",
  messagingSenderId: "754745650654",
  appId: "1:754745650654:web:0c6f9a3498107a9531814f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
const login = document.getElementById('gooey-button');

login.addEventListener('click', (e) =>{

  var email = document.getElementById('email').value;
var password = document.getElementById('psw').value;

/*  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid), {
      email: email,
      password: password
    })
    .then(() => {
      alert("user created succesfully");
    })
    .catch((error) =>{
      alert(error);

    })
    

  })
  .catch((error) => {
    const errorCode = error.Code;
    const errorMessage = error.message;

    alert(errorMessage);

  });
*/

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    var lgdate = new Date();
    update(ref(database, 'users/' + user.uid), {
      last_login: lgdate.toLocaleString() ,
    })
    .then(() => {
      alert("logged in succesfully")
      document.getElementById('goon').click();
    })
    .catch((error) =>{
      alert(error);
    })
  })
  .catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.massage;
    alert(errorMessage);
  })
});






