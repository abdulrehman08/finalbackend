//import { url } from './config.js';
let url = "http://165.227.84.121:4000";
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const getAPapular = async () => {
  // try {
    const { data } = await axios.get(`${url}/apk/${title}`);
    const apk = data.data;
    
    document.getElementById("d_image").src = `${url}/img/${apk.image}`;
    document.getElementById("d_title").innerHTML = apk.title;
    // document.getElementById("desc").innerHTML = apk.description;
    document.getElementById("d_text").title = apk.title;
    document.getElementById("d_downloads").innerText = apk.downloads;
    document.getElementById("d_size").innerHTML = apk.title;
    document.getElementById("_upgrade").innerHTML = apk.title;
    document.getElementById("c_file_down").title = apk.title;
    document.getElementById('_description').innerHTML = `The description of ${apk.title} App`;
    document.getElementById('desc').innerHTML = apk.description;
    document.getElementById('h2id').innerHTML = `${apk.title} App ${apk.version} Update`;
    document.getElementById('created').innerHTML = apk.createdAt.slice(0, 10);
    document.getElementById('short_desc').innerHTML = `To make ${apk.title} work better for you, we deliver updates regularly. These updates include bug fixes and improvements for speed and reliability.`
    document.getElementById("tag").innerHTML = `${apk.title} Tags`;

    document.getElementById("cate").innerHTML = apk.category;
    // document.getElementById("downsloads").innerHTML = apk.category;

    document.getElementById("subcate").innerHTML = apk.subCategory;
    document.getElementById("l_version").innerHTML = apk.version
    document.getElementById("datePublished").innerHTML = apk.createdAt.slice(0, 10);
    document.getElementById("uploadedby").innerHTML = apk.user.name;
    document.getElementById("datePublished").innerHTML = apk.createdAt.slice(0, 10);
    document.getElementById("requirements").innerHTML = apk.requirements;


    document.getElementById("average_rating").innerHTML = data.average_rating;
    document.getElementById("average-rating-1").innerHTML = data.average_rating;
    
    document.getElementById("average-2").style.width = `${data.average_ratio}%`;
    document.getElementById("average-1").style.width = `${data.average_ratio}%`;
    document.getElementById("count").innerHTML = `${data.total_reviews} Reviews`;


    document.getElementById("one").style.width = `${data.Rating_ratio.one}%`;
    document.getElementById("two").style.width = `${data.Rating_ratio.two}%`;
    document.getElementById("three").style.width = `${data.Rating_ratio.three}%`;
    document.getElementById("four").style.width = `${data.Rating_ratio.four}%`;
    document.getElementById("five").style.width = `${data.Rating_ratio.five}%`;



  if (apk.reviews.length ===0){
    let noComment = `<div class="review-block-title">Not Comments .......</div>`
    document.getElementById("reviews").innerHTML+=noComment;
   
  }

   apk.reviews.forEach(review =>{
   
   
   
    console.log(review);
    let Review = `<div class="row">
                  <div class="col-sm-3" style="padding-top : 20px ; padding-bottom : 10px">
                      <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
                      <div class="review-block-name"><a href="#">${review.comment.name}</a></div>
                      <div class="review-block-date">${moment(review.comment.time).format('MMMM Do YYYY')}</div>
                  </div>
                  <div class="col-sm-9"  style="padding-top : 20px ; padding-bottom : 10px">
                      <div class="review-block-rate">
                          <div class="stars" >
                              <span class="score" style="width:${(review.rating/5)*100}%"></span>
                          </div>
                      </div>
                      
                      <div class="review-block-description">${review.comment.text ? review.comment.text : "No Comment" }</div>
                      <div class="review-block-title" style="font-size : 12px;  margin-top : 20px">Reply</div>
                      ${review.reply.text?
                      
                      `<div class="review-block-description" style="padding-left : 50px">
                      
                      <a>${review.reply.name}</a> :  ${review.reply.text}
                      
                      </div>` : `<div class="review-block-description" style="padding-left : 50px">no reply</div>`}
                  </div>
                </div>
                <hr/>`

     document.getElementById("reviews").innerHTML+=Review;
   
   
   
   
    })




    




    // document.getElementById(
    //   "_images"
    // ).style.backgroundImage = `url(${url}/img/${apk.images[0]})`;
    apk.images.map((image) => {
      const a = document.createElement('a');
      a.setAttribute('class', 'mpopup');
      a.setAttribute('data-fancybox', 'com.roblox.client');
      a.setAttribute('target', '_blank');
      const img = document.createElement('img');
      img.setAttribute('src', `${url}/img/${image}`);
      img.setAttribute('height', "355")
      a.appendChild(img);
      document.getElementById("myimage").appendChild(a);
    });
  // }
  //  catch (error) {
  //   console.log(error);
  // }
};
getAPapular();

const element = document.getElementById('c_file_down');
if (element) {
  element.addEventListener('click', e => {
    e.preventDefault();
    console.log("items download ", e.target.title);
    Downloads(title);
  });
}
const Downloads = (title) => {
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
    link.setAttribute('download', 'apk-Qub-Store.apk'); //or any other extension
    document.body.appendChild(link);
    link.click();
  }).catch(error => {
    console.log(error);
  })
}
console.log("pakistan zinda baad");



const discoverApps = async () => {
  try {
    const { data } = await axios.get(`${url}/apk/approved`);
    data.data.map((apk, index) => {
      if (apk.category === "Apps" ) {
        const currentDate = new Date(apk.createdAt);
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();
        const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
        const lis = ` 
<a  href="javascript:void(0)" title="${apk.title}">
		<div class="app-icon"><img alt="${apk.title}" src="${url}/img/${apk.image}" /></div>
		<div class="app-text">
			<p class="app-text-title mt-3 downs" title="${apk.title}">${apk.title}</p>
					<p>${dateString}</p>
					<p class="app-text-developer">${apk.subCategory}</p>
		</div>
	</a>
`;
        const li = document.createElement("li");
        li.innerHTML = lis;
        li.querySelector(".downs").addEventListener("click", (e) => {
          e.preventDefault();
          window.location = "/ProductDetails.html?title=" + e.target.title;
        });
        document.querySelector(".discover").appendChild(li);
     }
    });
      } catch (error) {
        console.log(error);
      }
    };
    discoverApps();
    // //////////////////////////
    const getPopular = async () => {
      try {
        const { data } = await axios.get(`${url}/apk/papular`);
        console.log({ papular_apps: data.data });
        data.data.map((apk, index) => {
          if (apk.category === "Games" && index < 9) {
            const currentDate = new Date(apk.createdAt);
            const currentDayOfMonth = currentDate.getDate();
            const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
            const currentYear = currentDate.getFullYear();
            const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
            const lis = ` 
      <div class="day_list_number">1</div>
          <dl>
              <dt><a  href="javascript:void(0)"><img alt="English" src="${url}/img/${apk.image}" width="100px" height="100px"/></a></dt>
              <dd class="title-dd"><a  href="javascript:void(0)" title="${apk.title}" >${apk.title}</a></dd>
              <dd>downloads(${apk.downloads})</dd>
              <dd>${dateString}</dd>
              <dd class="down"><a   href="javascript:void(0)" rel="nofollow" class="downs" title="${apk.title}" >Download</a></dd>
          </dl>
        `;

            const li = document.createElement("li");
            li.setAttribute("class", "w33");
            li.innerHTML = lis;
            li.querySelector(".downs").addEventListener("click", (e) => {
              e.preventDefault();
              window.location = "/ProductDetails.html?title=" + e.target.title;
            });
            document.getElementById("c_popular").appendChild(li);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getPopular();

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
function Add(element){
  let rating=0;
  let user = null;
  user = localStorage.getItem("user");
  if(!user){
    window.location.replace("/login.html");
  }
  else{
  if(document.getElementById("one-start").checked)
  {
   rating =1;
  }
  else if(document.getElementById("two-start").checked)
  {
   rating =2;
  }
  else if(document.getElementById("three-start").checked)
  {
   rating =3;
  }
  else if(document.getElementById("four-start").checked)
  {
   rating =4;
  }
  else if(document.getElementById("five-start").checked)
  {
   rating =5;
  }
  
  let text = document.getElementById("comment").value;

  if(text && rating && user){
    axios.patch(`${url}/apk/comment/title` , 
    {user , text , rating}
    ).then(response =>{
      window.location.reload();
    }).cathc(err=>{
      console.log(err);
    })
  }

}
}