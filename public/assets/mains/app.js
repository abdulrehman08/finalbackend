// /* eslint-disable no-undef */
import {url} from './config.js';
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
        //    console.log(response.data.token);
        //    localStorage.setItem('x-token',response.data.token)
        //    getAllUser();
        console.log(response);
        window.location = "/dashboard";
      },
      (error) => {
        alert("Incorrect username or password");
        console.log(error);
      }
    );
}

const getAllUser = async () => {
  try {
    const x_token = localStorage.getItem("x-token");
    const data = await axios.get(`${url}/user/getall`, {
      headers: {
        "x-token": x_token,
      },
    });
    console.log(data);
    getAllApks();
  } catch (error) {
    console.log(error);
  }
};

const getMe = async () => {
  try {
    const x_token = localStorage.getItem("x-token");
    const data = await axios.get(`${url}/user/me`, {
      headers: {
        "x-token": x_token,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const getAllCate = async () => {
    try {
      const {data} = await axios.get(`${url}/apk/getallcate`);
      console.log({data});
      data.data.map(cate=>{
          if (cate.category==='Games') {
            
              cate.subCategory.map(subCate=>{
                const lis = `<a class="downs" title="${subCate.name}" ><i class="sports" style="background: url(${url}/img/${subCate.image}) !important;"></i>${subCate.name}</a>`;
        const li = document.createElement("li");
        li.innerHTML = lis;
        li.querySelector(".downs").addEventListener("click", (e) => {
          e.preventDefault();
          window.location = '/topics/DiscoverApp.html?title=' + e.target.title;
        });
        document.querySelector(".c_cate_games").appendChild(li);
                  } ) 
                   }
                else if (cate.category==='Apps') {
 
                  cate.subCategory.map(subCate=>{
                    const lis = `<a class="downs" title="${subCate.name}" ><i class="action" style="background: url(${url}/img/${subCate.image}) !important;"></i>${subCate.name}</a>`;
            const li = document.createElement("li");
            li.innerHTML = lis;
            li.querySelector(".downs").addEventListener("click", (e) => {
              e.preventDefault();
              window.location = '/topics/DiscoverApp.html?title=' + e.target.title;
            });
            document.querySelector(".c_cate_apps").appendChild(li);
                      } ) 
                             }
      });
     } catch (error) {
      console.log(error);
    }
  };
  getAllCate();
  
  const addCate = async () => {
    const cate = document.getElementById("newCate").value;
    const slug = document.getElementById("newSlug").value;
    try {
      const allCate = await axios.post(`${url}/apk/addCate`,{category:cate,slug:slug});
      console.log({allCate});
      window.location='/category';
    } catch (error) {
      console.log(error);
    }
  };
const getAllApks = async () => {
  try {
    const {data} = await axios.get(`${url}/apk/approved`);
    console.log({ allApks: data.data });
    data.data.map(apk=>{
      if (apk.category==='Games') {
        const lis=` 
        <div  class="category-template-img" style="border-radius:86%"><a title=${apk.title} target="_blank" ><img alt= ${apk.title}  width="35px" height="35px" class="lazy"  src="${url}/img/${apk.image}"/ ></a></div>
        <div class="category-template-title"><a target="_blank" title=${apk.title}  >${apk.title} </a></div>
        <div class="stars" style="margin: 0 auto;"><span class="score" title=" ${apk.title}   rating 8.4" style="width:84.00000000000001%"></span><span class="star">8.4</span></div>
        <div class="category-template-down "><a rel="nofollow"  title="${apk.title}" href="#" class="downs" >Download</a></div>
    `;
   
    const li=document.createElement('li');
    li.innerHTML=lis;
    li.querySelector('.downs').addEventListener('click',(e)=>{
      e.preventDefault();
      window.location = '/ProductDetails.html?title=' + e.target.title;
    })
    if (document.querySelector('.c_all_games')) {
      document.querySelector('.c_all_games').appendChild(li);
    }
      }else if (apk.category==='Apps') {
         const lis=` 
        <div  class="category-template-img" style="border-radius:86%"><a title=${apk.title} target="_blank" ><img alt= ${apk.title}  width="35px" height="35px" class="lazy"  src="${url}/img/${apk.image}"/ ></a></div>
        <div class="category-template-title"><a target="_blank" title=${apk.title}  >${apk.title} </a></div>
        <div class="stars" style="margin: 0 auto;"><span class="score" title=" ${apk.title}   rating 8.4" style="width:84.00000000000001%"></span><span class="star">8.4</span></div>
        <div class="category-template-down "><a rel="nofollow"  title="${apk.title}" href="#" class="downs" >Download</a></div>
    `;
   
    const li=document.createElement('li');
    li.innerHTML=lis;
    li.querySelector('.downs').addEventListener('click',(e)=>{
      e.preventDefault();
      window.location = '/ProductDetails.html?title=' + e.target.title;
    })
    if (document.querySelector('.c_all_apps')) {
      document.querySelector('.c_all_apps').appendChild(li);
    }      }
    });
    
  } catch (error) {
    console.log(error);
  }
};
getAllApks();
const onsubCateSelect = async () => {
  var cont = document.getElementById('subcategory').value;
  g_subCategory=cont;
  console.log({g_category,g_subCategory});

}
const onCateSelect = async () => {
  try {
      const cate=document.getElementById('cat_id').value;
      console.log(cate);
      const {data} = await axios.get(`${url}/apk/getcategory`,{id:cate});
      console.log(data.data);
      g_category=data.data.category;
      const list=data.data.subCategory;
    var cont = document.getElementById('subcategory');
    // removeAllChildNodes(cont);
    for (i = 0; i <= list.length - 1; i++) {
      var option = document.createElement('option');
      option.innerHTML = list[i];      // assigning text to li using array value.
        option.setAttribute('value', list[i]);
        cont.appendChild(option);     // append li to ul.
     }

  //   const cate = await axios.get(`${url}/cate/allcate`);
  //   console.log({cate});
  } catch (error) {
    console.log(error);
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

 function  Download(title) {
  axios({
   url: `${url}/apk/download/${title}`, //your url
   method: 'GET',
   responseType: 'blob', // important
 }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.apk'); //or any other extension
    document.body.appendChild(link);
    link.click();
 });
}