import { Scene, Engine, Vector, Input, Label, FontUnit, Font, Color } from "excalibur";
import { Background } from "./background.js";

export class Start extends Scene {
    onInitialize(engine){

        const bg = new Background()
        this.add(bg)

        const title = new Label({
            text: 'Space Meteors',
            color: Color.White,
            pos: new Vector(100, 300),
            font: new Font({
                family: 'impact',
                size: 96,
                unit: FontUnit.Px
            })
        })
        title.opacity = 0.8
        this.add(title)

        const text = new Label({
            text: 'Press [Enter] to start the game',
            color: Color.White,
            pos: new Vector(100, 350),
            font: new Font({
                family: 'impact',
                size: 48,
                unit: FontUnit.Px
            })
        })
        text.opacity = 0.8
        this.add(text)
    }

    update(engine){
        if (engine.input.keyboard.wasReleased(Input.Keys.Enter)) {
            engine.goToScene('play')
        }
    }
}