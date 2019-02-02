import { Dino } from '../objects/dino'

export class GameScene extends Phaser.Scene {
  private sky: Phaser.GameObjects.TileSprite;
  private trees: Phaser.GameObjects.TileSprite;

  private groundMap: Phaser.Tilemaps.Tilemap;
  private groundSet: Phaser.Tilemaps.Tileset;
  private groundLayer: Phaser.Tilemaps.StaticTilemapLayer;
  private spawnPoints: Array<any>;

  private dinos: Array<Dino>;
  private dinoTick: number;

  constructor() {
    super({
      key: 'GameScene',
    })
  }

  preload(): void {
    this.load.image('sky', './assets/images/background/sky.png')
    this.load.image('trees', './assets/images/background/trees.png')

    this.load.image('tileset', './assets/images/environment/tileset.png')
    this.load.tilemapTiledJSON('dino-map', 'assets/maps/dino-map.json')

    this.load.spritesheet(
      'doux',
      'assets/images/dinos/doux.png',
      this.getDinoFrames()
    )
    this.load.spritesheet(
      'mort',
      'assets/images/dinos/mort.png',
      this.getDinoFrames()
    )
    this.load.spritesheet(
      'tard',
      'assets/images/dinos/tard.png',
      this.getDinoFrames()
    )
    this.load.spritesheet(
      'vita',
      'assets/images/dinos/vita.png',
      this.getDinoFrames()
    )
  }

  getDinoFrames(): Phaser.Loader.FileTypes.ImageFrameConfig {
    return { frameWidth: 23, frameHeight: 21, margin: 3, spacing: 1 }
  }

  init(): void {
    this.dinos = []
    this.dinoTick = 0
  }

  create(): void {
    this.createBackground()
    this.createWorld()
    this.createDinos()
  }

  createBackground(): void {
    this.sky = this.add
      .tileSprite(0, 0, 800, 600, 'sky')
      .setOrigin(0, 0)
      .setScale(2)

    this.trees = this.add
      .tileSprite(-20, 280, 800, 600, 'trees')
      .setOrigin(0, 0)
      .setScale(1.2)
  }

  createWorld(): void {
    this.groundMap = this.make.tilemap({ key: 'dino-map' })
    this.groundSet = this.groundMap.addTilesetImage('tileset', 'tileset')
    this.groundLayer = this.groundMap.createStaticLayer('Tile Layer 1', this.groundSet, -16, 0)
    
    this.groundLayer.setCollisionByProperty({collides: true})
    this.spawnPoints = this.groundMap.getObjectLayer('Spawn points').objects
  }

  createDinos(): void {
    this.createAnimations('doux')
    this.createAnimations('mort')
    this.createAnimations('tard')
    this.createAnimations('vita')
    this.createDino()
  }

  createAnimations(name: string): void {
    this.anims.create({
      key: `${name}-idle`,
      frames: this.anims.generateFrameNumbers(name, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: `${name}-fall`,
      frames: this.anims.generateFrameNumbers(name, { start: 16, end: 16 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: `${name}-walk`,
      frames: this.anims.generateFrameNumbers(name, { start: 4, end: 9 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: `${name}-run`,
      frames: this.anims.generateFrameNumbers(name, { start: 17, end: 23 }),
      frameRate: 14,
      repeat: -1,
    })
  }

  update(): void {
    this.dinos.forEach(dino => {
      if (dino.isTouchingGround()) dino.walk()
      else dino.fall()
    })

    this.dinos = this.dinos.filter(
      ({ body }) => body.y < this.sys.canvas.height
    )
    this.dinoTick++

    if (this.dinoTick > 20) {
      this.dinoTick = 0

      this.createDino()
    }
  }

  createDino(): void {
    const { name, x, y } = this.spawnPoints[Math.floor(Math.random() * this.spawnPoints.length)]
    const dino = new Dino({ scene: this, x, y, key: 'dino' })

    this.physics.add.collider(dino, this.groundLayer)
    this.dinos.push(dino)
  }
}
