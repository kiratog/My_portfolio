import {projects} from './data'

const mailto = (sub: string, body='') => `mailto:vaddekirato@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`

export default function Work(){

    return(
        <section className="relative min-h-screen">
            <div className="flex justify-between py-13 mx-10">
                <div className="overflow-hidden"><h2 className="animate-breveal text-[#FCFBBE] text-header leading-18">KIRAN</h2></div>
                <div className="overflow-hidden"><h2 className="animate-treveal text-outline text-header leading-18">Projects</h2></div>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-20">
                {
                    projects.map((project,i) => (
                        <div className='overflow-hidden'>
                            <a
                            key={project.id}
                            href={project.url}
                            target='_blank'
                            rel='noreferrer'
                            style={{ backgroundImage: `url(${project.image})`, animationDelay: `${i*200}ms`}}
                            className="group block overflow-hidden bg-cover bg-center aspect-square @container md:animate-rreveal animate-treveal"
                            >
                                <div className='h-full flex-col justify-between bg-[#24201a8b] hidden p-5 group-hover:flex animate-rreveal'>
                                    <a
                                    key={project.id}
                                    href={project.url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="self-end border p-1 border-[#FCFBBE]"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.4968 3.00146L20.0525 3.00293L20.1734 3.01682L20.2611 3.03636L20.365 3.07084L20.4541 3.11117L20.5179 3.14679L20.5805 3.18832L20.6445 3.23821L20.7076 3.29654L20.802 3.40618L20.8736 3.51742L20.9271 3.63015L20.9624 3.73549L20.9781 3.80067L20.9873 3.85302L20.9983 4.00147V11.5054C20.9983 12.0576 20.5506 12.5054 19.9983 12.5054C19.4854 12.5054 19.0628 12.1193 19.005 11.622L18.9983 11.5054L18.998 6.41547L4.70611 20.7071C4.34562 21.0676 3.77839 21.0953 3.38611 20.7903L3.2919 20.7071C2.93142 20.3466 2.90371 19.7794 3.20874 19.3871L3.29193 19.2929L17.583 5.00147H12.4968C11.9839 5.00147 11.5612 4.61542 11.5035 4.11809L11.4968 4.00147C11.4968 3.44918 11.9445 3.00146 12.4968 3.00146Z" fill="#FCFBBE"/>
                                        </svg>
                                    </a>
                                    <div>
                                        <h3 className="text-[#FCFBBE]">{project.title}</h3>
                                        <p className="text-[#FCFBBE] my-2">{project.desc}</p>
                                        <button onClick={() => { window.location.href = mailto(`Datails about ${project.title}`)}} className='bg-[#3F2548] h-12 px-5 text-[#FCFBBE] hidden @min-[360px]:block'>Contact for details</button>
                                    </div>
                                    <div className='flex items-center justify-between @min-[360px]:self-end'>
                                        <button onClick={() => { window.location.href = mailto(`Datails about ${project.title}`)}} className='@min-[360px]:hidden'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 18C22.5 18.1522 22.4707 18.2963 22.4287 18.4335L15.75 11.25L22.5 6V18ZM2.667 19.4595L9.43499 12.2475L12 14.1863L14.454 12.2355L21.333 19.4595C21.2258 19.4843 2.77425 19.4843 2.667 19.4595ZM1.5 18V6L8.25 11.25L1.57125 18.4335C1.52925 18.2963 1.5 18.1522 1.5 18ZM21.75 4.5L12 12L2.25 4.5H21.75ZM21 3H3C1.34325 3 0 4.34325 0 6V18C0 19.6568 1.34325 21 3 21H21C22.6568 21 24 19.6568 24 18V6C24 4.34325 22.6568 3 21 3Z" fill="#FCFBBE"/>
                                            </svg>
                                        </button>
                                        <a href={`${project.git}`} target='_blank' className="text-[#FCFBBE] text-sm hover:underline">learn more</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}