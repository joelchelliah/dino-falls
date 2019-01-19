export class GameScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'GameScene'
    })
  }

  preload(): void {
    this.load.image('sky', './src/assets/sky.png')
  }

  init(): void {

  }

  create(): void {
    this.scene.start('GameScene')
  }

  update(): void {

  }
}
