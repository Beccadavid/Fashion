var firebaseConfig = {
    apiKey: "AIzaSyBBbYtX4SElETHBVL0j4zCnjEqH6xUydew",
    authDomain: "fashion-house-88f18.firebaseapp.com",
    databaseURL: "https://fashion-house-88f18.firebaseio.com",
    projectId: "fashion-house-88f18",
    storageBucket: "fashion-house-88f18.appspot.com",
    messagingSenderId: "732411706688",
    appId: "1:732411706688:web:784ef578132b27ff"
  };
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");

  let email,pass;
  const login=document.getElementById("login");
  login.addEventListener('click' ,()=>{
    email=document.getElementById("email").Value;
    pass=document.getElementById("pass").Value;


    firebase.auth().logInwithEmailAndPassword(email,pass).then(function(){
      window.location="index.html";
}).catch(function(error){
  var errorcode=error.code;
  var errormessage=error.message;
  console.log("Got an error:",error);
})
  }
  );