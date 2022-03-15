document.querySelector("#signup-form-div").addEventListener("submit",signupdetails);
var allusers=JSON.parse(localStorage.getItem("userdetails"))|| [];
    function signupdetails(event){
        event.preventDefault();
        var name=document.querySelector("#name").value;
        var number=document.querySelector("#mobile").value;
        var email=document.querySelector("#email").value;
        var password=document.querySelector("#password").value;
        var data={
            name:name,
            number:number,
            email:email,
            password:password
        }
        allusers.push(data);
        console.log(allusers);
        localStorage.setItem("userdetails",JSON.stringify(allusers));
        document
      .querySelector("input[type='submit']")
      .addEventListener("click", function () {
        window.location.href = "login.html";
      });
    }