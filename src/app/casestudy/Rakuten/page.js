import Link from "next/link"
import Image from "next/legacy/image"
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'

export async function generateMetadata() {
    return {
      title: "Rakuten Advertising Offer Flow | Tom Spencer",
      description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
      }
  }

function Offer() {
    return (
        <>
            <div className="mt-4">
                <div className="container mx-auto h-[70vh] max-w-screen-lg rounded-2xl bg-[url('/offerBG.png')] bg-cover">
                    <div className="mx-auto grid h-full max-w-screen-md place-items-center">
                        <div>
                            <Zoom>
                                <Image src="/offersFull.png" layout="intrinsic" width="1000" height="640" alt="Small mock of end product" priority={true} />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6 py-10">
                    <div className="text-3xl font-semibold tracking-tight">Offer management</div>
                    <p className="pt-2 text-sm font-medium uppercase">Rakuten Advertising &bull; June 2021 - August 2021</p>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-3">
                            <p>Rakuten Advertising offers a way for users to communicate using a variety of dashboards depending on their needs. These communications allow users to create and manage affiliate marketing across a range of mediums.</p>
                            <p>The current dashboard is outdated and in need of a major revamp.</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-sm font-medium uppercase">Role</p>
                            <p> Sole UX designer</p><br/>
                            <p className="text-sm font-medium uppercase">Skills used</p>
                            <p>UX/UI, Research, Prototyping, User testing</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mb-16 grid max-w-screen-md overflow-hidden rounded-2xl border bg-white shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]">
                    <div className="m-6 grid gap-2">
                        <h2 className="text-xl font-semibold tracking-tight text-gray-700">Problem</h2>
                        <p className="m-0 text-gray-700">Managing offers is a cumbersome task, it involves multiple pages and unclear terminology that deters users from exploring options. The dashboard has also been neglected for many years and is in need of a UI overhaul.</p>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-4 grid gap-16 pb-10">
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Solution</h2>
                                <p>Redesign how publishers manage affiliate based offers within the Rakuten Advertising dashboard and increase usage of the platform. This will provide a larger ROI for both Rakuten Advertising and the Publisher.</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Discovery</h2>
                                <p>The key to any project is to ensure a thorough discovery process.</p>
                                <p>To understand the problem I first reviewed the current platform and flows associated with the management of offers. I mapped out the flow within Miro using screenshots from the legacy dashboard. This ensured I had a full understanding of how the feature was already working and gain some inital insight into where improvements could be made.</p>
                                <p>However, I will not jump to conclusions without gaining input from the user.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/legacy1.png" className="rounded-2xl" layout="intrinsic" width="1952" height="1200" alt="The legacy dashboard offer invitation screen" />
                                </Zoom>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Gaining insight</h2>
                                <p>I went ahead and captured some qualitative data. To do this I created a small survey within a google form (click the image to view) to distribute amongst the account management teams to help gather a better understanding of how they interacted with this feature, it was also a chance for me to understand known pain points that the team have been presented with. The reason I chose the account managers was due to the level of exposure they have to both the platform and the end users.</p>
                                <p>Once I had a pool of data collated I created an affinity diagram to help group the results I had received, this helped me to identify and prioritise points in the next step of the process. I also followed up with some of the participants to further discuss their inputs and gather additional feedback. I feel this additional step is important, not only will it ensure that the survey answers are fully understood, it creates an additional layer of empathy to help understand the goal of the project.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/affinitymap.jpg" className="rounded-2xl" layout="intrinsic" width="1386" height="721" alt="The affinity map was created to help understand the results from the completed user surveys" />
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto grid max-w-screen-md overflow-hidden rounded-2xl border bg-white shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]">
                    <div className="m-6 grid gap-2 text-gray-700">
                        <h2 className="text-xl font-semibold tracking-tight">Goals</h2>
                        <p>Using survey data I was able to identify three main goals to focus on:</p>
                        <p><b>Comparison</b><br />If I am presented with a new offer invitation I want to be able to compare it to my current offer.</p>
                        <p><b>Discovery</b><br />There was no consistant answer to how a user would find a new offer invitation. Can I make a consistant point of discovery?</p>
                        <p><b>Partnership status</b><br />The current UI does not offer any indication of partnership status. A user wants to know if a partnership already exists.</p>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-4 grid gap-16 pb-10">
                            <div>
                                <h2 className="pt-16 text-xl font-semibold tracking-tight">Planning</h2>
                                <p>With my new knowledge I could start planning my next steps. I begun with creating a simple flowchart to illustrate the possible routes a user would take in order to accept a new offer request. I ensured to liaise with several members of user facing teams to make sure nothing was missed out and that flows made sense.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/flowchart.png" className="rounded-2xl" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                                </Zoom>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Sketching</h2>
                                <p>Once happy with the flow I opened my notepad and began sketching some initial ideas. At this stage I scribble a lot of ideas down both illustrated and in note form, it can look like a mess but I find it helps to get all my initial ideas on paper and then quickly eliminate ideas or come back to them at a later date if needed. As I develop an idea I start to sketch it into something of higher quality to allow me to easily translate it to a digital wireframe when the time comes.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/sketches.png" className="rounded-2xl" layout="intrinsic" width="1116" height="766" alt="Initial sketches and ideas - A bit messy but helps me gather thoughts" />
                                </Zoom>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Prototypes</h2>
                                <p>In order to validate my ideas I proceeded to complete a round of simple user testing. Rather than exposing my test candidates to my sketches I went ahead and created simple wireframes within Sketch that I could share and gather initial feedback with. I used to Zoom to conduct interviews with the candidates and got them to complete a set of simple tasks. This first round of testing allowed me to identify that the users were wanting a dedicated landing page for offer invitations alongside the proposed notification based system.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/digitalwireframe.png" className="rounded-2xl" layout="intrinsic" width="1116" height="766" alt="Simple flowchart of a proposed solution" />
                                </Zoom>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Flow iteration</h2>
                                <p>I continued to slowly increase the complexity of my mocks, allowing the user to gain more understanding of the goal driven outcome. Once the mockups reached a certain point I began mapping them into a map of hotspots within Sketch to allow the creation of an interactive prototype. This prototype creates a more linear flow but enables a test candidate to become much more immersed in the test and provide a greater level of feedback.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/prototypeMap.png" className="rounded-2xl" layout="intrinsic" width="1403" height="931" alt="An example of the complex web of interactions created to allow for testing of the prototype" />
                                </Zoom>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">User testing</h2>
                                <p>After performing a number of protoype testing sessions I was able to identify a couple of further design adjustments that were required. This involved a round of iterations to ensure functionality was highlighted in a relevant way and that offers were made easier to compare.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/usertestingOffers.png" className="rounded-2xl" layout="intrinsic" width="1849" height="900" alt="An example of the complex web of interactions created to allow for testing of the prototype with external users" />
                                </Zoom>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold tracking-tight">Outcome</h2>
                                <p>Since the updated offer management flow and UI have been implemented we have seen a reduction in the amount of support tickets raised, and account managers have reported less queries based around offer management. The account management have said that this reduction in queries has led to them having more time to focus on the users needs and build better relationships with them.</p>
                                <p>Since being released I continue to monitor usage through the FullStory application, allowing me to perform iterative design amends to ensure a continual progression to the applications development.</p>
                            </div>
                            <div>
                                <Zoom>
                                    <Image src="/after.png" className="rounded-2xl" layout="intrinsic" width="2435" height="1544" alt="The final offer invitation screen" />
                                </Zoom>
                            </div>
                            <div>
                            <Link href="/" className="self-start">
                <button className="rounded-xl border border-gray-400 bg-white/95 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/75 hover:shadow-lg" type="button">
                Back to home page
                  </button>
                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer