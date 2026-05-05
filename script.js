const photos = [
  {
    src: "assets/photos/1.JPG",
    title: "五中教室走廊的我俩",
    text: "2020年12月26日，在教室外面我俩依偎在一起拍滴。",
  },
  {
    src: "assets/photos/2.JPG",
    title: "公交车上，仿佛看见了我们的以后",
    text: "2021年4月30日，好像是放五一，我俩一起做公交去盘县。",
  },
  {    src: "assets/photos/3.JPG",   
       title: "莎莎朋友圈的自拍",   
       text: "飘飘亮亮的刘美莎～。",  
  },
  {    src: "assets/photos/4.JPG",  
       title: "迪士尼的莎儿～",   
       text: "我和莎莎一起去迪士尼～。", 
  },
];

const galleryGrid = document.querySelector("#galleryGrid");
const dialog = document.querySelector("#photoDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const closeButton = document.querySelector(".dialog-close");

function createPhotoCard(photo) {
  const card = document.createElement("button");
  card.className = "photo-card";
  card.type = "button";
  card.innerHTML = `
    <img src="${photo.src}" alt="${photo.title}" loading="lazy">
    <div class="photo-meta">
      <h3>${photo.title}</h3>
      <p>${photo.text}</p>
    </div>
  `;
  card.addEventListener("click", () => openDialog(photo));
  return card;
}

function openDialog(photo) {
  dialogImage.src = photo.src;
  dialogImage.alt = photo.title;
  dialogTitle.textContent = photo.title;
  dialogText.textContent = photo.text;
  dialog.showModal();
}

photos.forEach((photo) => galleryGrid.append(createPhotoCard(photo)));
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
