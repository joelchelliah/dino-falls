import { Physics } from 'phaser'

export class Dino extends Physics.Arcade.Sprite {
    private anim: Phaser.Tweens.Tween[];

    private direction: number
    private speed: number
    private dinoNames: Array<string> = ['doux', 'mort', 'tard', 'vita']

    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame)
        params.scene.physics.world.enable(this)

        this.name = this.dinoNames[Math.floor(Math.random() * this.dinoNames.length)]

        if (this.x > 300) {
            this.direction = -1
            this.x -= 8 // Fine-tuning spawning points
        } else {
            this.direction = 1
            this.x -= 20 // Fine-tuning spawning points
        }
        
        this.y -= 8 // Fine-tuning spawning points
        this.speed = this.direction * (30 + Math.floor(Math.random() * 120))

        this.setScale(this.direction, 1)
        this.setGravityY(600)
        this.setSize(14, 15)

        params.scene.add.existing(this)

        if (this.direction > 0) this.body.setOffset(0, 0)
        else this.body.setOffset(16, 0)
    }

    isTouchingGround(): boolean {
        return this.body.velocity.y === 0
    }

    walk(): void {
        const runSpeed = 100
        this.setVelocityX(this.speed)

        if(this.speed < runSpeed && this.speed > -runSpeed) this.anims.play(`${this.name}-walk`, true)
        else this.anims.play(`${this.name}-run`, true)
    }

    fall(): void {
        this.setVelocityX(this.speed / 5)
        this.anims.play(`${this.name}-fall`, true)
    }
}

type Params = {
    scene: Phaser.Scene,
}
