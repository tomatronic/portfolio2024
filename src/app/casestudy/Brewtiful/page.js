import Link from "next/link"
import Image from "next/legacy/image"
import React from "react"
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'

export async function generateMetadata() {
    return {
      title: "Brewtiful | Tom Spencer",
      description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
      }
  }

function BeerBlog() {
    return (
        <>
            <div className="mt-4">
                <div className="container mx-auto h-[70vh] max-w-screen-lg rounded-2xl bg-[url('/backgroundBrew.png')] bg-cover">
                    <div className="mx-auto flex h-full max-w-screen-md flex-row flex-wrap place-content-center content-center">
                        <div className="flex flex-col">
                            <Zoom>
                                <img src="/brewtifulBg.png" width="1600" height="927" alt="Small mock of end product" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6 py-10">
                    <div className="text-3xl font-semibold tracking-tight">Brewtiful</div>
                    <p className="pt-2 text-sm font-medium uppercase">Personal Project &bull; Oct 2022 - Jan 2023</p>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="mb-10 grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-3">
                        <p className="text-base font-medium">I decided I wanted to find a new project for myself. I wanted to create something that would both challenge me as a designer but also still provide a solution to a problem.</p>
                        <p  className="mb-16 text-base font-medium">So what did I decide? After spending a long time thinking about what I enjoyed and how I may be able to transform this into a project I came up with the concept of 'Brewtiful'. The basis to the idea is that craft beers often feature great designs on the cans and bottles they are distrubuted in. I noticed that although there are many websites and apps out there that focus on the beer itself very few mentioned the design effort.</p>
                        </div>
                        <div className="col-span-1">
                        <p className="text-sm font-medium uppercase">Role</p>
                            <p>Sole UX designer</p><br/>
                            <p className="text-sm font-medium uppercase">Skills used</p>
                            <p>UX/UI, User Research, Prototyping, User testing</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-4 pb-10">
                            <h2 className="text-xl font-semibold tracking-tight">Project Goal</h2>
                            <p className="mb-16 text-base font-medium">Create a magazine/blog style website that focuses on craft beers and the packaging they are delivered in. Each beer will be reviewed in a way that entertains but also educates.</p>
                            <Zoom>
                                <img src="/sampleBeer.png" className="rounded-2xl" width="500" height="542" alt="I had previously begun exploring ways of documenting beers I had sampled" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">A new brand is born</h2>
                            <p className="text-base font-medium">So now I had my idea in place I wanted to give it name. I wanted to be able to refer to this idea as a brand and not just a thing. I also new I needed to create my goal. So my next steps was to come up with a name and an end goal.</p>
                            <p className="mb-16 text-base font-medium">I decided I wanted to highlight that the brand involved beer and design, I knew I wanted a name that was easy and played on words. After many hours of searching the internet, checking domain availabilities and social channels names I settled on the name 'Brewtiful'! More on this in a bit.</p>
                            <Zoom>
                                <img src="/initialDoodle.png" className="rounded-2xl" width="1000" height="774" alt="Some very messy initial thoughts on what I wanted to include and the direction I could take a name"   />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Understanding the landscape</h2>
                            <p className="text-base font-medium">My initial task was to explore what options were already available to try and gain an understanding of where my idea may sit.</p>
                            <p className="mb-16 text-base font-medium">I collated a few of the sites into a list and identifed where they were similar and if they offered any unique selling points. I then plotted my proposal against these findings.</p>
                            <div className="pb-16 text-base font-medium">
                                <Zoom>
                                    <img src="/brewComp.png" className="rounded-2xl" width="2390" height="1206" alt="Competitor research - Investigating the craft beer and design review landscape"   />
                                </Zoom>
                            </div>
                            <div className="max-w-full rounded-lg bg-amber-300 p-10 py-5">
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">Who is this for?</h2>
                                <p className="mb-16 text-base font-medium text-gray-700">My next task was to work out who my audience was and what they might want to get from this new site. As this is a personal project my access to research is a little more limited, but I went ahead and created a couple of personas based on data I could find. I focused on the two sides of this project, the beer lover and the design lover. The end goal is to create a project that an be enjoyed by both parties. Creating these personas will help ensure I stay as user centric as possible.</p>
                                <Zoom>
                                    <img src="/beerLover.png" width="1684" height="1190" alt="User Persona A - The user persona of a beer lover"   />
                                </Zoom>
                                <Zoom>
                                    <img src="/designLover.png" width="1684" height="1190" alt="User Persona B - The user persona of a design lover"   />
                                </Zoom>
                            </div>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Conidering content</h2>
                            <p className="text-base font-medium">Now was time to start thinking about what content would make up this site.</p>
                            <p className="text-base font-medium">In order to start sketching some ideas I decided to plan out a rough IA (Information Architecture) in order to identify the pages that would need designing.</p>
                            <p className="text-base font-medium">The site would likely be fairly simple and built in a way that I could reuse a template for multiple pages. I wanted to ensure that adding new content was not a labourious task. With this in mind I identified 5-6 main pages/templates I would require:</p>
                            <p className="text-base font-medium">
                                &bull; <b>Homepage</b> - Something that promotes new content and encourages interaction.<br />
                                &bull; <b>A search / directory page</b> - This could be used for both beers and breweries.<br />
                                &bull; <b>Beer bio</b> - A page for a single beer, this is the most information packed of the pages.<br />
                                &bull; <b>Brewery bio</b> - I would keep this quite simple, basic details and reviewed beers.<br />
                                &bull; <b>Blog</b> - This can be kept fairly simple. The main focus is the beer!<br />
                                &bull;  <b>Resource pages</b> - This includes 'about', 'contact' etc.
                            </p>
                            <p className="mb-16 text-base font-medium">At this point I have a good idea about the structure of the site. It's time to start thinking about design.</p>
                            <Zoom>
                                <Image src="/brewtifulIA.png" className="rounded-2xl" layout="intrinsic" width="1392" height="622" alt="My inital decision for the IA of the new site. Kept a fairly flat IA."   />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Initial sketches</h2>
                            <p className="text-base font-medium">I decided to take pen to paper again at this point and begin sketching some ideas. I wanted to get a rough idea of what may work and aimed to identify information that may or may not be needed on the pages.</p>
                            <p className="mb-16 text-base font-medium">The idea of quick scribbles like this allows me to perform multiple iterations in minimal time. It also helps begin the process of creating more of a brand identity.</p>
                            <Zoom>
                                <Image src="/initialSketchBrewtiful.png" className="rounded-2xl" layout="intrinsic" width="1000" height="1000" alt="I doodled quite a bit for this project, here is a sample of some of my ideas."   />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Brand identity</h2>
                            <p className="text-base font-medium">I decided to take pen to paper again at this point and begin sketching some ideas. I wanted to get a rough idea of what may work and aimed to identify information that may or may not be needed on the pages.</p>
                            <p className="mb-16 text-base font-medium">The idea of quick scribbles like this allows me to perform multiple iterations in minimal time. It also helps begin the process of creating more of a brand identity.</p>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Low fidelity mocks</h2>
                            <p className="text-base font-medium">I felt at this point that the project was at a good point. And although not a huge step I decided to grab my favourite of the previous sketches and reproduce them in an ever so slightly better version.</p>
                            <p className="mb-16 text-base font-medium">This new version of the mockups helped me further understand how the final page may look. A few tweaks added here and I am strting to be very happy with the design direction.</p>
                            <Zoom>
                                <img src="/lofiBeer.png" className="rounded-2xl" width="2000" height="1500" alt="Developing sketches into some very simple digital assets" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Prototyping</h2>
                            <p className="text-base font-medium">I followed a slightly alternate route to what I would usually. I decided to go ahead and create a few prototypes that I could then try and gather some feedback on.</p>
                            <p className="mb-16 text-base font-medium">At this point I wasnt sure how I would go about getting some testing completed, or gather feedback. I didnt want to rely on friends and collegaues due to the risk of bias opinion. I opted to try reddit... Not a conventional approach and arguably not much better than asking friends and family as I dont know the background of those that respond.</p>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Feedback</h2>
                            <p className="text-base font-medium">My approach of using reddit was not something I would usually do. It is not focused enough to gain true user insights and instead relies on the people commenting understanding the use case and having some design knowledge.</p>
                            <p className="mb-16 text-base font-medium">However, ignoring the above, the response from the unknown people reviewing my UI was positive. This was reassuring and also gave me some ideas for iterations.</p>
                            <Zoom>
                                <img src="/crit.png" className="rounded-2xl" width="1212" height="784" alt="Examples of replies and feedback from reddit"   />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Final mocks</h2>
                            <p className="mb-16 text-base font-medium">Armed with some feedback from the reddit community I decided to go ahead and make a few tweaks before settling on a design.</p>
                            <Zoom>
                                <img src="/brewtiful.png" className="rounded-2xl" width="1211" height="1567" alt="Brewtiful - The current hi-fidelity mocks"   />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Project reflection</h2>
                            <p className="mb-16 text-base font-medium">Being a personal project I am happy with where I have got to. I hope in the future to iterate on this further and maybe even take a dive into building this into a real life website.</p>
                            <p className="text-base font-medium">The design process required a bit more discipline than other projects I have worked on as I had to find time around my work and social life. I think if I embark on a similar project in the future I will make sure to plan time each week to focus solely on the idea.</p>
                            <br /><br /><br />
                            <Link href="/" className="self-start">
                            <button className="rounded-xl border border-gray-400 bg-white/95 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/75 hover:shadow-lg" type="button">
                Back to home page
                  </button>
                </Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BeerBlog