
const User = async() =>{
  

    var profile = document.getElementById("nav-user");
    console.log("lett" , profile)
    document.getElementById("nav-user").addEventListener("mouseover" , ()=>{
      console.log(document.getElementById("profile"));   
      if(localStorage.token){  
      document.getElementById("profile").style="display:visible;";
    }
    })
    user.addEventListener("mouseleave" , ()=>{
      if(localStorage.token){
      document.getElementById("profile").style="display:none;";
    }
    })
  
  }
  
  User();

let username = localStorage.getItem("username");
document.getElementById("username").innerHTML=username;