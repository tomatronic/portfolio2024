import Image from "next/image"
import OtherCaseStudies from "../../components/OtherCaseStudies"

export async function generateMetadata() {
    return {
      title: "Rakuten Advertising Offer Flow | Tom Spencer",
      description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
      }
  }

function Offer() {
    return (
        <>
            <div className="relative min-h-screen">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="rounded-4xl bg-zinc-50 p-8 md:p-12 dark:bg-slate-900">

                        {/* Hero section */}
                        <div className="relative h-[55vh] overflow-hidden rounded-2xl mb-8 bg-[url('/offerBG.png')] bg-cover">
                            <div className="flex h-full items-center justify-center">
                                <Image src="/offersFull.png" width={1000} height={640} alt="Redesigned Rakuten Advertising offer management dashboard showing the full offer invitation and comparison interface" />
                            </div>
                        </div>

                        {/* Title grid */}
                        <div className="mb-12 grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-4">
                            <div className="md:col-span-2">
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Rakuten Advertising &bull; June 2021 &ndash; August 2021</p>
                                <h1>Offer management</h1>
                            </div>
                            <div className="md:col-span-2">
                                <p>Rakuten Advertising offers a way for users to communicate using a variety of dashboards depending on their needs. These communications allow users to create and manage affiliate marketing across a range of mediums.</p>
                                <p>The current dashboard is outdated and in need of a major revamp.</p>
                                <div className="text-gray-600 dark:text-gray-400 space-y-1">
                                    <p className="text-sm"><span className="font-normal">Role:</span> <span className="font-semibold">Sole UX designer</span></p>
                                    <p className="text-sm"><span className="font-normal">Skills:</span> <span className="font-semibold">UX/UI, Research, Prototyping, User testing</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                            <div className="col-span-4 mb-12">

                                {/* Challenge / Problem */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Challenge / Problem</h2>
                                <p>Managing offers is a cumbersome task, it involves multiple pages and unclear terminology that deters users from exploring options. The dashboard has also been neglected for many years and is in need of a UI overhaul.</p>

                                {/* Approach */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Approach</h2>
                                <h3 className="pt-10">Discovery</h3>
                                <p>The key to any project is to ensure a thorough discovery process.</p>
                                <p>To understand the problem I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some initial insight into where improvements could be made.</p>
                                <p>However, I will not jump to conclusions without gaining input from the user.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/legacy1.png" className="rounded-2xl" width={1952} height={1200} alt="The legacy dashboard offer invitation screen" />
                                </div>
                                <h3 className="pt-10">Gaining insight</h3>
                                <p>I went ahead and captured some qualitative data. To do this I created a small survey within a google form (click the image to view) to distribute amongst the account management teams to help gather a better understanding of how they interacted with this feature, it was also a chance for me to understand known pain points that the team have been presented with. The reason I chose the account managers was due to the level of exposure they have to both the platform and the end users.</p>
                                <p>Once I had a pool of data collated I created an affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process. I also followed up with some of the participants to further discuss their inputs and gather additional feedback. I feel this additional step is important, not only will it ensure that the survey answers are fully understood, it creates an additional layer of empathy to help understand the goal of the project.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/affinitymap.jpg" className="rounded-2xl" width={1386} height={721} alt="The affinity map was created to help understand the results from the completed user surveys" />
                                </div>

                                {/* Goals */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Goals</h2>
                                <p>Using survey data I was able to identify three main goals to focus on:</p>
                                <p><b>Comparison</b><br />If I am presented with a new offer invitation I want to be able to compare it to my current offer.</p>
                                <p><b>Discovery</b><br />There was no consistent answer to how a user would find a new offer invitation. Can I make a consistent point of discovery?</p>
                                <p><b>Partnership status</b><br />The current UI does not offer any indication of partnership status. A user wants to know if a partnership already exists.</p>

                                {/* Solution */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Solution</h2>
                                <p>Redesign how publishers manage affiliate based offers within the Rakuten Advertising dashboard and increase usage of the platform. This will provide a larger ROI for both Rakuten Advertising and the Publisher.</p>

                                {/* Planning */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Planning</h2>
                                <p>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/flowchart.png" className="rounded-2xl" width={1116} height={766} alt="Simple flowchart of a proposed solution" />
                                </div>

                                {/* Sketching */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Sketching</h2>
                                <p>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my initial ideas on paper and then quickly eliminate ideas or come back to them at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/sketches.png" className="rounded-2xl" width={1116} height={766} alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                                </div>

                                {/* Prototypes */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Prototypes</h2>
                                <p>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my sketches I went ahead and created simple wireframes within Sketch that I could share and gather initial feedback with. I used Zoom to conduct interviews with the candidates and got them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/digitalwireframe.png" className="rounded-2xl" width={1116} height={766} alt="Simple flowchart of a proposed solution" />
                                </div>
                                <p>I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reached a certain point I began mapping them into a map of hotspots within Sketch to allow the creation of an interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide a greater level of feedback.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/prototypeMap.png" className="rounded-2xl" width={1403} height={931} alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                                </div>

                                {/* User testing */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">User testing</h2>
                                <p>After performing a number of prototype testing sessions I was able to identify a couple of further design adjustments that were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/usertestingOffers.png" className="rounded-2xl" width={1849} height={900} alt="An example of the complex web of interactions created to allow for testing of the prototype with external users" />
                                </div>

                                {/* Outcome */}
                                <h2 className="pt-10 text-xl tracking-tight mb-12">Outcome</h2>
                                <p>Since the updated offer management flow and UI have been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                                <p>Since being released I continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 dark:bg-purple-950/40 rounded-2xl mb-8">
                                    <Image src="/after.png" className="rounded-2xl" width={2435} height={1544} alt="The final offer invitation screen" />
                                </div>

                                <OtherCaseStudies currentHref="/casestudy/Rakuten" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer
