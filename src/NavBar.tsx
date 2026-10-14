const items = [
    {id: "kiran", label: "Kiran"},
    {id: "work", label: "Work"},
    {id: "about", label: "About"},
    {id: "contact", label: "Contact"}
]
export default function NavBar({active, setActive}){
    return(
        <>
        <nav className="hidden md:flex fixed bottom-6 z-50 bg-[#24201a88] text-[#FCFBBE] h-12 overflow-hidden inset-x-0 mx-auto w-fit ">
            {
                items.map((item) => (
                    <button
                        onClick={() => setActive(item.id)}
                        aria-current={active === item.id}
                        className="cursor-pointer border-x-2 px-5 border-transparent transition-colors aria-current:bg-[#3F2548] aria-current:border-[#24201a]"
                    >
                        {item.label}
                    </button>
                ))
            }
        </nav>
        <nav className="fixed bottom-6 z-50 bg-[#24201a88] text-[#FCFBBE] h-12">
            <button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Duo_MD"> <path id="Vector" d="M5 15H19M5 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></button>
        </nav>
        </>
    )
}