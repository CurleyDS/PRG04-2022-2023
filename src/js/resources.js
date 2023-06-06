import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import bgImage from '../images/space.jpg'
import playerImage from '../images/player.png'
import enemyImage from '../images/enemy.png'
import blastImage from '../images/blast.png'

const Resources = {
    Background: new ImageSource(bgImage),
    Player: new ImageSource(playerImage),
    Enemy: new ImageSource(enemyImage),
    Blast: new ImageSource(blastImage)
}
const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Player,
    Resources.Enemy,
    Resources.Blast
])

export { Resources, ResourceLoader }