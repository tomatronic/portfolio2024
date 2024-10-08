import Link from "next/link"
import Image from "next/image"
import Zoom from "react-medium-image-zoom"


function CaseStudy() {
    return (
        <>

            <div className="mt-16">
                <div className="container relative mx-auto h-[70vh] max-w-screen-lg rounded-2xl bg-[url('/dfbg.png')] bg-cover">
                    <div className="mx-auto flex h-fit flex-row flex-wrap place-content-center content-center">
                        <div className="flex flex-col">
                                <Image src="/tools.png" layout="fill" alt="Small mock of end product" className="object-cover" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6 py-10">
                    <div className="text-3xl font-semibold tracking-tight text-gray-700">Designflows</div>
                    <p className="pt-4 text-sm font-medium uppercase text-gray-600">Homely &bull; 8 Oct 2021 7p.m. - 11 Oct 2021 9a.m.</p>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="mb-10 grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-3">
                            <p>This was a competion brief that had to be completed in weekend.</p>
                            <p>I received access to the brief at 7pm Friday night and had to submit my high fidelity mocks by Monday at 9am.</p>
                        </div>
                        <div className="col-span-1">
                            <p><b>Role:</b><br /> Sole UX designer</p>
                            <p><b>Skills used:</b><br /> UX/UI<br />User Research<br />App icon design</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container mx-auto max-w-screen-md px-6">
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">

                            <div className="col-span-4 mt-16 py-10">
                                <center>
                                <Zoom>
                                    <Image src="/designflows.png" layout="intrinsic" width="197" height="107" alt="Designflows 2021 logo" />
                                </Zoom>
                                </center>
                                <h2 className="pt-16 text-xl font-semibold tracking-tight text-gray-700">Overview</h2>
                                <p>The brief requested a new mobile app to be designed to allow a user to hire a toolkit from a location nearby for a specific DIY task.</p>
                                <p>For example I may need to put some shelves up, I would visit this app and find a location to pick up a toolkit containing the required tools.</p>
                                <p>The brief specified 3 specific pages that required designing:</p>
                                <p>&bull; <b>Toolkit rental</b> - This had to include a search bar<br />
                                    &bull; <b>My rentals</b> - Manage and track bookings<br />
                                    &bull; <b>How it works</b> - Instructions on how to collect a toolkit</p>
                                <p className="mb-16">As well as an app icon and a poster that would present the screens.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">

                        <div className="col-span-4 mt-16 py-10">
                            <h2 className="text-xl font-semibold tracking-tight text-gray-700">Plan of action</h2>
                            <p>This project was going to be a lot of work, and there was not much time to do it. I decided to spend the friday evening reading through the brief multiple times, I printed the document off and highlighted key points.</p>
                            <p className="mb-16">Once happy I understood what was being asked for I began making a to do list. This would help me work methodically and would make sure I covered everything required of me during this weekend.</p>
                            <Zoom>
                                <Image src="/poa.png" layout="intrinsic" width="944" height="944" alt="It was important for me to make a to do list to help ensure I stayed on track." />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight text-gray-700">Competitor research</h2>
                            <p>Due to the time constraints I had to take a slightly different approach to what I am used to. The research phase is the most important part of the project, it helps ensure that my understanding is as good as it can be.</p>
                            <p>I decided the best approach to the research phase of this particular project would be to look at what could be considered a competitor businesses. I begun by looking at large DIY style companies, IKEA, B&amp;Q etc. I then considered businesses that primarily offer a hire service, for example Uber. I then went even further and looked at companies that offered collection and delivery services such as Deliveroo. These companies and there apps helped me to build a better understanding of the current market, the common UI elements and where I may be able to make improvements.</p>
                            <Zoom>
                                <Image src="/compResearch.png" layout="intrinsic" width="2000" height="944" alt="Identifying key components in competitor / similar applications allowed me to begun gathering a list of potential components that would be needed." />
                            </Zoom>
                            </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container mx-auto max-w-screen-md px-6">
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">

                            <div className="col-span-4 py-16">
                            <h2 className="text-xl font-semibold tracking-tight text-gray-700">Brand identity</h2>
                            <p>I decided to spend some time inventing a brand identiy for this project. It meant I was able to create a simple pattern library that I could then deploy much quicker into the final design.</p>
                            <p className="mb-16">I mainly focused on the colour palette and typography. I settled on something that was fairly simple but offered a level of uniqueness.</p>
                            <Zoom>
                                <Image src="/brandID.png" layout="intrinsic" width="2000" height="1040" alt="Identifying key components in competitor / similar applications allowed me to begun gathering a list of potential components that would be needed." />
                            </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">

                        <div className="col-span-4 mt-16 pb-10">
                            <h2 className="text-xl font-semibold tracking-tight text-gray-700">Initial ideas</h2>
                            <p>Now I had a basic pattern library I decided to start sketching out some ideas for my app.</p>
                            <p>I had a lot of ideas at this stage and ended up working out a full user flow, even though I would only be working on a couple of screens, this likely cost me some time, but it meant I identified some extra details I could use to enhance the app.</p>
                            <p>I begun with some really rough sketches that I could then iterate on if I felt they had enough potential. This allowed me to complete a lot more sketches in a much shorter amount of time.</p>
                            <p className="mb-16">By Saturday evening I was confident that I had created a sketch that I could work with. I decided to take a break at this point until the next day.</p>
                            <div className="pb-16">
                                <Zoom>
                                    <Image src="/sketch.png" layout="intrinsic" width="1421" height="1000" className="rounded-2xl" alt="An example of sketches completed for the first screen of the app" />
                                </Zoom>
                            </div>
                            <div className="max-w-full rounded-2xl bg-yellow-500 p-10">
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">Mockups</h2>
                                <p>Sunday morning I decided to get an early start, I spent a large chunk of the day working on the hi-fidelity mock ups for the required screens. Even though I wasnt completing a full app I wanted to make sure that it could be added to in the future easily and still make sense.</p>
                                <Zoom>
                                    <Image src="/appMocks.png" layout="intrinsic" width="1365" height="879" alt="Preview of how the app mocks were looking" />
                                </Zoom>
                            </div>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight text-gray-700">App icon</h2>
                            <p>The last major part of the project to complete on sunday afternoon was the app icon. This was an area of the project I struggled with. I have not had to design an app icon before which meant there was a bit of learning curve.</p>
                            <p>The initial step here was to make sure I was working to correct dimensions. I then spent some time understanding what was needed to create an app icon that stands out.</p>
                            <p className="mb-16">I spent a lot of effort and made many iterations to icon. I ended up settling on a simple icon that used the colour palette from the app to ensure a consistant experience.</p>
                            <Zoom>
                                <Image src="/iconexploration.png" layout="intrinsic" width="2000" height="646" alt="Examples of the many icon ideas I explored" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight text-gray-700">Icon Decision</h2>
                            <p className="mb-16">After running through many iterations of the icon I settled on this. The reason for my choice was as follows:<br /><br />
                                &bull; <b>Unique</b> - I felt some of my ideas had similarities with other large brands, I wanted something that was unique to this project to help with its identity.<br /><br />
                                &bull; <b>Negative space</b> - I enjoyed playing with the idea of a house in the negative space to help show what the app is about, the negative space could also be seen as an upwards arrow helping to show that the app offers assistance with 'upgrading' your home.<br /><br />
                                &bull; <b>Simplicity</b> - This icon uses a minimal amount of colour and iconography which I feels gives a clean and simplistic icon.
                            </p>
                            <Zoom>
                                <Image src="/appStoreMock.png" layout="intrinsic" width="1024" height="1757" alt="Final icon design" />
                            </Zoom>
                            </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container mx-auto max-w-screen-md px-6">
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">

                            <div className="col-span-4 py-16">
                            <h2 className="text-xl font-semibold tracking-tight text-gray-700">Outcome</h2>
                            <p>Overall I am happy with the result. However, I wish I had more time to perfect this.</p>
                            <p className="mb-16">The initial area I would have spent more time on would have been the research phase, I would have liked to have gained a better understanding of the competitor landscape. The addition of user interviews would have also assisted in the research and the end result. I also think I could of come up with a more refined color palette and framework for the project, but this may of been a stretch to achieve given the time constraint.</p>
                            <div className="overflow-hidden rounded-3xl">
                            <Zoom>
                                <Image src="/dfFinal.png" layout="intrinsic" width="1403" height="931" className="rounded-2xl" alt="Designflows final submission 2021" />
                            </Zoom>
                            </div>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight text-gray-700">Final thoughts</h2>
                            <p>The competition was fun, and I will be looking out for the event again later this year. However, in the meantime I will take the judges feedback onboard and possibly revisit this project at a later date to try and improve the final result.</p>
                            <br/><br/><br/>
                            <Link href="/">
                                <div className="inline-flex pb-4 pt-10">
                                    <div className="from-rose-400 via-fuchsia-500 to-indigo-500 tracking-tight text-indigo-600 hover:bg-gradient-to-tr hover:bg-clip-text hover:text-transparent hover:ease-in-out">
                                        <p>Back to home page</p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>                

            </div>
        </>
    )
}

export default CaseStudy
