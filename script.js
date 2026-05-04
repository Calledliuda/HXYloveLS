const photos = [
  {
    src: "https://images.photos.2.JPG",
    title: "一起走过的街",
    text: "把这张替换成你们散步、旅行或约会时拍下的照片。",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85",
    title: "靠近一点",
    text: "这里可以写拍照那天的小故事，或者一句只有你们懂的话。",
  },
  {
    src: "https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&w=900&q=85",
    title: "认真喜欢",
    text: "换成纪念日照片、自拍、合照，页面会自动排成照片墙。",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    title: "最好的日子",
    text: "可以记录日期、地点，或写一句想对爱人说的话。",
  },
  {
    src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=85",
    title: "拥抱时刻",
    text: "如果要用本地照片，把 src 改成 assets/photos/你的照片名.jpg。",
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85",
    title: "未完待续",
    text: "以后每一次新的回忆，都可以继续加在这个数组里。",
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
