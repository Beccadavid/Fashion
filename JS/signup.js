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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");
  const db= firebase.firestore();
  const docRef = db.collection("messages").doc();
  const firestore = firebase.firestore();
  let save = document.getElementById('save');


//declared this global variable so they can be accessed by all funtions
let Name,Address,Email,Phone,Password,Cpassword,container,sendinglayout,successlayout,failed;/*,male,female,dob;*/
    container=document.getElementById("container");
    sendinglayout=document.getElementById("sendinglayout");
    successlayout=document.getElementById("successlayout");
    failed=document.getElementById("failed");

    sendinglayout.style.display="none";
    successlayout.style.display="none";
    failed.style.display="none";
    const submitdata=document.getElementById("submitdata");
    submitdata.addEventListener("click" , () =>{

    //const date= Date.now();
    //save.addEventListener("click", ()=>{
     Name=document.getElementById("Name").value;
     Address=document.getElementById("Address").value;
     Email=document.getElementById("Email").value;
     Phone= document.getElementById("Phone").value;
     Password= document.getElementById("Password").value;
     Cpassword=document.getElementById("Cpassword").value;
  /*  let male=document.getElementById("male").value;
    let female=document.getElementById("female").value;
    let dob=document.getElementById("dob").value;*/
if(Name==null || Name==""){
    alert("please input your full name")
}
     else if(Address==null || Address==""){
        alert("please input your address")
    }
    else if(!Email.includes("@")){
        alert("your email is incorrect")
    }
    else if(Phone.length<11 || Phone.length>11){
             alert("Your phone number is incorrect")
    }
    else if(Password=="" || Password==null){
        alert("please input your password")

    } 
    else if(!Cpassword.match(Password)){
        alert("incorrect password")
    }
    else{
        sendData()
    }
});
    const sendData =()=>{
        container.style.display="none";
        sendinglayout.style.display="block";
        sendToDatabase();
    }
    const sendToDatabase=() =>{
        let docRef=db.collection("collect").doc(Phone)
        docRef.set({
            Fullname: Name,
            Address:Address,
            Email: Email,
            Phone: Phone,
            Password: Password,
            Cpassword: Cpassword
           /* male:male,
            female:female,
            dob:dob*/
  
      })
      .then(function(){
        sendinglayout.style.display="none";
        successlayout.style.display="block";  
        console.log("registrated successfully");
  })
      .catch(function(error){
        container.style.display="block";
        failed.style.display="block";  
        console.log("Got an error:",error);
  });
  };
     