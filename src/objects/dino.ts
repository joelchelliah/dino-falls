import { Physics } from 'phaser'

export class Dino {
    private currentScene: Phaser.Scene

    public xPos: number
    public direction: number
    public name: string
    public speed: number
    public body: Physics.Arcade.Sprite

    constructor(params: Params) {
        const dinoNames = ['doux', 'mort', 'tard', 'vita']

        this.currentScene = params.scene
        this.name = dinoNames[Math.floor(Math.random() * dinoNames.length)]
        this.xPos = Math.floor(Math.random() * 100)
        this.direction = 1

        if (Math.floor(Math.random() * 2) > 0) {
            this.xPos += 700
            this.direction = -1
        }

        this.speed = this.direction * (50 + Math.floor(Math.random() * 150))
        this.body = this.currentScene.physics.add.sprite(this.xPos, -75, name)
            .setGravityY(600)
            .setScale(2 * this.direction, 2)
            .setOrigin(0, 0)
    }

    isTouchingGround(): boolean {
        return this.body.body.velocity.y === 0
    }

    walk(): void {
        this.body.setVelocityX(this.speed)
        this.body.anims.play(`${this.name}-walk`, true)
    }

    fall(): void {
        this.body.setVelocityX(this.speed / 5)
        this.body.anims.play(`${this.name}-idle`, true)
    }
}

type Params = {
    scene: Phaser.Scene,
}
