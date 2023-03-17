// storyData
const storyData = [
  {
    like: '5k',
    viwes: '0',
    user: 'Abid Ali',
    id: 1,
    followers: '10k',
    src: './assest/abid.jpg'
  },
  {
    like: '10k',
    id: 2,
    viwes: ' 0',
    user: 'Abdul Wahab',
    followers: '20k',
    src: './assest/wahab.jpg'
  },
  {
    id: 3,
    like: '5k',
    viwes: '0',
    src: './assest/saqlain.jpg',
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


