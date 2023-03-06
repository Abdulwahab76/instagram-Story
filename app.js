// storyData
const storyData = [
  {
    like: '5k',
    viwes: '0',
    user: 'Abid Ali',
    id: 1,
    followers: '10k',
    src: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/295931593_122014440542454_4788070337020469873_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBq8qfkjtJ8oU7M5sOlMmkACVSpnzPK5MAJVKmfM8rk6-F9zVqq-dwKfkKJAY3M4_yDNj-I0RioAwAIgIwbJua&_nc_ohc=JPorPLB-UTwAX8yl3wA&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfCaegGKhWZyAGqHXL9QleFk-duljZEbH-9U4Wi29UCtow&oe=6407E707'
  },
  {
    like: '10k',
    id: 2,
    viwes: ' 0',
    user: 'Abdul Wahab',
    followers: '20k',
    src: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/322711386_886769009186636_9126001774481230410_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEdTQIaXIArcVW426726Ja8sewrToC-5nex7CtOgL7mdwh8UoN8ucn_HSei6LuwtyNJPRL1n08japX-sIQkz2kk&_nc_ohc=Rk_54WatxoYAX-R43ok&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfANXE7zyGuXj7y64F7rTz4DXjWabPb03dcTHVA-rbhyCQ&oe=64091E0D'
  },
  {
    id: 3,
    like: '5k',
    viwes: '0',
    src: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/330982757_876516770284149_3285300600059932135_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGyJQRiWG-pQ2Iz1gNDzoM-zuVgh1G58EjO5WCHUbnwSBUt8kerAg-3ohSDCLriGAEskTKPoSV0c5IS_l4T_N85&_nc_ohc=JaMCZQ0tV4YAX88RwQz&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfAbq1qaK_xTeusBIejm6AC-YCDFebH-ll8zLBISw5bYkg&oe=640883FA',
    user: 'Saqlain Haider',
    followers: '30k'
  }
]


let modal = document.getElementById("myModal"); //modal
let container = document.getElementById('container') //Get cotainer to append wrapper
let story = storyData.map((item, ind) => `<div class="wrapper">
<img
  id="bg"
  src="https://digitshack.com/codepen/mentor4/bg-pattern-card.svg"
  alt=""
/>
<div class="content">
<div class='animate' id='animated'>
<div  id='border' ></div>
<img id='story_view' onclick='storyImage(this,${item.id})'
    src=${item.src}
   
    
  />
</div>
  <h2>${item.user}</h2>

  <div class="footer">
    <div>
      <p class="num">${item.like}</p>
      <p>Likes</p>
    </div>
    <div>
      <p class="num" id='user_view'>${item.viwes}</p>
      <p>Views</p>
    </div>
    <div>
      <p class="num">${item.followers}</p>
      <p>Followers</p>
    </div>
  </div>
</div>
</div>` ).join('')

container.innerHTML = story // innerHTML storyData to add inside Container
let border = document.getElementById('border')
let animated = document.getElementById('animated')
let modal_image = document.getElementById('modal_image') //Modal Image
let story_view = document.getElementById('story_view')
let user_view = document.getElementById('user_view')
let interval;

function storyImage(e, item) {
  const totalView = e.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1] // get viwes innerHTML 
  for (let i in storyData) {
    if (storyData[i].id == item) { //loop over storyData and filter match id
      totalView.innerHTML = ++storyData[i].viwes; //increase views onclick story Image
    }
  }
  modal_image.src = e.src
  const borderShow = e.parentNode.childNodes[1]
  borderShow.classList.add('border') //add Gray border after image clicked!

  interval = setTimeout(() => {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    borderShow.style.border = '4px solid #e0e0e0'
  }, 2000);
}
interval = clearTimeout()


//close Modal
function closeModal(param) {
  modal.style.display = 'none'
}


