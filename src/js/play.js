import { Scene, Actor, Engine, Vector, Label, FontUnit, Font, Color, Timer } from "excalibur";
import { Resources } from './resources.js'
import { Background } from "./background.js";
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { Blast } from './blast.js'

export class Play extends Scene {
    game
    score
    scoreLabel
    player

    constructor(){
        super()
    }

    onInitialize(engine){
        console.log("Start game")
        this.game = engine

        const previous = JSON.parse(localStorage.getItem("topScores"))
        
        if(previous) {
            console.log(`localstorage SCORE: ${previous}`)
        }

        let topScores = [
            {
                name: "anonimous",
                score: 0
            }
        ]

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
        }, 3000)
    }

    onActivate(ctx){
        this.score = 0

        const player = new Player()
        this.player = player
        this.add(player)

        const timer = new Timer({
            fcn: () => this.add(new Enemy()),
            repeats: true,
            interval: 3000,
        })
        this.add(timer)
        timer.start()
    }

    updateScore(){
        this.score += 10
        this.scoreLabel.text = `Score: ${this.score}`
    }
    
    hitByEnemy(){
        if (this.player.hp > 0) {
            this.player.hp -= 10
            console.log(this.player.hp)
        } else {
            this.player.kill()
            this.actors.forEach(actor => {
                if (actor instanceof Enemy || actor instanceof Blast) {
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
}