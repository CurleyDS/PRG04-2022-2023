import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Fish extends Actor {
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
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => this.killFishy())
        this.on("exitviewport", (event) => this.resetPosition())
    }

    killFishy(){
        Resources.Drown.play()
        this.graphics.use(Resources.Bones.toSprite())
    }

    resetPosition(){
        this.pos = new Vector(900, Math.random()*300 + 200)
    }
}