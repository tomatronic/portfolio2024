export default function About() {
    return (
        <div>           
        <div className="container mx-auto max-w-screen-md px-6 pt-10">
        <div className="my-10 grid grid-cols-1 gap-14">
        <h1 className="xl:text-6xl mb-10 pb-10 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl dark:text-white">About</h1>

                <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
                <div className="order-last col-span-8 flex w-full flex-col content-center justify-center md:order-first">
                <div className="text-sm font-medium uppercase text-purple-500">Hi, I'm Tom —</div>              
                <div className='text-balance pt-4 text-3xl font-semibold tracking-[-0.015em] text-gray-800'>
                    I'm a Senior UX Designer based in Brighton, UK. I have 10+ years of design industry experience.<br /><br />
                </div>
                <div className="text-sm font-medium text-gray-500">
                    Currently working @ <b><a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a></b>
                </div>
                </div>
                <div className="col-span-4">
                    <img src="/bio.png" alt="You will often find me out hiking in the South Downs National Park" className="mx-auto rounded-2xl" />
                </div>
                </div>
                <div className="md:text-lg my-4 max-w-lg font-light text-gray-500 lg:mb-8 lg:text-xl dark:text-gray-400">
                        <p>Being a UX designer allows me to solve complex problems and bring the end user a pleasurable experience. I make sure that products are enjoyable, accessible and beautiful to look at. I have a passion for getting fully immersed in a problem and experimenting with a range of possible solutions.</p>
                        <p className="pt-4">Seeing the impact of how I can influence a user's behaviour within a product or application fascinates me. Being empathetic and understanding helps ensure that I can make a product not just work for its intended users but be something they feel comfortable with.</p>
                        <p className="pt-4">I'm currently based just outside of sunny Brighton, UK. You'll usually find me hiking on the South Downs with my partner, paddle boarding at sea or adventuring around the world.</p>
                </div>
                    <div>
                        <img src="/aboutBanner.png" alt="A little insight to my life" width="100%" />
                    </div>
                <div>                            
                        <p className="text-center">I'm always looking for opportunities for collaboration. <a href="mailto:tom.m.spencer+portfolio@gmail.com" className="hover:text-purple-500">Reach out and let's chat!</a></p>
                </div>
            </div>
        </div>
    </div>
    )
  }