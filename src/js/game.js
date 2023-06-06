import '../css/style.css'
import { Engine } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Play } from "./play.js";
import { Gameover } from "./gameover.js";

export class Game extends Engine {

    constructor(){
        super({ width: 800, height: 600 })

        // this.showDebug(true)
        // this.debug.transform.showAll = true
        
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        this.addScene('play', new Play())
        this.addScene('gameover', new Gameover())

        this.goToScene('play')
    }
}

new Game()
