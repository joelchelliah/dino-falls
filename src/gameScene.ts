export class GameScene extends Phaser.Scene {
  private background: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: 'GameScene'
    })
  }

  preload(): void {
    this.load.image('background', './src/assets/sky.png')
  }

  init(): void {

  }

  create(): void {
    this.background = this.add.image(0, 0, 'background')
    this.background.setOrigin(0, 0)
  }

  update(): void {

  }
}
