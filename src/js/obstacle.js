import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Obstacle extends Actor {
    game
    sprite

    constructor(){
        super({
            width: Resources.Obstacle.width,
            height: Resources.Obstacle.height
        })
    }

    onInitialize(engine){
        this.game = engine
        this.sprite = Resources.Obstacle.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(900, 0)
        this.vel = new Vector(-200, (this.game.currentScene.player.pos.y / 2))
        this.on("exitviewport", (event) => this.killOnExitVp())
    }

    killOnExitVp(){
        if (this.pos.x <= 0) {
            this.kill()
        }
    }
}