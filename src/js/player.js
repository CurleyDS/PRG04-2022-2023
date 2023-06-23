import { Actor, Engine, Vector, Input } from "excalibur"
import { Resources } from './resources.js'
import { Enemy } from './enemy.js'
import { Obstacle } from "./obstacle.js"
import { Blast } from './blast.js'
import { Powerup } from "./powerup.js"
import { Starmode } from "./starmode.js"

export class Player extends Actor {
    game
    starmode
    sprite

    constructor(){
        super({
            width: Resources.Player.width,
            height: Resources.Player.height
        })
    }

    onInitialize(engine){
        this.game = engine
        this.starmode = false
        this.sprite = Resources.Player.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(0, 300)
        this.on('collisionstart', (event) => this.collisionWith(event))
    }

    collisionWith(event){
        if (!this.starmode) {
            if(event.other instanceof Enemy || event.other instanceof Obstacle || (event.other instanceof Blast && event.other.type == "Enemy")) {
                this.actions.blink(100, 100, 3)
                this.game.currentScene.hitByEnemy()
            } else if(event.other instanceof Powerup) {
                this.starmode = new Starmode()
                this.addChild(this.starmode)
                this.game.currentScene.starMode()
                this.game.clock.schedule(() => {
                    this.removeChild(this.starmode)
                    this.starmode = false
                    this.game.currentScene.starMode()
                }, 10000)
            }
        }
    }

    onPreUpdate(engine){
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

        if (engine.currentScene.ammo > 0 || this.starmode) {
            if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
                engine.add(new Blast("Player", this.pos))
                if (!this.starmode) {
                    engine.currentScene.updateAmmo()
                }
            }
        }
    }
}