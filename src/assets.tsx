import avatar from './assets/avatar.webp'
import depthMap from './assets/avatar-depth-map.webp'
import nerdu from './assets/nerdu.webp'

export const groups = {
    hero: {
        images: [avatar, depthMap],
        fonts: ['1em Boldonse', '400 1em Montserrat', '600 1em Montserrat'],
    },
    work: {
        images: [nerdu], fonts:[],
    }
}

export type GroupName = keyof typeof groups