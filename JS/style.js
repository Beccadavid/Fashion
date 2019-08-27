function myfunction(){
    var fname=document.getElementById("fname").Value;
    var lname=document.getElementById("lname").Value;
    var pnumber=document.getElementById("pnumber").value;
    var email=email.include("@"); 
    var password=document.getElementById("password").value;
    var message=document.getElementById("meassage").value;
     
    if(fname==null  || fname=="" ){
        alert("input your frist name")
    }
  else  if(lname==null || lname=="" ){
        alert("input your last name")
    }
else if(pnumber.length<11 || pnumber.length>11){
    alert("incorrect phone number")
}
 else if(!email.include("@")){
    alert("invalid email address")
 }
  else if(password==null ||password==""){
    alert("input your password")
 } 
  else if(message=="" ||message==null){
 alert("please leave a message")
 }
  else{
    alert("the page has been submitted")
 }
}