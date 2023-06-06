import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources } from './resources.js'

export class Blast extends Actor {
    type

    constructor(type, pos){
        super({
            width: Resources.Blast.width,
            height: Resources.Blast.height
        })

        this.type = type
        this.pos = pos
    }

    onInitialize(engine){
        this.sprite = Resources.Blast.toSprite()
        this.graphics.use(this.sprite)

        if (this.type == "Player"){
            this.sprite.tint = new Color(0, 0, 255)
            this.vel = new Vector(300,0)
        } else {
            this.sprite.tint = new Color(255, 0, 0)
            this.vel = new Vector(-300,0)
        }
        this.on("exitviewport", (event) => this.kill())
    }
}