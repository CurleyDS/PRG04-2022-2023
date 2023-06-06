import { Actor, Engine, Vector, Timer } from "excalibur"
import { Resources } from './resources.js'
import { Blast } from './blast.js'

export class Enemy extends Actor {
    game
    sprite

    constructor(){
        super({
            width: Resources.Enemy.width,
            height: Resources.Enemy.height
        })
    }

    onInitialize(engine){
        this.game = engine
        this.sprite = Resources.Enemy.toSprite()
        this.sprite.flipHorizontal = true
        this.graphics.use(this.sprite)
        this.pos = new Vector(900, Math.random()*300 + 200)
        this.vel = new Vector(-100,0)

        const timer = new Timer({
            fcn: () => this.game.currentScene.add(new Blast("Enemy", this.pos)),
            repeats: true,
            interval: 2000,
        })
        this.game.currentScene.add(timer)
        timer.start()

        this.on("exitviewport", (event) => this.hqAttack())
    }

    hqAttack(){
        if (this.pos.x <= 0) {
            this.game.currentScene.hitByEnemy()
            this.kill()
        }
    }
}