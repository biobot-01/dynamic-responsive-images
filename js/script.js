// Get all image elements
const IMAGES = document.querySelectorAll('img');

// Function to construct responsive image paths
function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = `${imgSrc}-${width}.jpg ${width}w`;

    width += 400;
  }

  return markup.join();
}

// Loop over image elements
for (let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute('src');

  imgSrc = imgSrc.slice(0, -8);

  let srcset = makeSrcset(imgSrc);

  console.log(srcset);

  let type = IMAGES[i].getAttribute('data-type');

  console.log(type);
}