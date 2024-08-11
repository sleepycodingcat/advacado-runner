/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Level 1", "./Stage/costumes/Level 1.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.gravity = -1.5;
    this.vars.jumpForce = 16;
    this.vars.acceleration = 2;
    this.vars.resistance = 0.8;
    this.vars.scene = 1;

    this.watchers.scene = new Watcher({
      label: "SCENE #",
      style: "normal",
      visible: true,
      value: () => this.vars.scene,
      x: 245,
      y: 175,
    });
  }
}
