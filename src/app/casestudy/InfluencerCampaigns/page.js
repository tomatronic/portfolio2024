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
                            <p className="text-base font-medium">Rakuten Advertising needed to enter the influencer affiliate marketing space—fast. High-value advertisers wanted influencer + affiliate in one platform, and competitors already offered similar experiences, risking strategic account loss.</p>
                            <ul className="space-y-2 text-base font-medium">
                                <li><b>Retain and win high-value advertisers</b>: Provide influencer + affiliate in one place.</li>
                                <li><b>Grow the creator network</b>: Attract influencers and make it easy for advertisers to invite them into the ecosystem.</li>
                                <li><b>Unlock new revenue</b>: From influencer campaigns and creator-focused advertisers.</li>
                            </ul>
                            <p className="text-base font-medium">The challenge: Rakuten hadn’t worked closely with influencers before—no social account connections, no campaign management tools, no creator-facing UI—and we had a hard demo deadline for a prospect the following Monday.</p>
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
                            <p className="mb-6 text-base font-medium">Constraints that made this hard:</p>
                            <ul className="space-y-2 text-base font-medium">
                                <li><b>Extreme time pressure</b>: Demo to a prospect within a week; the product didn’t exist.</li>
                                <li><b>New user type</b>: Influencers think in content and partnerships, not traditional affiliate metrics.</li>
                                <li><b>New product category</b>: Campaign creation, deliverables, incentives, and invite flows were all net-new.</li>
                                <li><b>Technical unknowns</b>: External partner needed for social auth and post aggregation.</li>
                                <li><b>No existing patterns</b>: No influencer-specific UI; everything from scratch.</li>
                                <li><b>Cross-functional complexity</b>: Distributed team, external partners, and live effort estimates.</li>
                            </ul>
                            <h3 className="pt-8 text-lg font-semibold tracking-tight">Approach: prototype first, validate fast</h3>
                            <p className="text-base font-medium">Week 1 goal: deliver a complete prototype in 5 days for a Monday demo.</p>
                            <ul className="space-y-2 text-base font-medium">
                                <li>Built a high-fidelity clickable prototype covering end-to-end advertiser and influencer flows.</li>
                                <li>Advertiser side: campaign creation, invites, application review.</li>
                                <li>Influencer side: discovery, apply flow, deliverable submission, social post display.</li>
                            </ul>
                            <p className="text-base font-medium">Why it worked:</p>
                            <ul className="space-y-2 text-base font-medium">
                                <li><b>Speed over perfection</b>: Jumped straight to hi-fi using existing system components where possible.</li>
                                <li><b>Risk reduction</b>: Surfaced technical and integration questions early for engineering and partners.</li>
                                <li><b>Stakeholder confidence</b>: VP could demo credibly; prospect bought in; project greenlit for December MVP.</li>
                            </ul>
                            <Zoom>
                                <img src="/sampleBeer.png" className="rounded-2xl" width="500" height="542" alt="I had previously begun exploring ways of documenting beers I had sampled" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Key decisions</h2>
                            <div className="space-y-5 text-base font-medium">
                                <div>
                                    <p><b>Ruthless V1 scoping</b>: Ship a complete story, not everything.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><b>Cut</b>: In-app negotiation (planned for V2), AI helpers for briefs/invites/incentives, multiple invite entry points.</li>
                                        <li><b>Kept</b>: Core campaign creation/editing, influencer application flow, social post verification (key differentiator), basic management/review tools.</li>
                                        <li><b>Principle</b>: Let advertisers create campaigns and influencers apply/complete them; everything else is enhancement.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p><b>Dual-audience UI</b>: Same system, different framing.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><b>Advertisers</b>: Goals/deliverables/compensation; management dashboard; detailed influencer profiles.</li>
                                        <li><b>Influencers</b>: Opportunity-focused copy, compelling visuals, simplified apply flow.</li>
                                    </ul>
                                    <p>Shared components/data, but tailored hierarchy and language: “Campaign Management” vs “Opportunities.”</p>
                                </div>
                                <div>
                                    <p><b>Social post verification</b>: Designed for unknowns.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Ideal state: previews, engagement metrics, verification status.</li>
                                        <li>Failure states: not detected, doesn’t meet requirements, manual review/flagging.</li>
                                        <li>Flexible card layouts to handle variable data (image/video/text).</li>
                                    </ul>
                                </div>
                                <div>
                                    <p><b>Influencer profile design</b>: Signal over vanity.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Active socials only; engagement quality; recent activity; audience relevance.</li>
                                        <li>Trimmed metrics to tell the immediate story; left room to expand later.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p><b>Campaign details page</b>: Convert interest to applications.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Lead with deliverables and compensation; keep visual continuity from thumbnail.</li>
                                        <li>Frame requirements as opportunities; clear primary CTA (“Apply now”).</li>
                                    </ul>
                                </div>
                            </div>
                            <Zoom>
                                <img src="/initialDoodle.png" className="rounded-2xl" width="1000" height="774" alt="Some very messy initial thoughts on what I wanted to include and the direction I could take a name" />
                            </Zoom>
                            <h2 className="pt-16 text-xl font-semibold tracking-tight">Testing and iteration</h2>
                            <div className="space-y-3 text-base font-medium">
                                <p><b>Internal validation (Weeks 2–3)</b>: Tested with 8 PMs/engineers; advertiser flows were clear, influencer outcomes needed clarification—adjusted workflows accordingly.</p>
                                <p><b>MVP scope refinement (Weeks 3–8)</b>: Weekly reviews with VP and engineering; continuously cut to hit December; every cut documented with rationale for potential V2.</p>
                                <p><b>Big surprise</b>: Early advertisers cared more about onboarding influencers and getting campaigns live than detailed outcome views.</p>
                            </div>
                            <div className="pb-16 text-base font-medium">
                                <Zoom>
                                    <img src="/brewComp.png" className="rounded-2xl" width="2390" height="1206" alt="Competitor research - Investigating the craft beer and design review landscape" />
                                </Zoom>
                            </div>
                            <div className="max-w-full py-5">
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">The solution</h2>
                                <div className="space-y-4 text-base font-medium text-gray-700">
                                    <p>The MVP focused on the core workflow: advertisers create campaigns; influencers discover and apply; content gets posted and verified; incentives are distributed.</p>
                                    <p><b>Advertiser experience</b>: Guided campaign creation, influencer application review with social details, and social post verification showing content plus engagement.</p>
                                    <p><b>Influencer experience</b>: Campaign discovery framed as opportunities, streamlined application flow, and a simple dashboard for active campaigns and deadlines.</p>
                                    <p><b>Design elements</b>: Progressive disclosure; flexible card/table layouts for variable external data; clear primary CTAs; dual-audience language and hierarchy; incentives/requirements kept prominent.</p>
                                </div>
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">Outcome</h2>
                                <div className="space-y-4 text-base font-medium text-gray-700">
                                    <p><b>Timeline achievements</b>: Prototype in 5 days; prospect demo/buy-in on day 6; MVP dev Sept–Dec 2025; V2 planning for Jan 2026.</p>
                                    <p><b>What speed enabled</b>: Secured prospect commitment ahead of competitors; reduced risk by validating concepts pre-build; aligned stakeholders with tangible prototypes; created urgency that kept the project prioritized.</p>
                                    <p><b>Development status (Oct 2025)</b>: UI/API in progress; on track for December MVP; beta testing planned for early December; early adopters identified.</p>
                                    <p><b>Post-launch metrics to track</b>: Campaigns created, influencer application volume/completion, advertiser satisfaction, user feedback on missing vs. working features.</p>
                                    <p><b>Questions we’re planning to answer</b>: Do advertisers need easier setup? What’s the typical campaign lifecycle? Which features are requested first (to drive V2)?</p>
                                </div>
                                <h2 className="text-xl font-semibold tracking-tight text-gray-700">What I learned</h2>
                                <div className="space-y-3 text-base font-medium text-gray-700">
                                    <p><b>Speed as advantage</b>: A full prototype in 5 days secured buy-in.</p>
                                    <p><b>Constraints sharpen focus</b>: Ruthless priority yielded a cleaner MVP.</p>
                                    <p><b>Design for iteration</b>: Flexible layouts/components handled unknowns and future feedback.</p>
                                    <p><b>High fidelity wins</b>: Realistic prototypes aligned stakeholders better than wireframes.</p>
                                    <p><b>Design the journey</b>: Users experience workflows, not isolated features.</p>
                                </div>
                                <div className="pt-10 space-y-4">
                                    <Zoom>
                                        <img src="/beerLover.png" width="1684" height="1190" alt="User Persona A - The user persona of a beer lover" />
                                    </Zoom>
                                    <Zoom>
                                        <img src="/designLover.png" width="1684" height="1190" alt="User Persona B - The user persona of a design lover" />
                                    </Zoom>
                                </div>
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