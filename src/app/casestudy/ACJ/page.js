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
                                <h1>Affiliate Conversion Journey — Multi-Touch Attribution for Affiliate</h1>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-base font-medium">Users on Rakuten's affiliate network wanted to understand their true contribution to sales, not just last-click attribution. When a customer discovers a product through publisher A's blog, researches it via publisher B's review site, then purchases after clicking publisher C's discount link, <b>who deserves credit?</b></p>
                                <p className="text-base font-medium">Without this visibility, publishers couldn't prove their value, and advertisers couldn't optimise their partner mix. Competitors (think CJ Affiliate and Impact) offered journey tracking, putting Rakuten Advertising at a strategic disadvantage. Rakuten Advertising needed to build a full-funnel attribution tool that showed multi-touch journeys across different phases.</p>
                                
                                <div className="text-gray-600 space-y-1">
                                    <p className="text-sm"><span className="font-normal">Role:</span> <span className="font-semibold">Sole UX designer</span></p>
                                    <p className="text-sm"><span className="font-normal">Skills:</span> <span className="font-semibold">UX/UI, User Research, Prototyping, User testing</span></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                            <div className="col-span-4 pb-10">
                                <h2 className="text-xl font-semibold tracking-tight">Challenge</h2>
                                <p className="mb-16 text-base font-medium">This was one of the most complex visualisation challenges I've faced. I needed to design a tool that was accurate enough for budgeting decisions and flexible enough for different use cases despite the data complexity:</p>
                                <ul className="space-y-3">
                                    <li><b>Data complexity</b>: A single customer journey could have up to 15 touchpoints across 30 days. Multiply that by thousands of conversions, and you have overlapping, non-linear paths that are nearly impossible to parse visually. How do you show patterns without scribbling lines everywhere?</li>
                                    <li><b>Dual audiences</b>: Publishers needed to see "Where do I contribute in the funnel?" Advertisers needed to see "Which publishers work together to drive conversions?". Same data, different questions and mental models.</li>
                                    <li><b>Variable timeframes</b>: Users needed the ability to adjust lookback windows (1 - 30 days) and see how attribution changed, this meant the same journey could be seen differently depending on the filters chosen. How do we allow flexibility while ensuring the data is trustworthy?</li>
                                    <li><b>Edge cases</b>: How do you handle overlapping purchases by the same customer? Missing tracking data? Single-click conversions? Complex counting logic where one click could be attributed to multiple orders?</li>
                                    <li><b>Trust</b>: Users needed to trust the data enough to make budget decisions, which meant explaining the complex attribution logic without overwhelming them.</li>
                                </ul>                                
                                <h2 className="pt-16 text-xl font-semibold tracking-tight">Approach</h2>
                                <p className="text-base font-medium">I started by analysing our competitors (CJ affiliate and Impact) and also other top tier companies (Google analytics and mixpanel) providing journey visualisation. I noted what worked (clear aggregation, progressive disclosure) and what failed (showing too much at once, no actionable guidance).</p>
                                <p className="text-base font-medium">Through interviews with both internal (8 account managers) and external users, I learned:</p>
                                <ul className="space-y-3 text-base font-medium pb-4">
                                    <li>Publishers didn't want to see <i>every</i> journey, they wanted to see their contribution patterns and understand what this meant.</li>
                                    <li>Advertisers wanted to identify "Which publishers work well together?" not just "Who gets last-click?"</li>
                                    <li>Both groups needed the data explained, not just displayed.</li>
                                </ul>
                                <p className="text-base font-medium"><b>The key insight</b>: Users wanted answers to specific questions, with the ability to dig deeper when needed. This shaped my entire approach: start with answers, allow exploration.</p>
                                <h3 className="pt-6 text-lg font-semibold tracking-tight">Key design decisions</h3>
                                <ul className="space-y-4 text-base font-medium">
                                    <li><b>Three-phase framework (Awareness → Consideration → Conversion)</b>: Rather than showing raw click sequences, I organised journeys based around purchase phases. This created a mental model: "Am I/a Publisher driving discovery, research, or final purchase?"
                                        This framework solved two critical problems:
                                        It simplified multi-touch attribution into digestible stages
                                        It gave publishers language to prove their value beyond last-click: “I am strong in awareness” becomes a selling point, not a liability
                                        Other frameworks considered (first/middle/last click, paid/organic/direct channels) didn't align as well with the awareness/consideration/conversion model, which aligned best with how marketers already think about funnels.
                                    </li>
                                    <li><b>Two-tab structure: Contributions vs. Touchpoints</b>: Contributions tab: High-level summary ("You contributed to 45% of conversions in the awareness phase")
                                        Touchpoints tab: Detailed journey paths for users who wanted to dig deeper
                                        This progressive disclosure kept the interface scannable while allowing power users to drill down.
                                    </li>
                                    <li><b>Activity summary</b>: Instead of starting with complex paths, users first see:
                                        Total clicks across phases
                                        Average clicks to conversion
                                        Their baseline contribution footprint
                                        This gives context before diving into individual journeys.
                                    </li>
                                    <li><b>Flexible filtering without cognitive overload</b>: Users can adjust order period and lookback window. The 30-day lookback default balances comprehensiveness with clarity.</li>
                                    <li><b>Handling the 'overlapping journeys' problem</b>: This was the trickiest UX challenge. When the same customer makes multiple purchases, clicks from earlier journeys count toward later ones. Technically, this is accurate, but in practice it is confusing.

                                        I considered 3 approaches:
                                        a) Hide this complexity (users would likely notice inconsistencies leading to increased pressure on the support teams and Account managers)
                                        b) Show adjusted numbers in the UI (Too complicated to explain inline)
                                        c) Explain it in the help center with clear examples (this was the chosen method)
                                        Rather than trying to solve this entirely in the UI, I worked with the support team to create clear help documentation with concrete examples that explained the logic.
                                    </li>
                                    <li><b>Dual-audience design</b>: Publishers see their own contribution. Advertisers see all publishers in the journey. Same data structure, different views. I designed the core visualisation to work for both, then customised the filtering and copy for each user type.</li>
                                </ul>
                                <h3 className="pt-10 text-lg font-semibold tracking-tight">Prototyping & testing</h3>
                                <p className="text-base font-medium">I built interactive prototypes and tested with users to understand if the UI worked and provided users with the narrative they could learn from.</p>
                                <p className="text-base font-medium">In the first round of testing we found our timelines were a little complicated and opted to use an alternate UI in order to imply direction for the journey being viewed, this better represented the story being told and helped ensure accuracy in representation.</p>

                                <h2 className="pt-16 text-xl font-semibold tracking-tight">Solution</h2>
                                <p className="text-base font-medium">The final solution used progressive disclosure to help guide users from high level insights to more detailed exploration. A three phased framework helped make attribution data much more digestible.</p>
                                <div className="space-y-6 text-base font-medium">
                                    
                                        <Image src="/ACJ-activity-summary.png" width={1000} height={774} alt="Users first see an activity summary with total clicks across phases, average clicks to conversion, and their baseline contribution footprint—providing context before diving into detailed journeys." />
                                    
                                    <p><b>Activity summary</b>: Raw data can be daunting, by presenting key metrics that quickly answer questions like "How am I performing across the funnel" we help a user quickly understand how their account is doing.</p>
                                    
                                        <Image src="/ACJ-contributions.png" width={1000} height={774} alt="The Contributions tab breaks down publisher involvement across awareness, consideration, and conversion phases—giving users clear language to discuss their value beyond last-click attribution." />
                                    
                                    <p><b>Contributions tab</b>: The three-phase framework (Awareness → Consideration → Conversion) transformed abstract click sequences into a clear narrative. Publishers could now say "I drive 40% of awareness conversions" instead of struggling to explain their role. Advertisers could identify which publishers were performing well at different stages of the journey.</p>
                                    <p><b>Touchpoints tab</b>: Our users could explore journeys in more detail, really understanding which touchpoint sequences benefitted them most.</p>
                                    
                                        <Image src="/ACJ-filter-selected.png" width={1000} height={774} alt="Users could adjust order period and lookback window to see how attribution changed—with smart defaults (30-day lookback, month-to-date) and inline helper text preventing confusion." />
                                    
                                    <p><b>Filtering</b>: The filtering system gave users control over their view while preventing cognitive overload. A 7-day lookback showed recent, tight attribution, a 30-day lookback captured longer consideration cycles. Users could experiment with different windows to understand how attribution timing affected their contribution numbers.</p>
                                    <p><b>Dual-audience view</b>: Rather than building two separate tools, one core visualization adapted based on user type. Publishers filtered by their own SIDs and saw "you" language. Advertisers filtered by campaign or publisher group and saw top contributors. Same data structure, different views, serving both audiences without doubling engineering effort.</p>
                                </div>                                
                                <div className="max-w-full py-5">
                                    <h2 className="text-xl font-semibold tracking-tight text-gray-700">Outcome</h2>
                                    <div className="space-y-4 text-base font-medium text-gray-700">
                                        <p><b>Development & launch:</b> 8-month development from concept to production (October 2022 - June 2023)
                                            - Sole designer on a cross-functional team (PM, project manager, developers, QA)
                                            - Launched to all eligible publishers and advertisers in June 2023</p>
                                        <p><b>Adoption & usage:</b>- Averages 35 daily active users exploring multi-touch attribution data
                                            - Available to 100% of publishers and advertisers on the Rakuten platform
                                            - Feature became a standard part of the platform's analytics offering</p>
                                        <p><b>Business impact:</b> - Used in sales pitches to prospective advertisers as a key differentiator
                                            - Helped Rakuten compete with networks like Impact and CJ Affiliate that offered similar journey tracking
                                            - Addressed a critical competitive gap identified by the sales team</p>
                                        <div>
                                            <p><b>What this enabled for publishers:</b></p>
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
                                        <p><b>What surprised me:</b> Users engaged more with the Contributions tab (high-level summary) than the Touchpoints tab (detailed journey paths). They wanted answers to specific questions, “Am I valuable in awareness?” or “Which publishers work well together?”, more than open-ended data exploration. This reinforced that data visualisation guides users toward specific insights rather than overwhelming them with raw information.</p>
                                    </div>
                                </div>
                                <h2 className="pt-16 text-xl font-semibold tracking-tight">What I learned</h2>
                                <p className="text-base font-medium">Complex data visualization isn't about showing everything, it's about progressive disclosure and guiding users from high-level insights to detailed narrative.</p>
                                <p className="text-base font-medium">The dual-audience challenge also taught me that the same underlying data can serve different user needs with thoughtful filtering and presentation. This applies to any consumer product with power users and casual users, designing flexibility without sacrificing simplicity.</p>
                                <p className="text-base font-medium">Finally, this project reinforced that trust comes from transparency, not simplification. Users were willing to engage with complexity when the logic was clearly explained. This transparency builds confidence in the data and insights being shown.</p>
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
