import { Actor, Engine, Vector, SpriteSheet, Animation, range } from "excalibur"
import { Resources } from './resources'

export class Starmode extends Actor {
    game
    
    constructor() {
        super({
            width: Resources.Player.width,
            height: Resources.Player.height
        })
    }

    onInitialize(engine) {
        this.scale = new Vector(1.5, 1.5)
        const starPlayerSheet = SpriteSheet.fromImageSource({
            image: Resources.Shield,
            grid: {rows: 6, columns: 10, spriteWidth: Resources.Player.width, spriteHeight: Resources.Player.height},
        })

        const starPlayer = Animation.fromSpriteSheet(starPlayerSheet, range(0, 59), 100)

        this.graphics.add('starplayer', starPlayer)
        
        this.graphics.use('starplayer')
    }
}