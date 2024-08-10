import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: -181.91224980071152,
    y: -41.38341767253547,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 36,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
