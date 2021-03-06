// Get all image elements
const IMAGES = document.querySelectorAll('img');
// Create sizes object
const SIZES = {
  showcase: '100vw',
  reason: '(max-width: 799px) 100vw, 372px',
  feature: '(max-width: 799px) 100vw, 558px',
  story: '(max-width: 799px) 100vw, 670px',
};

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

  IMAGES[i].setAttribute('srcset', srcset);

  let type = IMAGES[i].getAttribute('data-type');

  let sizes = SIZES[type];

  IMAGES[i].setAttribute('sizes', sizes);
}