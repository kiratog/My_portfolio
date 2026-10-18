import html from "./assets/icons/html.svg"
import css from "./assets/icons/css.svg"
import js from "./assets/icons/js.svg"
import tailwind from "./assets/icons/tailwind.svg"
import react from "./assets/icons/react.svg"
import express from "./assets/icons/express.svg"
import DepthAvatar from "./DepthAvatar"
import avatar from "./assets/avatar.webp"
import depthMap from './assets/avatar-depth-map.webp'

const EMAIL = "vaddekirato@gmail.com";

function sendMail(subject: string, body = "") {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


export default function About(){
    const icons = [
        {src: html, alt: "HTML5"},
        {src: css, alt: "CSS#"},
        {src: js, alt: "JavaScript"},
        {src: tailwind, alt: "Tailwind CSS"},
        {src: react, alt: "React Framework"},
        {src: express, alt: "Express Framework"},
    ]

    return(
        <section className="relative min-h-screen flex flex-col">
            <div className="flex justify-between py-13 mx-10">
                <div className="overflow-hidden"><h2 className="text-[#FCFBBE] text-header leading-18">KIRAN</h2></div>
                <div className="overflow-hidden"><h2 className="animate-treveal text-outline text-header leading-18">About</h2></div>
            </div>
            <div className="flex flex-1 flex-col-reverse md:flex-row px-10 items-center justify-center w-full overflow-hidden">
                <div className="max-w-150 text-center flex flex-col items-center md:text-left md:items-start overflow-hidden">
                    <div>
                        <h2 className="text-[#FCFBBE] text-sub overflow-hidden animate-breveal md:animate-rreveal">KIRAN VADDE</h2>
                        <p className="text-[#FCFBBE] text-body py-10 animate-treveal md:animate-rreveal">
                            I help local businesses and individuals build modern, good-looking websites without sacrificing customization. I build websites from the ground up with code, giving my clients the freedom to create an experience that actually fits their vision.
                            <br />
                            <br />
                            I handle the entire process myself — from design and development to interactions and responsive implementation — turning ideas into polished, functional websites.
                        </p>
                    </div>
                    <div className="flex gap-2 flex-row overflow-hidden">
                        <button onClick={() => sendMail("Want to hire you!")} className="animate-treveal md:animate-rreveal cursor-pointer text-body text-[#FCFBBE] bg-[#7C679E] h-[clamp(2.5rem,4vw,3.25rem)] px-[clamp(1.5rem,3vw,2.5rem)]">Hire me</button>
                        <button onClick={() => sendMail("Hello there")} className="animate-treveal md:animate-rreveal cursor-pointer text-[#FCFBBE] text-body border border-[#7C679E] h-[clamp(2.5rem,4vw,3.25rem)] px-[clamp(1.5rem,3vw,2.5rem)]">Contact me</button>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 mx-auto aspect-square animate-spin -z-10">
                        {icons.map((icon, i) => {
                        const angle = (i / icons.length) * 2 * Math.PI;
                        return (
                          <img
                            key={icon.src}
                            src={icon.src}
                            alt=""
                            style={{
                              left: `${50 + 40 * Math.sin(angle)}%`,
                              top: `${50 - 40 * Math.cos(angle)}%`,
                            }}
                            className="absolute size-[clamp(3rem,4vw,5rem)] -translate-x-1/2 -translate-y-1/2 animate-anti-spin"
                          />
                        );
                        })}
                    </div>
                    <DepthAvatar
                        color={avatar}
                        depth={depthMap}
                        strength={0.03}
                        className="z-10 animate-duration-1500 h-auto w-full"
                    />
                </div>
            </div>
        </section>
    )
}