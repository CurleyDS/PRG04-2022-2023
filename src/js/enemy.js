import { Actor, Engine, Vector, Timer } from "excalibur"
import { Resources } from './resources.js'
import { Obstacle } from "./obstacle.js"
import { Blast } from './blast.js'

export class Enemy extends Actor {
    game
    sprite
    timer

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
        this.timer = timer
        this.game.currentScene.add(timer)
        timer.start()

        this.on('collisionstart', (event) => this.collisionWith(event))
        this.on("exitviewport", (event) => this.hqAttack())
    }

    collisionWith(event){
        if ((event.other instanceof Blast && event.other.type == "Player")) {
            this.game.currentScene.updateScore()
            this.timer.stop()
            this.kill()
        } else if (event.other instanceof Obstacle) {
            this.timer.stop()
            this.kill()
        }
    }

    hqAttack(){
        if (this.pos.x <= 0) {
            this.game.currentScene.hitByEnemy()
            this.kill()
        }
    }
}