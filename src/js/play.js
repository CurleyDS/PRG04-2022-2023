import { Scene, Actor, Engine, Vector, Label, FontUnit, Font, Color, Timer } from "excalibur";
import { Resources } from './resources.js'
import { Background } from "./background.js";
import { BgObject } from "./backgroundobject.js";
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { Powerup } from "./powerup.js";
import { Obstacle } from './obstacle.js'
import { Blast } from './blast.js'

export class Play extends Scene {
    game
    score
    scoreLabel
    hp
    hpLabel
    player
    powerupTimer
    ammo
    ammoLabel

    constructor(){
        super()
    }

    onInitialize(engine){
        this.game = engine

        const previous = JSON.parse(localStorage.getItem("topScores"))
        let topScores
        
        if(previous) {
            topScores = previous
        } else {
            topScores = [
                {
                    name: "anonimous",
                    score: 0
                }
            ]
        }

        localStorage.setItem("topScores", JSON.stringify(topScores))

        const bg = new Background()
        bg.graphics.use(Resources.Background.toSprite())
        bg.pos = new Vector(400, 300)
        this.add(bg)

        const tutorial = new Label({
            text: 'Press W-A-S-D to move around and press Space to shoot',
            color: Color.White,
            pos: new Vector(0, 25),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        tutorial.opacity = 0.8
        this.add(tutorial)

        const label = new Label({
            text: 'Shoot your enemies',
            color: Color.White,
            pos: new Vector(400, 300),
            font: new Font({
                family: 'impact',
                size: 48,
                unit: FontUnit.Px
            })
        })
        label.opacity = 0.8
        this.add(label)

        this.game.clock.schedule(() => {
            this.actors.forEach(label => {
                if (label instanceof Label) {
                    label.kill()
                }
            })
            
            this.scoreLabel = new Label({
                text: `Score: ${this.score}`,
                pos: new Vector(0, 50),
                font: new Font({
                    family: 'impact',
                    size: 48,
                    unit: FontUnit.Px,
                    color: Color.White
                })
            })
            this.add(this.scoreLabel)
            
            this.ammoLabel = new Label({
                text: `Ammo: ${this.ammo}`,
                pos: new Vector(300, 50),
                font: new Font({
                    family: 'impact',
                    size: 48,
                    unit: FontUnit.Px,
                    color: Color.Cyan
                })
            })
            this.add(this.ammoLabel)
            
            this.hpLabel = new Label({
                text: `HP: ${this.hp}`,
                pos: new Vector(600, 50),
                font: new Font({
                    family: 'impact',
                    size: 48,
                    unit: FontUnit.Px,
                    color: Color.Red
                })
            })
            this.add(this.hpLabel)
        }, 3000)
    }

    onActivate(ctx){
        this.score = 0
        this.hp = 100
        this.ammo = 20

        const player = new Player()
        this.player = player
        this.add(player)

        const enemyTimer = new Timer({
            fcn: () => this.add(new Enemy()),
            repeats: true,
            interval: 3000,
        })
        this.add(enemyTimer)
        enemyTimer.start()

        const ammoTimer = new Timer({
            fcn: () => this.ammo = 20,
            repeats: true,
            interval: 60000,
        })
        this.add(ammoTimer)
        ammoTimer.start()

        const powerupTimer = new Timer({
            fcn: () => this.spawnPowerup(),
            repeats: true,
            interval: 3000,
        })
        this.powerupTimer = powerupTimer
        this.add(powerupTimer)
        powerupTimer.start()

        const obstacleTimer = new Timer({
            fcn: () => this.spawnObstacle(),
            repeats: true,
            interval: 3000,
        })
        this.add(obstacleTimer)
        obstacleTimer.start()

        const bgObjTimer = new Timer({
            fcn: () => this.spawnBgObject(),
            repeats: true,
            interval: 3000,
        })
        this.add(bgObjTimer)
        bgObjTimer.start()
    }

    updateScore(){
        this.score += 10
        if (this.scoreLabel) {
            this.scoreLabel.text = `Score: ${this.score}`
        }
    }

    updateHP(){
        this.hp -= 10
        if (this.hpLabel) {
            this.hpLabel.text = `HP: ${this.hp}`
        }
    }

    updateAmmo(){
        this.ammo--
        if (this.ammoLabel) {
            this.ammoLabel.text = `Ammo: ${this.ammo}`
        }
    }
    
    hitByEnemy(){
        if (this.hp > 0) {
            this.updateHP()
        } else {
            this.player.kill()
            this.actors.forEach(actor => {
                if (actor instanceof Enemy || actor instanceof Obstacle || actor instanceof Blast) {
                    actor.kill()
                }
            })
            this.timers.forEach(timer => {
                timer.stop()
            })
            this.game.goToScene('gameover', { score: this.score })
            this.score = 0
            this.scoreLabel.text = `Score: ${this.score}`
        }
    }

    spawnPowerup(){
        this.game.clock.schedule(() => {
            this.add(new Powerup())
            this.powerupTimer.reset()
        }, Math.random()*1000000 + 100000)
    }

    spawnObstacle(){
        this.game.clock.schedule(() => {
            this.add(new Obstacle())
        }, Math.random()*100000 + 10000)
    }

    spawnBgObject(){
        this.game.clock.schedule(() => {
            this.add(new BgObject())
        }, Math.random()*10000)
    }
}