import { useState } from "react";
import type {SectionId} from "./App"

const items: {id: SectionId; label: string}[] = [
    {id: "kiran", label: "Kiran"},
    {id: "work", label: "Work"},
    {id: "about", label: "About"},
    {id: "contact", label: "Contact"},
]
type NavBarProps = {
  active: SectionId;
  setActive: (id: SectionId) => void;
};

function MenuIcon({ open }: { open: boolean }) {
  const bar =
    "origin-center [transform-box:fill-box] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FCFBBE">
      <rect
        x="0" y="3.525" width="24" height="2.823"
        className={`${bar} ${open ? "translate-y-[7.06px] rotate-135" : ""}`}
      />
      <rect
        x="0" y="10.584" width="24" height="2.823"
        className={`${bar} ${open ? "scale-x-0 opacity-0" : ""}`}
      />
      <rect
        x="0" y="17.643" width="24" height="2.823"
        className={`${bar} ${open ? "translate-y-[-7.06px] -rotate-135" : ""}`}
      />
    </svg>
  );
}

export default function NavBar({active, setActive}: NavBarProps){
    const [open, setOpen] = useState(false)
    return(
        <>
        <nav className="hidden md:flex fixed bottom-6 z-50 bg-[#24201a88] text-[#FCFBBE] h-12 overflow-hidden inset-x-0 mx-auto w-fit">
            {
                items.map((item) => (
                    <button
                        onClick={() => setActive(item.id) }
                        aria-current={active === item.id}
                        className="cursor-pointer border-x-2 px-5 border-transparent transition-colors aria-current:bg-[#3F2548] aria-current:border-[#24201a]"
                    >
                        {item.label}
                    </button>
                ))
            }
        </nav>
        <nav className="flex flex-col items-center gap-6 fixed md:hidden bottom-6 z-50 text-[#FCFBBE] overflow-hidden w-full">
            {open && (
                <ul className="flex flex-col items-center justify-center w-fit">
                {
                items.map((item, i) => (
                    <li className="overflow-hidden w-full">
                        <button
                        onClick={() => {setActive(item.id); setOpen(false)}}
                        aria-current={active === item.id}
                        style={{animationDelay: `${(items.length - 1 - i)*200}ms`}}
                        className="bg-[#24201a88] cursor-pointer border-x-2 w-full px-30 py-5 border-transparent transition-colors aria-current:bg-[#3F2548] aria-current:border-[#24201a] animate-treveal"
                        >
                            {item.label}
                        </button>
                    </li>
                ))
            }
            </ul>
            )}
            <button className="p-3 bg-[#24201a88]" onClick={() => setOpen((prev) => !prev)}>
                <MenuIcon open = {open}/>
            </button>
        </nav>
        </>
    )
}