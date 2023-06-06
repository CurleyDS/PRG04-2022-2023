import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources } from './resources.js'
import { Enemy } from './enemy.js'
import { Obstacle } from "./obstacle.js"
import { Blast } from './blast.js'

export class Player extends Actor {
    game

    constructor(){
        super({
            width: Resources.Player.width,
            height: Resources.Player.height
        })
    }

    onInitialize(engine){
        this.game = engine
        this.sprite = Resources.Player.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(0, 300)
        this.on('collisionstart', (event) => this.collisionWith(event))
    }

    collisionWith(event){
        if(event.other instanceof Enemy || event.other instanceof Obstacle || (event.other instanceof Blast && event.other.type == "Enemy")) {
            this.actions.blink(100, 100, 3)
            this.game.currentScene.hitByEnemy()
        }
    }

    update(engine){
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

        if (engine.currentScene.ammo > 0) {
            if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
                engine.add(new Blast("Player", this.pos))
                engine.currentScene.updateAmmo()
            }
        }
    }
}