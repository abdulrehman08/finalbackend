function login() {
    const name = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
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
          console.log(response);
          window.location = "/dashboard";
        },
        (error) => {
          alert("Incorrect username or password");
          console.log(error);
        }
      );
  }
