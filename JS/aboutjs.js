  var firebaseConfig = {
    apiKey: "AIzaSyBDyzoSR5nkgcgrm7Z5HKjekM3WACVE2v8",
    authDomain: "fashion-house-project.firebaseapp.com",
    databaseURL: "https://fashion-house-project.firebaseio.com",
    projectId: "fashion-house-project",
    storageBucket: "",
    messagingSenderId: "829114247781",
    appId: "1:829114247781:web:6887cc6579a1185c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebaseloaded");
  const db = firebase.firestore();
  const docRef=db.collection("messages").doc();
  const firestore = firebase.firestore();
  let save = document.getElementById("save");

  save.addEventListener("click", () => {  
    var name=document.getElementById("name").value;
    var lname=document.getElementById("lastname").value;
    var Email=document.getElementById("email").value;
    var E= Email.includes("@");
    var phone_num= document.getElementById("phone").value;
    var sub= document.getElementById("subject").value;

    if (!name.match(/^[a-zA-Z]+$/)){
      alert ("please input your frist name")
  }
  else if (!lname.match(/^[a-zA-Z]+$/)){
      alert ("please input your last name")
  }
  else if (!Email.includes("@")) {
      alert ("Invalid Email ")
  }
  else if (!phone_num.match(/^[0-9]+$/)||phone.length < 11 || phone_num.length > 11) {
      alert ("Incorrect Phone Number")
  }
  else if (!sub.match(/^[a-zA-Z]+$/)){
      alert ("Incorrect Message")
  }
  else {
      alert ("your form has been submitted")
     


      docRef.set({
        name:name,
        lastname:lname,
        email:Email,
        phone:phone,
        subject:subject
      }
      )
      .then(function(){
        console.log("Successfully Saved");
      })
      .catch(function(error){
        console.log("Got an error:",error);
      });
    }
      })

    


   