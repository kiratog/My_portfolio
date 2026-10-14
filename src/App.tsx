import { useState } from "react"
import Hero from "./Hero"
import NavBar from "./NavBar";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

const sections = {
  kiran:Hero,
  work:Work,
  about:About,
  contact:Contact
}

function App() {

  const [active, setActive] = useState("kiran");
  const Section = sections[active];

  return (
    <>
    <Section />
    <NavBar active={active} setActive={setActive} />
    </>
  )
}

export default App
