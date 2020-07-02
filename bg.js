const body = document.querySelector("body");
const IMG_NUMBER = 4;
//

//
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.setAttribute("id", "bg");
  // body.style.backgroundImage = `url(images/${imgNumber + 1}.jpg)`;
  //body.style.backgroundImage = `url(images/${imgNumber + 1}.jpg)`;
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  //body.style.backgroundImage = `url(+${BG_SRC})`;
}

init();
