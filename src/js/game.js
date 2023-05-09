import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const background = new Actor()
        background.graphics.use(Resources.Background.toSprite())
        background.pos = new Vector(400, 300)
        this.add(background)

        const fish = new Actor({
            width: Resources.Fish.width,
            height: Resources.Fish.height
        })
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-100,0)
        fish.on("pointerup", function (event) {
            fish.graphics.use(Resources.Bones.toSprite())
        })
        fish.on("exitviewport", (event) => {
            fish.pos = new Vector(900, Math.random()*300 + 200)
        })
        this.add(fish)

        const shark = new Actor({
            width: Resources.Shark.width,
            height: Resources.Shark.height
        })
        shark.graphics.use(Resources.Shark.toSprite())
        shark.pos = new Vector(200, 150)
        shark.vel = new Vector(-100,0)
        shark.on("pointerup", function (event) {
            shark.graphics.use(Resources.Bones.toSprite())
        })
        shark.on("exitviewport", (event) => {
            shark.pos = new Vector(900, Math.random()*300 + 200)
        })
        this.add(shark)
    }
}

new Game()
