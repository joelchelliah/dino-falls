export class GameScene extends Phaser.Scene {
  private sky: Phaser.GameObjects.TileSprite;
  private trees: Phaser.GameObjects.TileSprite;

  constructor() {
    super({
      key: 'GameScene',
    })
  }

  preload(): void {
    this.load.image('sky', './assets/images/background/sky.png')
    this.load.image('trees', './assets/images/background/trees.png')
  }

  init(): void {

  }

  create(): void {
    this.sky = this.add.tileSprite(0, 0, 800, 600, 'sky')
      .setOrigin(0, 0)
      .setScale(2)
    this.trees = this.add.tileSprite(-20, 280, 800, 600, 'trees')
      .setOrigin(0, 0)
      .setScale(1.2)
  }

  update(): void {

  }
}
