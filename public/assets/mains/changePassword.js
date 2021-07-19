//import {url} from './config.js';
let url = "http://165.227.84.121:4000"
console.log(document.cookie);
const configs={
    headers: {
        'x-token': document.cookie.substr(4)
      }
}
axios.interceptors.request.use(function (config) {
    const token = document.cookie;
    config.headers.Authorization =  token;
    return config;
});
function getMe(params) {
    axios
      .get(`${url}/user/me`,configs)
      .then(
        (response) => {
         const me=response.data.data;
         console.log({me});
         document.getElementById('username_heading').innerHTML=me.name;
        //  document.getElementById('username').value=me.name;
        //  document.getElementById('email').value=me.email;
        },
        (error) => {
          console.log("Your are not logged in");
          console.log(error);
        }
      );
 
 
};
getMe();
 
console.log("password changed file");
document.getElementById('change_password').addEventListener('click',e=>{
    e.preventDefault();
    updatePassword();
});

function updatePassword() {
    const currentPassword=document.getElementById('currentPassword').value;   
     const newPassword=document.getElementById('newPassword').value;
    const confirmPassword=document.getElementById('confirmPassword').value;

    axios
      .patch(`${url}/user/updatePassword`,
      {
currentPassword,
newPassword,
confirmPassword
      }
      ,configs)
      .then(
        (response) => {
         const me=response.data.data;
         console.log({me});
         window.location='/index.html';
        },
        (error) => {
          console.log("Your are not logged in");
          console.log(error);
        }
      );
 
 
};

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
