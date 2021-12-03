import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBA8NWHZzvxh8-IFQiRUXhwVJoykPFvqn0",
    authDomain: "roar-in.firebaseapp.com",
    databaseURL: "https://roar-in-default-rtdb.firebaseio.com",
    projectId: "roar-in",
    storageBucket: "roar-in.appspot.com",
    messagingSenderId: "219636832060",
    appId: "1:219636832060:web:303f0729e74777527df039"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
