//import { url } from "./config.js";
let url = "http://165.227.84.121:4000";
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

const login=document.getElementById('cmt-login-form');
if (login) {
  login.addEventListener('submit',e=>{
    e.preventDefault();
    const name = document.getElementById("username1").value;
    const password = document.getElementById("password").value;
    if (!name || !password) {
      return alert("Please Enter Username and Password");
    }
    axios
      .post(`${url}/user/signin`, {
        name: name,
        password: password,
      })
      .then(
        (response) => {
          
          const token=response.data.token
          //console.log(token);
          const user=parseJwt(token);
          localStorage.setItem("token" , "token");
          localStorage.setItem("username" , user.name);
          localStorage.setItem("user" , user);
          
          var expiresIn = new Date(new Date().getTime()+(5*24*60*60*1000));
          document.cookie = `jwt=${token}; expires=${expiresIn}; path=/`  
          // window.location.replace("https://admin.qub-store.com/dashboard");
          window.location.replace("/index.html");
        },
        (error) => {
          alert("Incorrect username or password");
          console.log(error);
        }
      );
  });
}

  // signup
  const sings = document.querySelector(".sign_up");
if (sings) {
  sings.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({ name: "test" });
    const username = document.getElementById("username1").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    
    console.log(document.getElementById("username1"));

    if (!username || !email || !passwordConfirm || !password) {
      return alert("Please Enter complete information!!!");
    }
    axios
      .post(`${url}/user/signup`, {
        name: username,
        email,
        password,
        passwordConfirm,
        headers : {"Content-Type" : "application/json"}
      }  )
      .then(
        (response) => {
          //    console.log(response.data.token);
          //    localStorage.setItem('x-token',response.data.token)
          //    getAllUser();
          // console.log(response);
          // window.location.replace("https://admin.qub-store.com/dashboard");
          const token=response.data.token
          //console.log(token);
          const user=parseJwt(token);
          // console.log(user);
          localStorage.setItem("token" , "token");
          localStorage.setItem("username" , user.name);
          localStorage.setItem("user" , user);
          
          var expiresIn = new Date(new Date().getTime()+(5*24*60*60*1000));
          document.cookie = `jwt=${token}; expires=${expiresIn}; path=/`  
          
          // window.location.replace("https://admin.qub-store.com/dashboard");
          
          window.location.replace("/index.html");
        },
        (error) => {
          alert("Incorrect username or password");
          console.log(error);
        }
      );
  });
}

// console.log("raftar");

function logged(){
// console.log(localStorage.getItem("user"));
// console.log(document.cookie);
}
logged();

