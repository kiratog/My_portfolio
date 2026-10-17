import nerdu from './assets/nerdu.webp'
import aarohan from './assets/aarohan.webp'
import coaching from './assets/coaching.webp'

export type Projects = {
    id: string,
    title: string,
    url: string,
    image: string,
    git:string,
    desc:string
}

export const projects: Projects[] = [
    {
        id: "nerdu",
        title:"NerdU — Intentional Video Discovery",
        url: "https://nerdu.vercel.app/",
        image: nerdu,
        git: "https://github.com/kiratog/NerdU",
        desc: "One video worth your attention."
    },
    {
        id: "aarohan",
        title:"Hospital Landing Page",
        url: "https://aarohan-hospital.vercel.app/",
        image: aarohan,
        git: "https://github.com/kiratog/Aarohan-hospital",
        desc: "A conversion-focused hospital website built to strengthen patient trust"
    },
    {
        id: "coaching",
        title:"Coaching Center Landing Page",
        url: "https://sai-coaching-center.vercel.app/",
        image: coaching,
        git: "https://github.com/kiratog/coaching-website-2",
        desc: "A conversion-focused hospital website built to strengthen patient trust"
    }
]