/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Scene1", "./Level/costumes/Scene1.svg", {
        x: 335.36470351351346,
        y: 198.09545626126126,
      }),
      new Costume("Scene2", "./Level/costumes/Scene2.svg", {
        x: 342.81848,
        y: 79.4868395762543,
      }),
      new Costume("Scene3", "./Level/costumes/Scene3.svg", {
        x: 332.30796948948944,
        y: 218.11644023691488,
      }),
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Change scene" },
        this.whenIReceiveChangeScene
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveBehind();
  }

  *whenIReceiveChangeScene() {
    this.costume = "Scene" + this.toString(this.stage.vars.scene);
  }
}
