// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createImagesList = images.map(image => `<li>
    <img src="${image.url}"alt="${image.alt}" class="img">
  </li>`).join("");
console.log (createImagesList)
// const galleryPictures = images.map(image => {
//   const galleryItem = document.createElement(`li`);
//   galleryItem.classList.add(`images-list`);
//   return galleryItem;
// });
// const galleryImages = images.map(image => {
//   const imageEl = document.createElement(`img`);
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.classList.add(`img`);
//   return imageEl;
// });

const imagesList = document.querySelector(`.gallery`)
imagesList.insertAdjacentHTML("beforeend", createImagesList);
  // imagesList.append(...galleryPictures, ...galleryImages);