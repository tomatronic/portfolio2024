import Link from "next/link"
import Image from "next/legacy/image"
import React from "react"
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css'

export async function generateMetadata() {
    return {
        title: "Influencer | Tom Spencer",
        description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

function Influencer() {
    return (
        <>
            <div className="mt-4">
                <div className="container mx-auto h-[70vh] max-w-screen-xl rounded-2xl bg-[url('/backgroundBrew.png')] bg-cover">
                    <div className="mx-auto flex h-full max-w-screen-md flex-row flex-wrap place-content-center content-center">
                        <div className="flex flex-col">
                            <Zoom>
                                <img src="/brewtifulBg.png" width="1600" height="927" alt="Small mock of end product" />
                            </Zoom>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6 py-10">
                    <div className="text-3xl font-semibold tracking-tight">Influencer campaigns</div>
                    <p className="pt-2 text-sm font-medium uppercase">Rakuten Advertising &bull; Sept 2025 - Ongoing</p>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="mb-10 grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-3">
                            <p className="text-base font-medium">Rakuten Advertising needed to enter the influencer affiliate marketing space, fast. High-value advertisers were requesting an influencer solution that could integrate within their existing affiliate program. Aware that competitors offered this or similar experiences Rakuten Advertising risked losing high value, strategic accounts.</p>
                                <p className="text-base font-medium">The business case was clear:</p>
                                <ul className="space-y-2 text-base font-medium">
                                    <li><b>Retain and win high value advertisers</b>: Who wanted influencer and affiliate in one platform</li>
                                    <li><b>Grow the creator network</b>Attract influencers to Rakuten Advertising, but also encourage Advertisers to invite them to the Rakuten advertising ecosystem.</li>
                                    <li><b>New revenue streams</b>: from influencer campaigns and creator focused advertisers</li>
                                </ul>
                                <p className="text-base font-medium">The challenge? Rakuten had never worked closely with influencers before. There was no infrastructure in place to connect social accounts, no management tools for campaigns and no creator facing UI. An added pressure was to meet a hard deadline for a demonstration of our vision to a prospective advertiser the following Monday.</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-sm font-medium uppercase">Role</p>
                            <p>Sole UX designer</p><br />
                            <p className="text-sm font-medium uppercase">Skills used</p>
                            <p>UX/UI, User Research, Prototyping, User testing</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-screen-md px-6">
                    <div className="grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-4 md:gap-10">
                        <div className="col-span-4 pb-10">
                            <h2 className="text-xl font-semibold tracking-tight">Challenge</h2>
                            <p className="mb-6 text-base font-medium">This project had many constraints that can make design hard:</p>
                            <ul className="space-y-2 text-base font-medium">
                                <li><b>Extreme time pressure</b>: A prospect demo within a week of project initiation. Create a compelling vision of a product that didn't exist yet.</li>
                                <li><b>New user type</b>: Influencers have a different mental model to typical affiliate publishers. They think more about content creation, brand partnerships and social engagement, not so much about metrics and commission structures</li>
                                <li><b>New product category</b>: Campaigns were a new concept, Advertisers would be expected to create opportunities, set deliverables and offer incentives (such as flat fees, favourable commissions or gift cards) and invite and manage influencers</li>
                                <li><b>Technical unknowns</b>: We were utilising another business partner to help authenticate social accounts and consolidate posts linked to campaigns.</li>
                                <li><b>No existing patterns</b>: Although we had some influencers in the platform currently, we had no influencer specific UI, everything needed designing from scratch.</li>
                                <li><b>Cross functional complexity</b>: Working across timezones (US based PM, UK based UX designer), coordinating with external partners, aligning with developers who were estimating effort on the fly.</li>
                            </ul>
                            <h3 className="pt-8 text-lg font-semibold tracking-light">My approach: Prototype first, validate fast</h3>
                            <p className="text-base font-medium">Week 1: Complete Prototype in 5 Days</p>
                            <p className="mb-6 text-base font-medium">On Tuesday morning, I joined a briefing call with the VP of Product (based in the US). The requirements were shared and the big question was asked, “Can we demonstrate a compelling vision of this product to a prospect by Monday.” That gave me less than a week.</p>
                            <p className="mb-6 text-base font-medium">I started with a very light level of research to enable some quick user flows, which were beefed out with wireframes, and quickly iterated into a golden path click through prototype with high fidelity mocks.</p>
                            <p className="mb-6 text-base font-medium">What I built in 5 days:</p>
                            <ul className="space-y-2 text-base font-medium">
                                <li>&bull; Full clickable prototype showing the end-to-end experience</li>
                                <li>&bull; Advertiser side: Campaign creation, influencer invites, application review</li>
                                <li>&bull; Influencer side: Campaign discovery, application flow, deliverable submission</li>
                                <li>&bull; Social post display</li>
                                <li>&bull; Key workflows connected and demonstrable</li>
                            </ul>
                                
                                <p className="text-base font-medium">Why this approach worked:</p>
                                <ul className="space-y-2 text-base font-medium">
                                    <li><b>Speed over perfection</b>: I didn't have time for multiple fidelity stages. I jumped straight to high-fidelity mockups using existing design system components where possible and designing new patterns where needed.</li>
                                    <li><b>Risk reduction</b>: By prototyping the complete flow, I surfaced technical questions and integration challenges early, it gave engineering and the external partner team clear requirements to evaluate. It also allowed prospects to understand what we envisioned and planned to make available to them.</li>
                                    <li><b>Stakeholder confidence</b>: When the VP of Product saw the prototype, it gave her confidence to demo the vision to the prospect. When the prospect saw it, they believed Rakuten Advertising could deliver.</li>
                                    <li><b>The result</b>: Prototype delivered Friday. Demo to prospect Monday. Prospect impressed. Project greenlit for December MVP.</li>
                                </ul>
                            <Zoom>
                                <img src="/sampleBeer.png" className="rounded-2xl" width="500" height="542" alt="I had previously begun exploring ways of documenting beers I had sampled" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Key Decisions</h2>
                            <p className="text-base font-medium">With the prototype validated, I moved into detailed design and scoping. Here are the critical decisions made that helped to shape the product:</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">Ruthless V1 Scoping: Ship a Complete Story, Not Everything</h3>
                                <p className="text-base font-medium">With only three months to production, I worked with the PM to make hard choices about what to include in MVP versus what we could defer to a later iteration.</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">What I cut for V1:</h3>
                                <p className="text-base font-medium">In-app negotiation: Advertisers and influencers can't negotiate terms in-platform (V2 feature pending user feedback)
                                AI integrations: We hoped to include a range of AI assistance including brief and campaign creation, smart suggestions for which influencers to invite and AI optimised incentive suggestions (data to be collected to confirm, but very likely in V2)
                                Multiple invite entry points: Limited to one primary location to reduce development surface area</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">What I kept for V1:</h3>
                                <p className="text-base font-medium">Core campaign creation and editing
                                Influencer application flow
                                Social post verification (the key differentiator)
                                Basic campaign management and review tools</p>
                                <p className="text-base font-medium"><b>The principle</b>: Ship a complete story a user can accomplish end-to-end, even if it's missing the extra polish we hope to include.</p>
                                <p className="text-base font-medium">The ruthless scoping had an unexpected benefit, it forced me to identify the absolute core value proposition. What's the ONE thing this product must do? Let advertisers create campaigns and let influencers apply and complete them. Everything else is enhancement.</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">Dual-Audience UI</h3>
                                <p className="text-base font-medium">Advertisers and influencers needed fundamentally different experiences from the same underlying campaign system.</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">For Advertisers (Campaign Creation):</h3>
                                <p className="text-base font-medium">Business-focused language: goals, deliverables, compensation structures
                                Campaign management dashboard showing applications, completions, performance
                                Detailed influencer profiles with audience data, engagement rates, previous campaigns</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">For Influencers (Campaign Discovery):</h3>
                                <p className="text-base font-medium">Opportunity-focused language: What's in it for them? What do they need to do?
                                "Sell" the campaign with compelling visuals and clear expectations
                                Simplified application flow—quick to apply, easy to understand requirements</p>
                                <p className="text-base font-medium">These couldn't be separate products (engineering would never deliver in time), but they couldn't feel identical either. Advertisers and influencers have fundamentally different needs.</p>
                                <p className="text-base font-medium">I decided on a solution that would share underlying components and data structures, but offer different content hierarchy and visual framing. Advertisers see “Campaign Management.” Influencers see “Opportunities.”</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">Social Post Verification</h3>
                                <p className="text-base font-medium">The most critical,and most uncertain, piece was social post detection. The external partner would somehow detect when an influencer posted about a campaign and link it to our system. But the exact mechanism wasn't finalized.</p>
                                <p className="text-base font-medium">How do you design a verification UI when you don't know exactly what data you'll receive or when you'll receive it?</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">My approach:</h3>
                                <p className="text-base font-medium">Design for the ideal state first: What should it look like if everything works perfectly? Show the post preview, engagement metrics, verification status.
                                Then design for failure states: What if the post isn't detected? What if it doesn't meet requirements? How does an advertiser manually review or flag issues?
                                Build in flexibility: Use card-based layouts that can accommodate variable data—some posts might have images, some videos, some just text.</p>
                                <p className="text-base font-medium">This "design for unknowns" approach gave engineering clear targets while building in adaptability for technical realities.</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">Influencer Profile Design</h3>
                                <p className="text-base font-medium">Advertisers needed to evaluate influencers before approving applications. But what data should we show?
                                The challenge: We suddenly had access to social data we'd never dealt with before, follower counts, engagement rates, post frequency, audience demographics. It would be easy to show everything. But more data isn't always better.
                                What I prioritized:
                                Active socials only: No point showing dormant accounts
                                Engagement quality over vanity metrics: Engagement rate matters more than raw follower count, however it is a metric that can be defined in different ways, so crucial to make it clear what the metric describes.
                                Recent activity: What have they posted lately? Does the content follow rules and restrictions?
                                Relevant audience: Does their audience match the advertisers demographic?
                                What I cut: Kept things clean and simple, majority of metrics were removed with simple data telling the immediate story. Expanding the data will allow us to further extend the story in the future.</p>
                                <h3 className="pt-8 text-lg font-semibold tracking-light">Campaign details page</h3>
                                <p className="text-base font-medium">While another designer created the influencer landing page with campaign thumbnails, I owned the campaign detail page—where influencers decided whether to apply.
                                The design challenge: After clicking a campaign thumbnail, influencers needed comprehensive information presented persuasively.
                                Key decisions:
                                Information hierarchy: Lead with what matters most—deliverables and compensation
                                Visual continuity: Ensure seamless transition from the landing page thumbnail to detail view
                                Persuasion over data: Frame requirements as opportunities, not obligations
                                Clear CTAs: "Apply Now" prominently placed with minimal friction
                                This shifted my thinking from "display campaign details" to "convert interested influencers into applicants." The page needed to feel like an opportunity worth pursuing, not a dry specification document.

                            </p>
                            <Zoom>
                                <img src="/initialDoodle.png" className="rounded-2xl" width="1000" height="774" alt="Some very messy initial thoughts on what I wanted to include and the direction I could take a name" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Testing and iteration</h2>
                            <div className="space-y-3 text-base font-medium">
                                <p><b>Internal validation (Weeks 2–3)</b>: Tested with 8 PMs/engineers; advertiser flows were clear, influencer outcomes needed clarification—adjusted workflows accordingly.</p>
                                <p><b>MVP scope refinement (Weeks 3–8)</b>: Weekly reviews with VP and engineering; continuously cut to hit December; every cut documented with rationale for potential V2.</p>
                                <p><b>The biggest surprise?</b>: Advertisers cared more about getting influencers onboard and carrying out campaigns than the outcomes (note that the initial advertiser pool is very small and with larger companies that are striving more for results, the extras can come later)</p>
                            </div>
                            <div className="pb-16 text-base font-medium">
                                <Zoom>
                                    <img src="/brewComp.png" className="rounded-2xl" width="2390" height="1206" alt="Competitor research - Investigating the craft beer and design review landscape" />
                                </Zoom>
                            </div>
                            <div className="max-w-full py-5">
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">The solution</h2>
                                <p className="mb-16 text-base font-medium text-gray-700">
                                    The final MVP design focused on the core workflow: Advertisers create campaigns, influencers discover and apply, content gets posted and verified (if required), incentives gets distributed.
                                    Advertiser Experience:
                                    [IMAGE: Campaign creation interface] Caption: "Advertisers create campaigns by setting goals, deliverables, and incentives. The interface guides them through required fields while allowing flexibility for different campaign types."
                                    [IMAGE: Influencer application review] Caption: "Advertisers review influencer applications with social accounts and follower details"
                                    [IMAGE: Social post verification] Caption: "Social posts are automatically detected and displayed for advertiser verification, showing the content and engagement metrics."

                                    Influencer Experience:
                                    [IMAGE: Campaign discovery/opportunities page] Caption: “Influencers see campaigns as opportunities, leading with compelling visuals, clear incentives, and easy-to-understand requirements.”
                                    [IMAGE: Application flow] Caption: “The application process is streamlined: apply and await the advertisers acceptance.”
                                    [IMAGE: Campaign dashboard for influencers] Caption: “Influencers track their active campaigns, upcoming deadlines, and completed deliverables in a simple dashboard.”
                                    Key Design Elements:
                                    Progressive disclosure: Show essential info first, hide complexity until needed
                                    Card-based or table layouts: Flexible for variable data from external APIs and future growth of the feature
                                    Clear CTAs: Every screen has a clear primary action
                                    Dual-audience design: Same system, different perspectives and language
                                    Visual hierarchy: Important info (incentives, requirements) is unmissable
                                </p>
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">Outcome</h2>
                                <p className="mb-16 text-base font-medium text-gray-700">
                                    Timeline achievements:
                                    Complete clickable prototype: 5 days
                                    Prospect demo and buy-in: Day 6
                                    MVP development: September to December 2025 (3 months concept-to-production)
                                    Planned V2 iteration: Mid-January 2026 (will be based on real user feedback and data)
                                    What this speed enabled:
                                    Secured prospect commitment by demonstrating vision before competitors
                                    Lowered risk of the project by validating concepts before heavy engineering investment
                                    Aligned stakeholders around a shared vision through tangible prototypes
                                    Created urgency that kept the project prioritised through competing demands
                                    Development Status (As of October 2025):
                                    UI and API development in progress
                                    On track for December MVP launch
                                    Beta testing planned for early December
                                    Early adopter advertisers identified and ready to onboard
                                    Post-Launch Metrics (Will Add in January 2026):
                                    Number of campaigns created in first month
                                    Influencer application volume and completion rate
                                    Advertiser satisfaction
                                    User feedback on what features are missing vs. what's working
                                    What We're Planning to Learn:
                                    Do advertisers need easier campaign setup?
                                    What's the typical campaign lifecycle from creation to completion?
                                    What post-launch features do users request first? (This will guide V2 priorities)
                                </p>
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">What I learned</h2>
                                <p className="mb-16 text-base font-medium text-gray-700"><b>Speed can be a competitive advantage.</b> In consumer product companies, the team that ships first often wins, even if the product isn't perfect. By prototyping the complete experience in 5 days, I gave Rakuten Advertising the confidence to move aggressively.</p>
                                <p className="mb-16 text-base font-medium text-gray-700"><b>Constraints force better design.</b> The tight deadline led to being ruthless with priority. Every feature had to justify its existence for V1. This resulted in a cleaner, more focused product than if we'd had unlimited time to add "nice-to-haves". In consumer products, this discipline is critical, users would rather have a polished core experience than a bloated feature rich outcome.</p>
                                <p className="mb-16 text-base font-medium text-gray-700"><b>Design for iteration, not perfection.</b> I knew we didn't have all the answers, so I designed systems that could evolve: flexible card layouts, scalable component patterns, and clear extension points for future features. This mindset is essential in consumer products where user needs emerge through usage, not upfront research.</p>
                                <p className="mb-16 text-base font-medium text-gray-700"><b>Prototype with real fidelity, not wireframes.</b> The high-fidelity prototype built stakeholder confidence in ways that wireframes never could. It looked real, so people could understand how their own experience may play out.</p>
                                <p className="mb-16 text-base font-medium text-gray-700">Design the complete story, not individual features. Users don't experience "features", they experience workflows. By prototyping the end-to-end journey (advertiser creates campaign &gt; influencer applies &gt; content gets posted &gt; verification happens), I ensured we were building a usable product, not a collection of disconnected features.
                                </p>

                                <Zoom>
                                    <img src="/beerLover.png" width="1684" height="1190" alt="User Persona A - The user persona of a beer lover" />
                                </Zoom>
                                <Zoom>
                                    <img src="/designLover.png" width="1684" height="1190" alt="User Persona B - The user persona of a design lover" />
                                </Zoom>
                            </div>                            
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

export default Influencer