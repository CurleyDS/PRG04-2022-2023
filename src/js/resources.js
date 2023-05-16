import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import bgImage from '../images/water.jpg'
import fishImage from '../images/fish.png'
import sharkImage from '../images/shark.png'
import bonesImage from '../images/bones.png'
import drownSound from '../sound/drowning.mp3'

const Resources = {
    Background: new ImageSource(bgImage),
    Fish: new ImageSource(fishImage),
    Shark: new ImageSource(sharkImage),
    Bones: new ImageSource(bonesImage),
    Drown: new Sound(drownSound)
}
const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Fish,
    Resources.Shark,
    Resources.Bones,
    Resources.Drown
])

export { Resources, ResourceLoader }