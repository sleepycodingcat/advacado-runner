/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("run-01", "./Player/costumes/run-01.svg", {
        x: 34.838462762860075,
        y: 60.39999999999999,
      }),
      new Costume("run-02", "./Player/costumes/run-02.svg", {
        x: 34.95855939065541,
        y: 59.8,
      }),
      new Costume("run-03", "./Player/costumes/run-03.svg", {
        x: 34.68023764314236,
        y: 58.499999999999986,
      }),
      new Costume("run-04", "./Player/costumes/run-04.svg", {
        x: 35.80426822129397,
        y: 58.09999999999998,
      }),
      new Costume("run-05", "./Player/costumes/run-05.svg", {
        x: 36.16960170432537,
        y: 56.89999999999999,
      }),
      new Costume("run-06", "./Player/costumes/run-06.svg", {
        x: 36.3744179241063,
        y: 57.39999999999999,
      }),
      new Costume("run-07", "./Player/costumes/run-07.svg", {
        x: 36.12853442979474,
        y: 58.39999999999999,
      }),
      new Costume("run-08", "./Player/costumes/run-08.svg", {
        x: 35.215224449751986,
        y: 59.39999999999999,
      }),
      new Costume("run-09", "./Player/costumes/run-09.svg", {
        x: 34.838462762860075,
        y: 60.39999999999999,
      }),
      new Costume("run-10", "./Player/costumes/run-10.svg", {
        x: 34.95855939065541,
        y: 59.8,
      }),
      new Costume("run-11", "./Player/costumes/run-11.svg", {
        x: 34.68023764314236,
        y: 58.499999999999986,
      }),
      new Costume("run-12", "./Player/costumes/run-12.svg", {
        x: 35.80426822129397,
        y: 58.09999999999998,
      }),
      new Costume("run-13", "./Player/costumes/run-13.svg", {
        x: 36.16960170432537,
        y: 56.89999999999999,
      }),
      new Costume("run-14", "./Player/costumes/run-14.svg", {
        x: 36.3744179241063,
        y: 57.39999999999999,
      }),
      new Costume("run-15", "./Player/costumes/run-15.svg", {
        x: 36.12853442979474,
        y: 58.39999999999999,
      }),
      new Costume("run-16", "./Player/costumes/run-16.svg", {
        x: 35.215224449751986,
        y: 59.39999999999999,
      }),
      new Costume("Jump01", "./Player/costumes/Jump01.svg", {
        x: 42.18599999999998,
        y: 61.210170000000005,
      }),
      new Costume("run_j2", "./Player/costumes/run_j2.svg", {
        x: 35.03539821959376,
        y: 58.7,
      }),
      new Costume("HangOn01", "./Player/costumes/HangOn01.svg", {
        x: 40.67400094604491,
        y: 58.784275054931626,
      }),
      new Costume("hitbox", "./Player/costumes/hitbox.svg", {
        x: 12.196194999999989,
        y: 35.71343000000002,
      }),
      new Costume("hitbox v2", "./Player/costumes/hitbox v2.svg", {
        x: 23.70971,
        y: 35.71342999999999,
      }),
      new Costume(
        "hitbox wallslide",
        "./Player/costumes/hitbox wallslide.svg",
        { x: -0.07047166666654903, y: 4.713431666666764 }
      ),
      new Costume("hit angle 0", "./Player/costumes/hit angle 0.svg", {
        x: 15.751730555555525,
        y: -27.17545888888884,
      }),
      new Costume("hit angle 1", "./Player/costumes/hit angle 1.svg", {
        x: 12.396175,
        y: -19.88656999999995,
      }),
      new Costume("hit angle 4", "./Player/costumes/hit angle 4.svg", {
        x: 12.396164999999996,
        y: -19.88656999999995,
      }),
      new Costume("hit angle 2", "./Player/costumes/hit angle 2.svg", {
        x: 7.096165000000042,
        y: -24.13656999999995,
      }),
      new Costume("hit angle 3", "./Player/costumes/hit angle 3.svg", {
        x: 21.096205000000026,
        y: -24.136570000000006,
      }),
      new Costume("stand", "./Player/costumes/stand.svg", {
        x: 41.99899999999997,
        y: 58,
      }),
      new Costume("stand2", "./Player/costumes/stand2.svg", {
        x: 41.998999999999995,
        y: 58,
      }),
      new Costume("stand3", "./Player/costumes/stand3.svg", {
        x: 41.998999999999995,
        y: 58.00000000000003,
      }),
      new Costume("stand4", "./Player/costumes/stand4.svg", {
        x: 41.998999999999995,
        y: 58.00000000000006,
      }),
      new Costume("stand5", "./Player/costumes/stand5.svg", {
        x: 41.998999999999995,
        y: 58.000000000000014,
      }),
      new Costume("crouch", "./Player/costumes/crouch.svg", {
        x: 35.12734499999996,
        y: 44.37180999999998,
      }),
      new Costume("slide", "./Player/costumes/slide.svg", {
        x: 44.727874999999955,
        y: 29.89650999999995,
      }),
      new Costume("hitbox crouch", "./Player/costumes/hitbox crouch.svg", {
        x: 23.709699999999998,
        y: 6.963430000000017,
      }),
      new Costume("Guy", "./Player/costumes/Guy.svg", {
        x: 16.905479999999898,
        y: 16.905479999999983,
      }),
    ];

    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Tick - Player" },
        this.whenIReceiveTickPlayer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game loop" },
        this.whenIReceiveGameLoop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Tick - Last" },
        this.whenIReceiveTickLast
      ),
    ];

    this.vars.speedY = 0;
    this.vars.speedX = 2.9285801940503596e-11;
    this.vars.lastValue = -11.478678213498045;
    this.vars.falling = 0;
    this.vars.touching = 0;
    this.vars.temp = 0;
    this.vars.distance = 26;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.gravity = -1.5;
    this.stage.vars.jumpForce = 16;
    this.stage.vars.acceleration = 2;
    this.stage.vars.resistance = 0.8;
    yield* this.resetAndBeginLevel();
  }

  *moveInSteps(steps) {
    this.vars.falling++;
    for (let i = 0; i < this.toNumber(steps); i++) {
      this.vars.lastValue = this.x;
      this.x += this.toNumber(this.vars.speedX) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.x = this.toNumber(this.vars.lastValue);
        this.vars.speedX = 0;
      }
      this.vars.lastValue = this.y;
      this.y += this.toNumber(this.vars.speedY) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.y = this.toNumber(this.vars.lastValue);
        if (this.compare(this.vars.speedY, 0) < 0) {
          this.vars.falling = 0;
        }
        this.vars.speedY = 0;
      }
    }
  }

  *checkTouchingSolid() {
    if (this.touching(this.sprites["Level"].andClones())) {
      this.vars.touching = 1;
    } else {
      this.vars.touching = 0;
    }
  }

  *whenIReceiveTickPlayer() {
    yield* this.controlsUpAndDown();
    yield* this.controlsLeftAndRight();
    yield* this.moveInSteps(
      Math.abs(this.toNumber(this.vars.speedY)) +
        Math.abs(this.toNumber(this.vars.speedX))
    );
  }

  *controlsUpAndDown() {
    if (
      this.keyPressed("up arrow") ||
      this.keyPressed("space") ||
      this.keyPressed("w")
    ) {
      if (this.compare(this.vars.falling, 3) < 0) {
        this.vars.speedY = this.stage.vars.jumpForce;
      }
    }
    this.vars.speedY += this.toNumber(this.stage.vars.gravity);
  }

  *controlsLeftAndRight() {
    if (this.keyPressed("left arrow") || this.keyPressed("a")) {
      this.vars.speedX += 0 - this.toNumber(this.stage.vars.acceleration);
    }
    if (this.keyPressed("right arrow") || this.keyPressed("d")) {
      this.vars.speedX += this.toNumber(this.stage.vars.acceleration);
    }
    this.vars.speedX =
      this.toNumber(this.vars.speedX) *
      this.toNumber(this.stage.vars.resistance);
  }

  *resetAndBeginLevel() {
    this.stage.vars.scene = 1;
    this.vars.speedY = 0;
    this.vars.speedX = 0;
    this.vars.falling = 99;
    this.goto(-150, 55);
    this.broadcast("Change scene");
    this.broadcast("Game loop");
  }

  *whenIReceiveGameLoop() {
    while (true) {
      this.broadcast("Tick - Player");
      this.broadcast("Tick - Last");
      yield;
    }
  }

  *whenIReceiveTickLast() {
    if (this.compare(this.x, 235) > 0) {
      yield* this.beignSceneGoToX(
        this.toNumber(this.stage.vars.scene) + 1,
        -235
      );
    }
    if (this.compare(-235, this.x) > 0) {
      yield* this.beignSceneGoToX(
        this.toNumber(this.stage.vars.scene) - 1,
        235
      );
    }
  }

  *beignSceneGoToX(scene, x) {
    this.stage.vars.scene = scene;
    this.x = this.toNumber(x);
    this.broadcast("Change scene");
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(0);
    yield* this.fixCollisonInDirection(0);
    this.broadcast("Game loop");
  }

  *fixCollisonInDirection(dir) {
    this.vars.temp = this.direction;
    this.vars.distance = 1;
    this.direction = this.toNumber(dir);
    for (let i = 0; i < 64; i++) {
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 1) < 0) {
        this.direction = this.toNumber(this.vars.temp);
        return;
      }
      this.move(this.toNumber(this.vars.distance));
      this.direction += 180;
      this.vars.distance++;
    }
  }
}
