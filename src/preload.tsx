import { groups, type GroupName } from "./assets";

const loadImage = (src : string) => {
  const img = new Image()
  img.src = src
  return img.decode()
}

const cache = new Map<GroupName, Promise<unknown>>()

export function preloadGroup(name: GroupName){
    if(!cache.has(name)){
        const {images, fonts} = groups[name];
        cache.set(
            name,
            Promise.allSettled([
                ...images.map(loadImage),
                ...fonts.map((f) => document.fonts.load(f)),
            ])
        )
    }
    return cache.get(name)!
}