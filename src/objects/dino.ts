export class Dino extends Phaser.GameObjects.Image {
    private currentScene: Phaser.Scene
    private color: string

    constructor(params: Params) {
        super(params.scene, params.x, params.y, params.key)

        this.initVariables(params)
        this.initImage()

        this.currentScene.add.existing(this)
    }

    private initVariables(params): void {
        this.currentScene = params.scene
    }

    private initImage(): void {
        this.setOrigin(0.5)
        this.setScale(2)
    }
}

type Params = {
    scene: Phaser.Scene,
    x: number,
    y: number,
    key: string,
}
