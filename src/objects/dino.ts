import { Physics } from 'phaser'

export class Dino extends Physics.Arcade.Sprite {
    private anim: Phaser.Tweens.Tween[];

    private direction: number
    private speed: number

    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame)


        params.scene.physics.world.enable(this)

        const dinoNames = ['doux', 'mort', 'tard', 'vita']

        this.name = dinoNames[Math.floor(Math.random() * dinoNames.length)]
        this.direction = 1

        if (Math.floor(Math.random() * 2) > 0) {
            this.x += 700
            this.direction = -1
        }

        this.speed = this.direction * (50 + Math.floor(Math.random() * 150))

        this.setScale(2 * this.direction, 2)
        this.setOrigin(0, 0)
        this.setGravityY(1000)
        this.setSize(14, 15)

        params.scene.add.existing(this)

        if (this.direction > 0) {
            this.body.setOffset(0, 0)
        } else {
            this.body.setOffset(18, 0)
        }


    }

    isTouchingGround(): boolean {
        return this.body.velocity.y === 0
    }

    walk(): void {
        this.setVelocityX(this.speed)
        this.anims.play(`${this.name}-walk`, true)
    }

    fall(): void {
        this.setVelocityX(this.speed / 5)
        this.anims.play(`${this.name}-idle`, true)
    }
}

type Params = {
    scene: Phaser.Scene,
}
