import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor {
    alive = true

    constructor(){
        super({
            width: Resources.Fish.width,
            height: Resources.Fish.height
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(Math.random()*400 + 300, Math.random()*300 + 200)
        this.vel = new Vector(-100,0)
        this.on("exitviewport", (event) => this.resetPosition())
    }

    resetPosition(){
        this.pos = new Vector(900, Math.random()*300 + 200)
    }

    update(engine){
        if (!this.alive) {
            if (this.pos.y >= 0) {
                this.vel = new Vector(0,-100)
            } else {
                this.vel = new Vector(0,0)
            }
        }
    }
    
    hitByShark(event){
        if (this.alive) {
            Resources.Drown.play()
            this.graphics.use(Resources.Bones.toSprite())
            this.alive = false
        }
    }
}