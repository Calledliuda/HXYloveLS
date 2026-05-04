const photos = [
  {
    src: "assets/photos/1.JPG",
    title: "第一张照片",
    text: "这里写这张照片的故事。",
  },
  {
    src: "assets/photos/2.JPG",
    title: "第二张照片",
    text: "这里写这张照片的故事。",
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
