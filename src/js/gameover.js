import { Scene, Engine, Vector, Input, Label, FontUnit, Font, Color } from "excalibur";

export class Gameover extends Scene {
    onInitialize(engine){

        const title = new Label({
            text: 'GAME OVER',
            color: Color.White,
            pos: new Vector(125, 100),
            font: new Font({
                family: 'impact',
                size: 96,
                unit: FontUnit.Px
            })
        })
        title.opacity = 0.8
        this.add(title)

        const text = new Label({
            text: 'Press [Enter] to play again',
            color: Color.White,
            pos: new Vector(125, 150),
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