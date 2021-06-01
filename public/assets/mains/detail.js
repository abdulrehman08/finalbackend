import {url} from './config.js';
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const getAPapular = async () => {
  try {
    const { data } = await axios.get(`${url}/apk/${title}`);
    const apk = data.data;
    // console.log(apk);
    document.getElementById("d_image").src = `${url}/img/${apk.image}`;
    document.getElementById("d_title").innerHTML = apk.title;
    document.getElementById("d_text").title = apk.title;
    document.getElementById("d_downloads").innerText = apk.downloads;
    document.getElementById("d_size").innerHTML = apk.title;
    document.getElementById("_upgrade").innerHTML = apk.title;
    document.getElementById("c_file_down").title = apk.title;
    document.getElementById('_description').innerHTML=`The description of ${apk.title} App`;
    document.getElementById('desc').innerHTML=apk.description;
    document.getElementById('h2id').innerHTML=`${apk.title} App ${apk.version} Update`;
    document.getElementById('created').innerHTML=apk.createdAt.slice(0,10);
    document.getElementById('short_desc').innerHTML=`To make ${apk.title} work better for you, we deliver updates regularly. These updates include bug fixes and improvements for speed and reliability.`
    document.getElementById("tag").innerHTML = `${apk.title} Tags`;  
    
    document.getElementById("cate").innerHTML = apk.category;
    // document.getElementById("downsloads").innerHTML = apk.category;

    document.getElementById("subcate").innerHTML = apk.subCategory;
    document.getElementById("l_version").innerHTML = apk.version
    document.getElementById("datePublished").innerHTML = apk.createdAt.slice(0,10);    
    document.getElementById("uploadedby").innerHTML = apk.user.name;
    document.getElementById("datePublished").innerHTML = apk.createdAt.slice(0,10);
    document.getElementById("requirements").innerHTML = apk.requirements;
    




    // document.getElementById(
    //   "_images"
    // ).style.backgroundImage = `url(${url}/img/${apk.images[0]})`;
    apk.images.map((image) => {
    const a=document.createElement('a');
    a.setAttribute('class','mpopup');
    a.setAttribute('data-fancybox','com.roblox.client');
    a.setAttribute('target','_blank');
    const img=document.createElement('img');
    img.setAttribute('src',`${url}/img/${image}`);
    img.setAttribute('height',"355")
    a.appendChild(img);
      document.getElementById("myimage").appendChild(a);
    });
  } catch (error) {
    console.log(error);
  }
};
getAPapular();

const element=document.getElementById('c_file_down');
if (element) {
  element.addEventListener('click',e=>{
    e.preventDefault();
console.log("items download ",e.target.title);
Downloads(title);
  });
}
 const   Downloads=(title)=> {
   console.log(title);
  axios({
    // /download/temple run
   url: `${url}/apk/download/${title}`, //your url
   method: 'GET',
   responseType: 'blob', // important
 }).then((response) => {
   console.log(response.data);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download','apk-Qub-Store.apk'); //or any other extension
    document.body.appendChild(link);
    link.click();
 }).catch(error=>{
   console.log(error);
 })
}
console.log("pakistan zinda baad");