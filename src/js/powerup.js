import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Powerup extends Actor {
    game
    sprite

    constructor(){
        super({
            width: Resources.Powerup.width,
            height: Resources.Powerup.height
        })
    }

    onInitialize(engine){
        this.game = engine
        this.sprite = Resources.Powerup.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(900, Math.random()*300 + 200)
        this.vel = new Vector(-800, 0)
        this.on("exitviewport", (event) => this.killOnExitVp())
    }

    killOnExitVp(){
        if (this.pos.x <= 0) {
            this.kill()
        }
    }
}