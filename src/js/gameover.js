import { Scene, Engine, Vector, Input, Label, FontUnit, Font, Color } from "excalibur";
import { Background } from "./background.js";

export class Gameover extends Scene {
    game
    newScore
    newScoreText
    highScores
    highScoreTexts

    constructor(){
        super()
        this.newScore = 0
        this.highScores = []
        this.highScoreTexts = []
    }

    onInitialize(engine){
        this.game = engine

        const bg = new Background()
        this.add(bg)

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

        this.newScoreText = new Label({
            text: `YOUR SCORE: ${this.newScore}`,
            pos: new Vector(125, 250),
            font: new Font({
                family: 'impact',
                size: 48,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.newScoreText.opacity = 0.8
        this.add(this.newScoreText)

        const nameTitle = new Label({
            text: `Name`,
            color: Color.White,
            pos: new Vector(125, 350),
            font: new Font({
                family: 'impact',
                size: 48,
                unit: FontUnit.Px
            })
        })
        nameTitle.opacity = 0.8
        this.add(nameTitle)
        
        const scoreTitle = new Label({
            text: `Score`,
            color: Color.White,
            pos: new Vector(525, 350),
            font: new Font({
                family: 'impact',
                size: 48,
                unit: FontUnit.Px
            })
        })
        scoreTitle.opacity = 0.8
        this.add(scoreTitle)

        for (let x = 0; x < 3; x++) {
            let score
            if (this.highScores.length <= (x+1)) {
                score = {
                    name: "anonymous",
                    score: 0
                }
            } else {
                score = this.highScores[x]
            }
                
            let nameText = new Label({
                text: `${score.name}`,
                color: Color.White,
                pos: new Vector(125, (400 + (50 * x))),
                font: new Font({
                    family: 'impact',
                    size: 48,
                    unit: FontUnit.Px
                })
            })
            nameText.opacity = 0.8
            this.add(nameText)
            
            let scoreText = new Label({
                text: `${score.score}`,
                color: Color.White,
                pos: new Vector(525, (400 + (50 * x))),
                font: new Font({
                    family: 'impact',
                    size: 48,
                    unit: FontUnit.Px
                })
            })
            scoreText.opacity = 0.8
            this.add(scoreText)

            let highScoreText = {
                nameText,
                scoreText
            }
            this.highScoreTexts.push(highScoreText)
        }
    }

    onActivate(ctx){
        this.newScore = 0
        this.highScores = []
        
        const previous = JSON.parse(localStorage.getItem("topScores"))
        
        if (previous) {
            this.highScores = previous
        }

        if (ctx.data) {
            let newTopScores = this.highScores

            let newTopScore = {
                name: "anonimous",
                score: ctx.data.score
            }
            newTopScores.push(newTopScore)

            for (let x = 0; x < 3; x++) {
                if (newTopScores.length <= (x+1)) {
                    let newTopScore = {
                        name: "anonimous",
                        score: 0
                    }
                    newTopScores.push(newTopScore)
                }
            }

            this.highScores = newTopScores.sort((a, b) => b.score-a.score)

            localStorage.setItem("topScores", JSON.stringify(this.highScores))

            this.updateNewScore(ctx)
        }

        this.updateHighScores()
    }

    updateNewScore(ctx){
        this.newScore = ctx.data.score
        if (this.newScoreText) {
            this.newScoreText.text = `YOUR SCORE: ${this.newScore}`
        }
    }

    updateHighScores(){
        for (let x = 0; x < 3; x++) {
            if (this.highScoreTexts.length < (x+1)) {
                this.highScoreTexts[x].nameText.text = "anonimous"
                this.highScoreTexts[x].scoreText.text = 0
            } else {
                this.highScoreTexts[x].nameText.text = `${this.highScores[x].name}`
                this.highScoreTexts[x].scoreText.text = `${this.highScores[x].score}`
            }
        }
    }

    onPreUpdate(engine){
        if (engine.input.keyboard.wasReleased(Input.Keys.Enter)) {
            engine.goToScene('play')
        }
    }
}