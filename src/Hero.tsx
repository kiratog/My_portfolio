import avatar from './assets/avatar.webp'
import depthMap from './assets/avatar-depth-map.webp'
import DepthAvatar from './DepthAvatar'

const Hero = () => {
return (
  <header className="relative h-screen overflow-hidden">
    <div className="absolute z-0 pointer-events-none select-none md:hidden">
      <h1 className='overflow-hidden animate-breveal [--dur:800ms] w-full whitespace-nowrap text-[29vw] text-center text-[#FCFBBE]'>KIRAN</h1>
      <h1 className='overflow-hidden animate-rreveal [--dur:800ms] text-outline w-full whitespace-nowrap text-[10vw] p-2'>Full-stack <br />Web Developer</h1>
    </div>
    <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none select-none">
      <div className="hidden md:block overflow-hidden"><h1 className='animate-lreveal text-outline text-sub text-right whitespace-nowrap'>Full-Stack</h1></div>
      <div className="text-center hidden md:inline-block">
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
        <h1 className="text-hero leading-tight text-[#FCFBBE]">
          KIRAN
        </h1>
      </div>
      <div className="hidden md:inline overflow-hidden"><h1 className='animate-rreveal text-outline text-sub text-left my-3'>Web<br></br>Developer</h1></div>
    </div>
    <DepthAvatar
      color={avatar}
      depth={depthMap}
      strength={0.02}
      className="animate-treveal z-10 animate-duration-1500 absolute bottom-0 left-1/2 z-10 h-auto w-full -translate-x-1/2 md:w-[55vw] md:min-w-150"
    />
  </header>
)
}

export default Hero