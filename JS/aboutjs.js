  // Your web app's Firebase configuration
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
  const db = firebase.firestore();
  const docRef = db.collection("messages").doc();
  const firestore = firebase.firestore();
  let save = document.getElementById("save");
  
   let name,lname,Email,phone,sub;
   
   save.addEventListener("click", () => {  
     name=document.getElementById("name").value;
     lname=document.getElementById("lastname").value;
     Email=document.getElementById("email").value;
     //E= Email.includes("@");
     phone= document.getElementById("phone").value;
     sub= document.getElementById("subject").value;

    if (!name.match(/^[a-zA-Z]+$/)){
      alert ("please input your frist name")
  }
  else if (!lname.match(/^[a-zA-Z]+$/)){
      alert ("please input your last name")
  }
  else if (!Email.includes("@")) {
      alert ("Invalid Email ")
  }
  else if (!phone.match(/^[0-9]+$/)||phone.length < 11 || phone.length > 11) {
      alert ("Incorrect Phone Number")
  }
  else if (!sub.match(/^[a-zA-Z]+$/)){
      alert ("Incorrect Message")
  }
  else {
    alert("your form has been submitted")
    }
  });
      let docRef=db.collection("identity").doc(phone)
      docRef.set({
          name:name,
          lname:lname,
          Email:Email,
          phone:phone,
          sub:sub
        })
        .then(function(){
         console.log("registrated successfully");
    })
        .catch(function(error){
          console.log("Got an error:",error);
    });
    