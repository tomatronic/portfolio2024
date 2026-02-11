import Link from "next/link"
import Image from "next/image"
import React from "react"
import 'react-medium-image-zoom/dist/styles.css'

export async function generateMetadata() {
    return {
        title: "Affiliate Conversion Journey | Tom Spencer",
        description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

function Prompt() {
    return (
        <>
            <div className="fixed inset-0 -z-10 bg-purple-100"></div>
            <div className="relative min-h-screen">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="rounded-4xl bg-zinc-50 p-12">
                    <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-10">                             
                            <Image src="/ACJ-hero.png" width={1600} height={927} alt="Small mock of end product" />                            
                        </div>
                        <div className="mb-10 grid grid-cols-1 gap-15 md:grid-cols-4">
                            <div className="md:col-span-2">
                                <p className="text-sm font-semibold text-gray-600">Rakuten Advertising &bull; Jan 2025 - Ongoing</p>
                                <h1><span className="text-gray-600 ">Affiliate Conversion Journey</span> — Multi-Touch Attribution for Affiliate</h1>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-base font-medium">Publishers and advertisers on Rakuten's affiliate network needed to understand their contribution to sales beyond last-click attribution. When a customer discovers a product through Publisher A's blog, researches it via Publisher B's review site, then purchases after clicking Publisher C's discount link, who deserves credit?</p>
                                <p className="text-base font-medium">Without this visibility, publishers couldn't prove their value in earlier phases of the funnels, and advertisers couldn't optimize their partnerships. Competitors like CJ Affiliate and Impact offered journey tracking, putting Rakuten at a strategic disadvantage.</p>
                                
                                <div className="text-gray-600 space-y-1">
                                    <p className="text-sm"><span className="font-normal">Role:</span> <span className="font-semibold">Sole UX designer</span></p>
                                    <p className="text-sm"><span className="font-normal">Skills:</span> <span className="font-semibold">UX/UI, User Research, Prototyping, User testing</span></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                            <div className="col-span-4 pb-10">
                                <h2 className="text-xl font-semibold tracking-tight pb-4">Challenge</h2>
                                <ul className="space-y-3">
                                    <li><b>Data complexity</b>: A single customer journey could have up to 15 touchpoints across 30 days. Multiply that by thousands of conversions, and you have overlapping, non-linear paths that are nearly impossible to parse visually.</li>
                                    <li><b>Dual audiences</b>: Publishers needed to see "Where do I contribute?", Advertisers needed "Which publishers work together to drive conversions?". Same data, different questions and mental models.</li>
                                    <li><b>Trust</b>: Users needed confidence to make budget decisions, which meant explaining the complex attribution logic without overwhelming them.</li>
                                </ul>                                
                                <h2 className="pt-12 text-xl font-semibold tracking-tight pb-4">Approach</h2>
                                <p className="text-base font-medium">Through interviews with both internal account managers and external users, I learned taht users wanted answers to specific questions with the ability to dig deeper when needed, not open ended data exploration.</p>
                                
                                <p className="text-base font-medium"><b>Key insight</b>: Start with answers, allow exploration.</p>
                                <h3 className="pt-6 text-lg font-semibold tracking-tight pb-4">Key design decisions</h3>
                                <ul className="space-y-4 text-base font-medium">
                                    <li><b>Three-phase framework (Awareness → Consideration → Conversion)</b>: Rather than showing raw click sequences, I organised journeys based around purchase phases. This created a mental model: "Am I/a Publisher driving discovery, research, or final purchase?"
                                        This framework solved two critical problems:
                                        It simplified multi-touch attribution into digestible stages
                                        It gave publishers language to prove their value beyond last-click: “I am strong in awareness” becomes a selling point, not a liability
                                        Other frameworks considered (first/middle/last click, paid/organic/direct channels) didn't align as well with the awareness/consideration/conversion model, which aligned best with how marketers already think about funnels.
                                    </li>                                    
                                    <li><b>Two-tab structure Contributions vs. Touchpoints</b>: Contributions tab: High-level summary ("You contributed to 45% of conversions in the awareness phase")
                                        Touchpoints tab: Detailed journey paths for users who wanted to dig deeper
                                    </li>                                    
                                    <li><b>Dual-audience design</b>: Publishers see their own contribution. Advertisers see all publishers in each journey. Same data structure, different views. The core visualisation is adapted to work for both user types, without increasing engineering efforts.</li>
                                </ul>
                                <h2 className="pt-12 text-xl font-semibold tracking-tight pb-4">Solution</h2>
                                <div className="space-y-6 text-base font-medium">
                                <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-8"> 
                                        <Image src="/ACJ-activity-summary.png" width={1000} height={774} alt="Users first see an activity summary with total clicks across phases, average clicks to conversion, and their baseline contribution footprint—providing context before diving into detailed journeys." />
                                    </div>
                                    <p>The Activity Summary presents raw data up front, total clicks, across phases, average clicks to conversion and baseline contributions. It allows users to quickly understand perforb before diving into complex journeys.</p>
                                    <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-8"> 
                                        <Image src="/ACJ-contributions.png" width={1000} height={774} alt="The Contributions tab breaks down publisher involvement across awareness, consideration, and conversion phases—giving users clear language to discuss their value beyond last-click attribution." />
                                    </div>
                                    <p>The three-phase framework transformed abstract click sequences into a clear narrative. Publishers could now say "I drive 40% of awareness conversions" instead of struggling to explain their role. Advertisers could identify which publishers were performing well at different stages of the journey.</p>
                                    <p>For deeper analyses the Touchpoints tab revealed detailed conversion paths, presenting which sequences benefitted them most.</p>
                                    <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-8"> 
                                        <Image src="/ACJ-filter-selected.png" width={1000} height={774} alt="Users could adjust order period and lookback window to see how attribution changed—with smart defaults (30-day lookback, month-to-date) and inline helper text preventing confusion." />
                                    </div>
                                    <p>The default filters prevented cognitive overload while still giving users control. As users updated filter choices the report updates seamlessly.</p>
                                    <div className="flex flex-row flex-wrap place-content-center content-center bg-purple-100 rounded-2xl mb-8">                             
                            <Image src="/ACJ-comparison.png" width={1600} height={927} alt="Small mock of end product" />                            
                        </div>
                                    <p><b>Dual-audience view</b>: Rather than building two separate tools, one core visualization adapted based on user type. Publishers filtered by their own SIDs and saw "you" language. Advertisers filtered by campaign or publisher group and saw top contributors. Same data structure, different views, serving both audiences without doubling engineering effort.</p>
                                </div>                                
                                <div className="max-w-full">
                                    <h2 className="text-xl font-semibold tracking-tight text-gray-700 pb-4">Outcome</h2>
                                    <div className="space-y-4 text-base font-medium text-gray-700">
                                        <p> &bull; 8-month development from concept to production (October 2022 - June 2023) <br/>
                                            &bull; Sole designer on a cross-functional team<br/>
                                            &bull; Launched to all eligible publishers and advertisers</p>
                                        <p><b>Impact</b><br />
                                            &bull; 35 daily active users exploring multi-touch attribution<br/>
                                            &bull; Used in sales pitches as a key differentiator against competitors<br/>
                                            &bull; Became standard part of the platform's analytics offering</p>
                                        <div>
                                            <p><b>What this enabled</b></p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Proved value beyond last-click (e.g., “I drive 40% of awareness-phase conversions”).</li>
                                                <li>Created new sales narratives when pitching to advertisers.</li>
                                                <li>Enabled data-backed conversations about their role in the funnel.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p><b>What this enabled for advertisers:</b></p>
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Understood which publisher combinations drive the best results.</li>
                                                <li>Optimized partner mix based on full-funnel contribution.</li>
                                                <li>More informed budget allocation decisions across awareness, consideration, and conversion</li>
                                            </ul>
                                        </div>
                                        <p>Users engaged more with high-level summaries detailed paths. They wanted answers to specific questionsor not open-ended data exploration. This reinforced thateffective data visualisation guides users toward specific insights rather than overwhelming them with raw information.</p>
                                    </div>
                                </div>
                                <h2 className="pt-12 text-xl font-semibold tracking-tight pb-4">What I learned</h2>
                                <p className="text-base font-medium">Complex data visualization isn't about showing everything, it's about progressive disclosure. The dual-audience challenge taught me that the same data can serve different needs with thoughtful filtering and presentation.</p>
                                <p className="text-base font-medium">This project reinforced that trust comes from transparency, not simplification. Users were willing to engage with complexity when the logic was clearly explained, building confidence in the data and insights being shown.</p>
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
