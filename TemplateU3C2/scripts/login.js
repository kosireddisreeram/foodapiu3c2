var allusers=JSON.parse(localStorage.getItem("userdetails"))|| [];
console.log(allusers);
document.querySelector("#login-form-div").addEventListener("submit",details);
var form=document.querySelector("#form");
function details(event){
    event.preventDefault();
    var email=form.email.value;
    var password=form.password.value;
    console.log(email,password)
    for(var i=0;i<allusers.length;i++){
        if(allusers[i].email==email && allusers[i].password==password){
            flag=true;
        }
        else{
            flag=false;
        }
    }
    if(flag==true){

document
.querySelector("input[type='submit']")
.addEventListener("click", function () {
window.location.href = "index.html";
});
}


else {
  alert("invalid credentials")
}
}