/// <reference path="../phaser.d.ts"/>

import 'phaser'
import { GameScene } from './gameScene'

const config: GameConfig = {
    title: 'Dino Falls',
    version: '1.0',
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    // scene: [GameScene],
    input: {
        mouse: true
    },
    backgroundColor: '#1d2b53',
    render: { pixelArt: true, antialias: false, autoResize: false }
}

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config)
    }
}

window.addEventListener('load', () => {
    var game = new Game(config)
})
