export async function generateMetadata() {
    return {
      title: "About | Tom Spencer",
      description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
      }
  }

export default function About() {
    return (
        <div>           
        <div className="container mx-auto max-w-screen-md px-6 pt-10">
        <div className="my-10 grid grid-cols-1 gap-14">        

                <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
                <div className="order-last col-span-8 flex w-full flex-col content-center justify-center md:order-first">
                <div className="text-sm font-medium uppercase text-purple-500">Hi, I'm Tom —</div>              
                
                
                </div>
                <div className="col-span-4">
                    <img src="/bio.png" alt="You will often find me out hiking in the South Downs National Park" className="mx-auto rounded-2xl" />
                </div>
                </div>
                <div className="md:text-lg my-4 max-w-lg font-light text-gray-500 lg:mb-8 lg:text-xl dark:text-gray-400">
                        <p>I'm a Senior UX Designer based in Brighton, UK. I thrive on solving complex problems and crafting experiences that feel natural and engaging. My work is all about making products enjoyable, accessible, and beautifully intuitive.</p>
                        <p className="pt-4">Currently, I'm at Rakuten Advertising, where I dive deep into user behavior, ensuring that every design decision is rooted in empathy and understanding. I love experimenting with ideas and solutions to create products that not only work but make users feel right at home.</p>
                        <p className="pt-4">When I'm not designing, you'll find me recharging in nature or exploring new places with my partner, always drawing inspiration from the world around me.</p>
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