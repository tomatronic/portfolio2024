import Link from "next/link"
import Image from "next/image"
import React from "react"
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'

export async function generateMetadata() {
    return {
        title: "Prompt | Tom Spencer",
        description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

function Prompt() {
    return (
        <>
            <div className="relative min-h-screen">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="rounded-4xl bg-zinc-50 p-12">
                        <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-10">
                            <Image src="/Prompt-hero.png" width={1600} height={927} alt="Small mock of end product" />
                        </div>
                        <div className="mb-10 grid grid-cols-1 gap-15 md:grid-cols-4">
                            <div className="md:col-span-2">
                                <p className="text-sm font-semibold text-gray-600">Rakuten Advertising &bull; Jan 2025 - Ongoing</p>
                                <h1>Intelligent Search for Custom Reports — Natural Language Search & AI</h1>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-base font-medium">Advertisers on Rakuten Advertising's platform create custom reports monthly (sometimes weekly) to track campaign performance across 170+ metrics. Manually building these reports took 15-20 minutes of clicking through dropdowns, selecting date ranges, and configuring data points, this led to a frustrating experience. With 1,000+ active Advertisers and dozens of account managers creating reports regularly, the hours used quickly adds up, leading to potentially thousands of wasted hours and an added strain on the support team.</p>
                                <div className="text-gray-600 space-y-1">
                                    <p className="text-sm"><span className="font-normal">Role:</span> <span className="font-semibold">Sole UX designer</span></p>
                                    <p className="text-sm"><span className="font-normal">Skills:</span> <span className="font-semibold">UX/UI, User Research, Prototyping, User testing</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">

                            <div className="col-span-4 pb-10">
                                <h2 className="text-xl font-semibold tracking-tight">Challenge</h2>
                                <p className="mb-6 text-base font-medium">
                                    Natural language search features sound simple until you design one. The challenge wasn't just "add a text box", it was building trust in automation while preserving user control in an area where data accuracy is crucial. Users want to make decisions based on these reports, meaning any search generated content needs to be verifiable and editable.                      <br />
                                    I needed to solve for:
                                </p>
                                <ul className="space-y-3 mb-10">
                                    <li><b>Trust</b>: How will a user know that the search results accurately match the query, without expecting them to check against up to 170+ metrics?</li>
                                    <li><b>Ambiguity</b>: How do we handle queries that are vague and could mean one of the many data points available?</li>
                                    <li><b>Control vs. speed</b>: Power users want a quick way of performing time consuming tasks, new users want guidance, how can we offer both?</li>
                                    <li><b>Technical constraints</b>: The query parser struggled with specific metric names that can be bespoke to Rakuten Advertising, or even the user’s account, this required careful design around these considerations.</li>
                                    <li><b>Fallback</b>: Some users prefer manual control over search based automation. How can we ensure this option is still available to them?</li>
                                </ul>
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-10">                     
                                    <Image src="/Prompt-old2.png" width={1920} height={1142} alt="Small mock of end product" />                            
                                </div>                                
                                <h2 className=" text-xl font-semibold tracking-tight">Approach</h2>
                                <p className="mb-6 text-base font-medium">I started by analyzing existing reports to understand common patterns: What metrics did users combine? What date ranges mattered? What questions were they trying to answer? This informed the natural language query design. Instead of just free-form text, I included suggested questions to help a user get started and understand the mechanics of the input box. We also included a 'tag' system in a later iteration to help users find and include certain data points that were harder to remember.</p>
                                <h3 className="pt-6 text-lg font-semibold tracking-tight">Key decisions</h3>
                                <ul className="mb-6 space-y-3 text-base font-medium">
                                    <li><b>Tags/Tokens</b>: Users were able to include 'quick selected' tags to help direct a prompt better.</li>
                                    <li><b>Manual override</b>: Every search generated report could be edited, saved, scheduled for a future date or rebuilt from scratch</li>
                                    <li><b>Feedback</b>: Gathering feedback via Fullstory we were able to make further decisions in the UI and functionality to help continually improve the feature.</li>
                                    <li><b>Conservative defaults</b>: The system suggested safe, common queries rather than trying to be clever.</li>
                                </ul>
                                <p className="mb-16 text-base font-medium">I prototyped three interaction models and tested them with multiple users. The ability to select suggestions won over many participants and the addition of tags was identified as an extremely helpful approach to more complex report requirements.</p>
                                <h2 className="pt-16 text-xl font-semibold tracking-tight">Solution</h2>
                                <p className="mb-6 text-base font-medium">
                                    The final solution combined natural language prompts, structured tags, and suggested queries to give users both speed and control. Every search generated report remained fully editable, could be saved as a template, or rebuilt from scratch, this preserved the manual workflow for users who preferred it.                            </p>
                                <div className="mb-16 text-base font-medium">
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-10">
                                <Image src="/tags.png" width={2390} height={1206} alt="Competitor research - Investigating the craft beer and design review landscape" />
                                </div>
                        <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-10">
                        <Image src="/old.png" width={2390} height={1206} alt="Competitor research - Investigating the craft beer and design review landscape" />
                        </div>                                   
                                </div>
                                <div className="max-w-full">
                                    <h2 className="pt-16 text-xl font-semibold tracking-tight">Outcome</h2>
                                    <p className="mb-6 text-base font-medium">Closed beta launched in May 2025 with select power users, followed by a full open beta in July 2025 to all users. With this staggered approach it has allowed us to begin gathering adoption data and user feedback before the full release.</p>

                                    <p className="mb-6 text-base font-medium">Based on the initial few months of usage we have determined that we have reduced the report creation time by up to 90% (measured using Fullstory during the beta phase) This translates to around $10 million in annual time saving potential when fully adopted by all users (both internal account managers and external users).</p>

                                    <p className="mb-4 text-base font-medium">User feedback</p>

                                    <blockquote className="mb-4 text-base font-medium">"Super helpful to put in the prompts and get the reporting answers right away instead of having to sometimes pull a few different reports to get the answer." <cite>Account Manager</cite></blockquote>

                                    <blockquote className="mb-4 text-base font-medium">"When I needed to check week-on-week sales, Prompt made it easier and faster to generate the report, saving time and reducing manual effort." <cite>Account manager</cite></blockquote>

                                    <blockquote className="mb-4 text-base font-medium">"I was able to visualize best performing placement periods over time. I was able to add a 'lifetime value bounty' on top of RAD data. I was really impressed with that." <cite>Account manager</cite></blockquote>

                                    <blockquote className="mb-6 text-base font-medium">"I was able to visualize best performing placement periods over time. I was able to add a 'lifetime value bounty' on top of RAD data. I was really impressed with that." <cite>Account manager</cite></blockquote>
                                    <p className="mb-4 text-base font-medium">Behavioural changes observed</p>
                                    <ul className="mb-6 space-y-3 text-base font-medium">
                                        <li>Discovery driven reporting: "I figured out new and noteworthy products performing well in the program which I could share with publishers", this shows users are willing to ask questions they may not have bothered searching for manually.</li>
                                        <li>Reduced multireport workflows: Users may previously have needed to create or edit reports 3 or 4 times, AI is allowing them to get them in a single go.</li>
                                        <li>Power user adoption: The introduction of tags has helped create more advanced reports within the Prompt product.</li>
                                    </ul>
                                    <h2 className="pt-6 text-xl font-semibold tracking-tight">Learning from beta</h2>
                                    <p className="mb-6 text-base font-medium">
                                        Reviews and feedback have been positive and allowed us to continue to deliver updates and additional features. Some items of Prompt have not been as successful as we hoped, for example saving reports has not been used as much as expected, largely due to users finding it easy to recreate reports as needed. The suggested prompts have become a useful tool for new users, offering guidance into creating a first time prompt, we hope to expand this in the future to allow for personalised suggestions.</p>
                                    <p className="mb-6 text-base font-medium">What surprised me?: The request for tags/tokens was not expected, it became apparent that for more accuracy in data heavy UI we needed additional ways to control the search results.
                                    </p>
                                    <p className="mb-6 text-base font-medium">
                                        Seeing users explore the search possibilities was interesting and allowed us to observe users trying to create more complex reports through search that they may not have been confident in building manually.                                </p>

                                </div>
                                <h2 className="pt-16 text-xl font-semibold tracking-tight">What I learned</h2>
                                <p className="mb-6 text-base font-medium">Designing intelligent search features for consumer products is about trust, not magic. Users want help, not replacement. The ability for users to control the outcome of a report became crucial, the full text to report approach had to be revised to ensure a user could take control and understand that the report would be exactly what they wanted and that the data could be trusted.</p>
                                <p className="mb-6 text-base font-medium">The final outcome saw the creation of a hybrid interface. The expectation was that users would prefer a pure natural language search, but the tag system allowed more accurate control. When managing large amounts of data precision matters more than conversational ease. This insight applies to any data heavy product, precision matters more than conversational ease. Sometimes a smart autocomplete is better than a chatbot.</p>
                                <p className="mb-16 text-base font-medium">Speed without trust is worthless. Users could generate reports in 90 seconds, but if they didn't trust the results they would still verify manually. Defeating the purpose. The continuous previews and manual override options built the confidence needed to aid adoption.</p>

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
            </div>

        </>
    )
}

export default Prompt