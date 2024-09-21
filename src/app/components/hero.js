
import bg from '/public/homeBg.png'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      
      <div className="container h-[calc(100vh-280px)] max-w-screen-md mx-auto py-24 flex flex-col justify-center content-center relative z-10 md:text-left flex-wrap max-w-s md:max-w-3xl"
        style={{ pointerEvents: "none" }}
      >
        <h1 className="max-w-xl text-center mb-10 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Tom Spencer</h1>
        <p className="max-w-lg text-center font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 text-balance">Hi 👋🏻</p>
        <p className="max-w-lg pt-4 mb-6 text-center font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-balance">
          I'm a <span className="font-medium">Senior UX Designer</span> focused on delivering simple, yet effective, user-centric design. I currently work at <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a> in the sunny town of Brighton, UK.</p>
        
      </div>

      {/*   <div
    className="container max-w-screen-md mx-auto px-6 flex flex-col justify-center relative z-10 md:text-left flex-wrap max-w-s md:max-w-3xl"
    style={{ pointerEvents: "none" }}
  >
    <div className="text-2xl md:text-5xl md:leading-snug tracking-tight mt-16 md:mt-24 font-black text-balance">
      I'm focused on delivering simple, yet effective,
      user-centric designs.
    </div>
    <div className="text-lg pt-5">
      Currently Senior UX Designer @{" "}
      <b>
        <a
          href="https://www.rakutenadvertising.com"
          target="_blank"
          rel="noreferrer"
        >
          Rakuten Advertising
        </a>
      </b>
    </div>
  </div> */}
    </div>
  )
}

