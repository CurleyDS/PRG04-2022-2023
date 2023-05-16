import '../css/style.css'
import { Actor, Engine, Vector, Label, FontUnit, Font } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })

        // this.showDebug(true)
        // this.debug.transform.showAll = true
        
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const background = new Actor()
        background.graphics.use(Resources.Background.toSprite())
        background.pos = new Vector(400, 300)
        this.add(background)
    
        const shark = new Shark()
        this.add(shark)

        for (let x = 0; x < 10; x++) {
            const fish = new Fish()
            this.add(fish)
        }

        const label = new Label({
            text: 'Kill da FISHIES',
            pos: new Vector(125, 100),
            font: new Font({
                family: 'impact',
                size: 96,
                unit: FontUnit.Px
            })
        })
        label.opacity = 0.8
        this.add(label)
    }
}

new Game()
