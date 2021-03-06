/// <reference path="../phaser.d.ts"/>

import 'phaser'
import { GameScene } from './scenes/gameScene'

const config: GameConfig = {
    title: 'Dino Falls',
    version: '0.0.Prehistoric!',
    width: 27 * 16,
    height: 16 * 16,
    zoom: 2,
    type: Phaser.AUTO,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    scene: [GameScene],
    input: {
        mouse: true,
    },
    backgroundColor: '#aa2b53',
    render: { pixelArt: true, antialias: false, autoResize: false },
}

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config)
    }
}

window.addEventListener('load', () => {
    var game = new Game(config)
})
