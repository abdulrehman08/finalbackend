import {url} from './config.js';
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

