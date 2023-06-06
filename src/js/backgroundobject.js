import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources.js'

export class BgObject extends Actor {
    game
    sprite

    constructor(){
        super({
            width: Resources.BgObject.width,
            height: Resources.BgObject.height
        })
    }

    onInitialize(engine){
        this.game = engine
        this.sprite = Resources.BgObject.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(900, Math.random()*450 + 100)
        this.vel = new Vector(-800, 0)
        this.on("exitviewport", (event) => this.killOnExitVp())
    }

    killOnExitVp(){
        if (this.pos.x <= 0) {
            this.kill()
        }
    }
}