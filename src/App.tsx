import { useState } from "react"
import Hero from "./Hero"
import NavBar from "./NavBar";
import Work from "./Work";
import About from "./About";
import { useEffect } from 'react'
import { preloadGroup } from './preload'

const sections = {
  kiran:Hero,
  work:Work,
  about:About,
}
export type SectionId = keyof typeof sections;

function App() {

  const [active, setActive] = useState<SectionId>("kiran");
  const Section = sections[active];

  useEffect(() => {
    const run = () => (['work'] as const).forEach(preloadGroup)
    if ('requestIdleCallback' in window) requestIdleCallback(run)
    else setTimeout(run, 1500)
  }, [])

  return (
    <>
    <Section />
    <NavBar active={active} setActive={setActive} />
    </>
  )
}

export default App
