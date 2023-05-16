import { Actor, Vector, Input } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'

export class Shark extends Actor {
    constructor(){
        super({
            width: Resources.Shark.width,
            height: Resources.Shark.height
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(0, 300)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event){
        if(event.other instanceof Fish) {
            event.other.hitByShark()
        }
    }

    update(engine) {
        let xspeed = 0
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            yspeed = -300
        }
        
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            yspeed = 300
        }
        
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -300
        }

        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = 300
        }
        
        this.vel = new Vector(xspeed, yspeed)
    }
}