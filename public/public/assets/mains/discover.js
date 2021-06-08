import {url} from './config.js';
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const getAllApks = async () => {
  let apks;
  console.log({title});
    try {
      if (title) {
        if (title==='hot games') {
          const {data} = await axios.get(`${url}/apk/approved`);
           apks=data.data.filter(apk=>( apk.category==='Games'&&apk.hot));
        console.log({hot:apks});
        }else if (title==="hot apps") {
          const {data} = await axios.get(`${url}/apk/approved`);
           apks=data.data.filter(apk=>( apk.category==='Apps'&&apk.hot));
        }
        else if (title==="Rhapsody Languages") {
          const {data} = await axios.get(`${url}/apk/approved`);
           apks=data.data.filter(apk=>apk.category==="Rhapsody Languages");
       }
        else if (title==="Pre register") {
          const {data} = await axios.get(`${url}/apk/approved`);
           apks=data.data.filter(apk=>apk.category==="Pre register");           
        }
        else if (title==="Game on sale") {
          const {data} = await axios.get(`${url}/apk/approved`);
           apks=data.data.filter(apk=>apk.category==="Game on sale");
        }
        else{
          const {data} = await axios.get(`${url}/apk/samecate/${title}`);
          console.log({samecate:data});
          apks=data.data;
        }
      }else{
        const {data} = await axios.get(`${url}/apk/approved`);
        apks=data.data;
      }
      // console.log({ allApks: data.data });
      const ul_game=document.createElement('div');
      apks.map(apk=>{
          const lis=` 
          <div class="box editors_m downs" title="${apk.title}">
            <div class="editors_m_1">
              <p>
                <a
                  title="${apk.title}"
                  class="downs"
                  ><img
                    alt="${apk.title}"
                    title="${apk.title}"
                    class="downs"
                    src="${url}/img/${apk.image}"
                /></a>
              </p>
  
              <div class="topic-rating downs" title="${apk.title}">
                <div class="stars">
                  <span class="score" style="width: 85%"></span>
                </div>
                <div class="rating-info">8.5</div>
              </div>
            </div>
  
            <div class="editors_m_2">
              <h3 class="editors_title">
                <a
                title="${apk.title}"
                class="downs"
                  >${apk.title}
                  <span class="vname">${apk.createdAt.slice(0,10)}</span></a
                >
              </h3>
              <div class="editors_author">
                <div class="editors_date" title="Latest Update">
                  <img src="" width="16" /> ${apk.createdAt.slice(0,10)}
                </div>
              </div>
              <div class="editors_text downs" title="${apk.title}" >
                WELCOME THE CHALLENGEYOUR GATEWAY TO MAGICYou know the name. Now
                download and play the original strategy card game on your phone.
                Unlock powerful decks right away, earn rewards just by playing,
                and jump into action with a variety of game formats for
              </div>
  
              <div class="tag_wrap ">
                <ul class="tag_list">
                  <li><a >Card</a></li>
                </ul>
              </div>
            </div>
  
            <div class="editors_m_3">
              <a
                title="${apk.title}"
                ><img
                  src="${url}/img/${apk.images[0]}"
                  class="lazybg"                  
              /></a>
            </div>
            <div class="clear"></div>
  `;
      const div=document.createElement('div');
      div.innerHTML=lis;
      div.querySelector('.downs').addEventListener('click',(e)=>{
        e.preventDefault();
        // alert(e.target.title);
        window.location = '/ProductDetails.html?title=' +e.target.title;
      })
      ul_game.appendChild(div);
         } );
         if (document.getElementById('discoverId')) {
            document.getElementById('discoverId').appendChild(ul_game);
          }
    } catch (error) {
      console.log(error);
    }
 }
  getAllApks();
  