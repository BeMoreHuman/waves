
const imagesNodes = document.body.querySelectorAll('.section__image');
const images = Array.prototype.slice.call(imagesNodes,0);

const app = new PIXI.Application(300, 300, {backgroundColor: 0x000000});

document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

let bg = PIXI.Sprite.fromImage('images/img02.jpeg');
bg.width = 300;
bg.height = 300;
bg.position.x = 0;
bg.position.y = 0;
container.addChild(bg);

let displacementSprite = PIXI.Sprite.fromImage('images/displacement-img01.jpg');
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

displacementFilter.scale.set(700);
// displacementFilter.scale.x = 110;
// displacementFilter.scale.y = 110;
// displacementSprite.anchor.set(0.5);

app.stage.addChild(displacementSprite);

container.filters = [displacementFilter];


document.body.addEventListener('click', () => {
  let tl = new TimelineMax();

  tl.to(displacementFilter.scale, 2, {x: 1, y: 1});
});
images.forEach((image) => {
  image.addEventListener('mouseenter', (e) => {
    // console.log('mouseenter', e.target);
    // console.log(e.target.dataset.index);
    animTo();
  });
  image.addEventListener('mouseleave', () => {
    // console.log('mouseleave');
    animFrom();
  });
});

function animTo() {
  let tl = new TimelineMax();

  tl.to(displacementFilter.scale, 2, {x: 1, y: 1});
}
function animFrom() {
  let tl = new TimelineMax();

  tl.to(displacementFilter.scale, 2, {x: 700, y: 700});
}


