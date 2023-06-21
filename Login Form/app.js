const sub = document.getElementById("log");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
let count =0;
sub.addEventListener("click",()=>{
   if (email.value==""){
       document.getElementById("er").innerHTML="Email Required"
       count++;
}
    else{
      let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      let result = regex.test(email.value);
      if (!result){
        document.getElementById("er").innerHTML="Not Valid"
        count++;
      }else
    document.getElementById("er").innerHTML=""
}

if (pass.value==""){
    document.getElementById("pr").innerHTML="Pass Required"
    count++;
  }
   else{
    document.getElementById("pr").innerHTML=""
  }

  if (count==0){
    const details = {
      email: email.value,
      pass: pass.value,
    };
    login(details);
    clearForm();


  }

  count=0;
})

function login(details){
  const userList = localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")): [];
  if (userList.length<=0){

  }else{
    const index = userList.findIndex(obj=> obj.email==details.email && obj.password==details.pass);
    if (index==-1){
      //Not exist
      document.getElementById("suc").innerHTML="Password or email is incorrect"
    }
    else{
      document.getElementById("suc").innerHTML="Login Success!"
      setTimeout(()=>{
        nextPage();
      },3000)
      // exist
    }
  }
}
function clearForm() {
  document.getElementById("reset").click();
}

email.onclick= function(){
  document.getElementById("suc").innerHTML=""
}
pass.onclick= function(){
  document.getElementById("suc").innerHTML=""
}

function nextPage(){
  document.getElementById("next").click();
}


