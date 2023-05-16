import '../css/style.css'
import { Actor, Engine, Vector, Label, FontUnit, Font } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const background = new Actor()
        background.graphics.use(Resources.Background.toSprite())
        background.pos = new Vector(400, 300)
        this.add(background)

        const label = new Label({
            text: 'Kill da FISHIES',
            pos: new Vector(0, 50),
            font: new Font({
                family: 'impact',
                size: 48,
                unit: FontUnit.Px
            })
        });
        this.add(label)

        for (let x = 0; x < 5; x++) {
            const fish = new Fish()
            this.add(fish)
    
            const shark = new Shark()
            this.add(shark)
        }
    }
}

new Game()
