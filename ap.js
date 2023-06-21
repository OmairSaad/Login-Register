let name = document.getElementById("name");
const email = document.getElementById("email");
const pass= document.getElementById("pass");
const Confpass= document.getElementById("conf");
const register = document.getElementById("reg");
let error =0;
register.addEventListener("click", ()=>{
    if (name.value==""){
        error++;
        document.getElementById("nr").innerHTML="Name Required";
    }
         else{
        document.getElementById("nr").innerHTML="";
        
    }
    if (email.value==""){
        error++;
        document.getElementById("er").innerHTML="Email Required";
        
    }
    else{
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let result = regex.test(email.value);
        if (!result){
            document.getElementById("er").innerHTML="Not valid";
            error++;
        }else
        document.getElementById("er").innerHTML="";
        
    }
    if (pass.value==""){
        error++;
        document.getElementById("pr").innerHTML="Pass Required";
        
    }
     else{
        if(String(pass.value).length<=5 ||String(pass.value).length>=12 ){
            document.getElementById("pr").innerHTML="Password should be between 5 to 12";
        }else
        document.getElementById("pr").innerHTML="";
        
    }

    if (Confpass.value==""){
        error++;
        document.getElementById("cr").innerHTML="Conf Required";
        
    }
    else{
        if (Confpass.value!=pass.value){
        document.getElementById("cr").innerHTML="Password not matched";
        error++;
        document.getElementById("cr").style.autofocus="true"
        }else
        document.getElementById("cr").innerHTML="";
        
    }
  if(error==0){
    const details = {
        name: name.value,
        email: email.value,
        password: pass.value
    };
    saveUser(details);
  }else{
    document.getElementById("name").onclick= function (){
    document.getElementById("dup").innerHTML=""
    }
    document.getElementById("email").onclick= function (){
    document.getElementById("dup").innerHTML=""
    }
  }
  error=0;
})

function saveUser(details){
   const user = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): [];
   if (user.length==0){
    user.push(details);
    localStorage.setItem("user", JSON.stringify(user));
    document.getElementById("dup").innerHTML="Registration Success!"
    clearForm();
   } else{
    const index = user.findIndex(obj => obj.email == details.email);
    if (index==-1){
        user.push(details);
        localStorage.setItem("user", JSON.stringify(user));
        document.getElementById("dup").innerHTML="Registration Success!"
        clearForm();
    }
    else{
        document.getElementById("dup").innerHTML="Email is already exist"
    }
   }
}

function clearForm(){
    const clear = document.getElementById("reset");
    clear.click();
}