//import {url} from './config.js';
let url = "http://165.227.84.121:4000"

console.log("cookies",document.cookie);
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
      .get(`${url}/user/me`)
      .then(
        (response) => {
         const me=response.data.data;
         console.log({me});
         document.getElementById('username_heading').innerHTML=me.name;
         document.getElementById('username1').value=me.name;
         document.getElementById('email').value=me.email;
        },
        (error) => {
          console.log("Your are not logged in");
          console.log(error);
        }
      );
 
 
};
getMe();
 
console.log("profile file");
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