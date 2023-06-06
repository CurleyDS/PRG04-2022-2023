import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from './resources.js'

export class Background extends Actor {
    offset
    
    onInitialize(engine){
        const spaceImage = Resources.Background.toSprite()
        this.offset = spaceImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: spaceImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: spaceImage,
                    pos: new Vector(spaceImage.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)       
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-110, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}