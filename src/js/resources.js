import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import bgImage from '../images/space.jpg'
import bgStarImage from '../images/bgstar.png'
import playerImage from '../images/player.png'
import enemyImage from '../images/enemy.png'
import starImage from '../images/star.png'
import meteorImage from '../images/meteor.png'
import blastImage from '../images/blast.png'

const Resources = {
    Background: new ImageSource(bgImage),
    BgObject: new ImageSource(bgStarImage),
    Player: new ImageSource(playerImage),
    Enemy: new ImageSource(enemyImage),
    Powerup: new ImageSource(starImage),
    Obstacle: new ImageSource(meteorImage),
    Blast: new ImageSource(blastImage)
}
const ResourceLoader = new Loader([
    Resources.Background,
    Resources.BgObject,
    Resources.Player,
    Resources.Enemy,
    Resources.Powerup,
    Resources.Obstacle,
    Resources.Blast
])

export { Resources, ResourceLoader }