 // Your web app's Firebase configuration
  
 var firebaseConfig = {
    apiKey: "AIzaSyDL6Cp5LNTd18kA_-ZnunwmWLcYejIQTKA",
    authDomain: "trials-5ee12.firebaseapp.com",
    databaseURL: "https://trials-5ee12.firebaseio.com",
    projectId: "trials-5ee12",
    storageBucket: "",
    messagingSenderId: "922186205784",
    appId: "1:922186205784:web:06d147bfd9b210f3"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   console.log("firebaseloaded");

   //initialize firestore database and save the instance to db variable
   const db=firebase.firestore();

   //create a collection and empty document and save the instance docRef variable
   //const docRef=db.doc("register/sample");
   const save = document.getElementById("submitdata");

   //declared this global variable so they can be accessed by all funtions
   let Sname,Lname,Email,Phone,Uname,Pass,CPass,container,sendinglayout,successlayout,failed;
    container=document.getElementById("container");
    sendinglayout=document.getElementById("sendinglayout");
    successlayout=document.getElementById("successlayout");
    failed=document.getElementById("failed");

    sendinglayout.style.display="none";
    successlayout.style.display="none";
    failed.style.display="none";

const submitdata=document.getElementById("submitdata");
submitdata.addEventListener("click" , () =>{
  // const date= Date.now();
   //save.addEventListener("click", ()=>{
        let Sname =document.getElementById("Surname").value;
        let Lname =document.getElementById("Lastname").value;
        let Email =document.getElementById("Email").value;
        let Phone =document.getElementById("Number").value;
        let Uname =document.getElementById("Username").value;
        let Pass = document.getElementById("Password").value;
        let CPass = document.getElementById("CPassword").value;
        
       if (!Sname.match(/^[a-zA-Z]+$/)){
            alert ("Input your Surname")
        }
        else if (!Lname.match(/^[a-zA-Z]+$/)){
            alert ("Input your Last Name")
        }
        else if (!Email.includes("@")) {
            alert ("Input your Email ")
        }
        else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
            alert ("Invalid Phone Number")
        }
        else if (!Uname.match(/^[a-zA-Z0-9]+$/)){
            alert ("Input your Username")
        }
        else if (!Pass.match(/^[a-zA-Z0-9]+$/)||Pass.length < 5) {
            alert("Input your Password")
        }
        else if (!CPass.match(Pass)){
            alert ("Invalid confirm password")
        }
        else {
            sendata()
        };
        const sendata =()=>{
            container.style.display=none;
            sendinglayout.style.display=block;
            sendtodatabase();
        }
        const sendtodatabase=() =>{
            let docRef=db.collection("container").doc(phone)
        
        docRef.set({
          Surname: Sname,
          Lastname:Lname,
          Email: Email,
          Number: Phone,
          Password: Pass,
          Comfirmpassword: CPass
        }).then (function (){
            sendinglayout.style.display="none";
            successlayout.syle.display="block";
            console.log("successfully loaded");
        }).catch(function(error){
            container.style.display="block";
            failed.style.display="block";
            console.log("got an error:",error);
        })
    }

