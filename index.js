import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Level from "./Level/Level.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 43.29568201992763,
    y: -11.478678213498045,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 36,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
