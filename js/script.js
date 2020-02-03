// Get all image elements
const IMAGES = document.querySelectorAll('img');

// Loop over image elements
for (let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute('src');

  imgSrc = imgSrc.slice(0, -8);

  console.log(imgSrc);

  let type = IMAGES[i].getAttribute('data-type');

  console.log(type);
}