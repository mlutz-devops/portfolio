import * as PIXI from "pixi.js";
import { ShockwaveFilter } from "pixi-filters";
const [width, height] = [window.innerWidth, window.innerHeight];
console.log(width, height);

const app = new PIXI.Application({
  width: width,
  height: height,
  transparent: true,
  backgroundAlpha: 0,
});
export const renderScene = (document) => {
  document.querySelector("#pixi-container").appendChild(app.view);
};

// Create Background sprite
const bg = await PIXI.Assets.load("src/assets/vanta.png");
const bgSprite = new PIXI.Sprite(bg);
bgSprite.alpha = 0;
bgSprite.anchor.set(0.5);
bgSprite.width = app.screen.width;
bgSprite.height = app.screen.height;
bgSprite.x = app.screen.width / 2;
bgSprite.y = app.screen.height / 2;

// Create text
await PIXI.Assets.load("src/assets/Apercu/Apercu Medium.otf");
const style = new PIXI.TextStyle({
  fontFamily: "Apercu Medium",
  fontSize: 20 + window.innerWidth * 0.06,
  fill: "white",
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowDistance: 2,
  dropShadowAngle: Math.PI / 2,
  dropShadowBlur: 3,
});
document.querySelector("#pixi-container").addEventListener("resize", () => {
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;
  style.fontSize = 20 + window.innerWidth * 0.06;
});
const text = new PIXI.Text("Michael Lutz", style);
text.anchor.set(0.5);
text.x = app.screen.width / 2;
text.y = app.screen.height / 2;

// animating text
function animateText(text, speed) {
  const ogText = text.text;
  text.text = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i >= ogText.length) {
      clearInterval(timer);
      return;
    }
    text.text += ogText[i];
    i++;
  }, speed);
}
animateText(text, 100);

// Create displacement map
const sprite = PIXI.Sprite.from("src/assets/displacement-map.jpeg");
const displacement = new PIXI.DisplacementFilter(sprite);

// Create Water Drops
const options1 = {
  amplitude: 40,
  wavelength: 30,
  speed: 200,
  radius: 80,
};
const options2 = {
  amplitude: 40,
  wavelength: 30,
  speed: 200,
  radius: 80,
};
const options3 = {
  amplitude: 40,
  wavelength: 30,
  speed: 200,
  radius: 80,
};
const shockwave1 = createShockwave(options1);
const shockwave2 = createShockwave(options2);
const shockwave3 = createShockwave(options3);
function createShockwave(options) {
  const shockwave = new ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    options,
    Math.random()
  );
  return shockwave;
}

// Create container
const container = new PIXI.Container();
container.filters = [shockwave1, shockwave2, shockwave3, displacement];
container.addChild(bgSprite);
// container.addChild(text);
// container.addChild(sprite);
app.stage.addChild(container);
// app.stage.filters = [shockwave1];

// Create ticker
sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
app.ticker.add(() => {
  sprite.x += 1;
  if (sprite.x > sprite.width) {
    sprite.x = 0;
  }

  shockwave1.time += 0.01;
  if (shockwave1.time > 1) {
    shockwave1.time = 0;
    console.log(app.screen.width);
    shockwave1.center = [Math.random() * app.screen.width, Math.random() * app.screen.height];
  }
  shockwave2.time += 0.01;
  if (shockwave2.time > 1) {
    shockwave2.time = 0;
    shockwave2.center = [Math.random() * app.screen.width, Math.random() * app.screen.height];
  }
  shockwave3.time += 0.01;
  if (shockwave3.time > 1) {
    shockwave3.time = 0;
    shockwave3.center = [Math.random() * app.screen.width, Math.random() * app.screen.height];
  }
});

document.addEventListener("click", () => {});
