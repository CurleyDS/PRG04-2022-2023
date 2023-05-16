import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Shark extends Actor {
    onInitialize(engine){
        this.pos = new Vector(Math.random()*400 + 200, Math.random()*300 + 150)
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