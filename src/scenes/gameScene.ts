export class GameScene extends Phaser.Scene {
  private sky: Phaser.GameObjects.TileSprite
  private trees: Phaser.GameObjects.TileSprite

  private groundMap: Phaser.Tilemaps.Tilemap
  private groundSet: Phaser.Tilemaps.Tileset
  private groundLayer: Phaser.Tilemaps.StaticTilemapLayer

  constructor() {
    super({
      key: 'GameScene',
    })
  }

  preload(): void {
    this.load.image('sky', './assets/images/background/sky.png')
    this.load.image('trees', './assets/images/background/trees.png')

    this.load.image('tileset', './assets/images/environment/tileset.png')
    this.load.tilemapTiledJSON('groundMap', 'assets/maps/ground.json')
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

    this.groundMap = this.add.tilemap('groundMap')
    this.groundSet = this.groundMap.addTilesetImage('tileset')
    this.groundLayer = this.groundMap.createStaticLayer('Ground Layer', this.groundSet, 0, 0)
    this.groundLayer.setScale(2)
  }

  update(): void {

  }
}
