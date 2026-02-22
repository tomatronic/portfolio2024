import Image from "next/image"

// Add your images to the public folder, then list them here (e.g. public/hobbies/travelling-1.jpg → "/hobbies/travelling-1.jpg")
const travellingImages = [
  "/hobbies/travelling-1.png",
  "/hobbies/travelling-2.jpg",
  "/hobbies/travelling-3.jpg",
  "/hobbies/travelling-4.jpg",
]

export async function generateMetadata() {
    return {
        title: "About | Tom Spencer",
        description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

export default function About() {
    return (
        <div className="mt-4">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Single white card – matches original site and home page structure */}
                <div className="rounded-4xl bg-white p-8 md:p-12 lg:p-16">
                    {/* Header: intro + bio image (original layout) */}
                    <header className="mb-16 md:mb-20">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                            <div className="order-last md:order-first md:col-span-6">
                                <h1 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                                    About Tom Spencer
                                </h1>
                                <div className="mt-8 space-y-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                                    <p>
                                    I'm a Senior UX Designer based in Brighton. I specialise in data-heavy enterprise tools — the kind where users are experts, stakes are high, and complexity has to disappear into the design rather than sit on top of it.</p>
                                    <p>
                                    For the past 8 years at Rakuten Advertising I've been embedded in one of the most complex ecosystems in ad-tech: affiliate reporting, publisher attribution, offer management. Products that touch thousands of advertisers and publishers daily. My job has always been the same, take something genuinely complicated and make it feel like it was never complicated at all.</p>
                                   <p>If you're building tools for people who know exactly what they want and won't tolerate software that slows them down, that's the problem I want to work on next.</p>
                                </div>
                            </div>
                            <div className="md:col-span-6">
                                <div className="overflow-hidden rounded-2xl">
                                    <Image
                                        src="/bio.png"
                                        alt="A little insight to my life"
                                        width={400}
                                        height={500}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* My Design Philosophies – 3 cards in a grid (contained) */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-950">
                            My Design Philosophies
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="overflow-hidden rounded-2xl bg-purple-100">
                                <div className="aspect-[4/3] w-full bg-purple-200/60 flex items-center justify-center text-slate-500 text-sm">
                                    Image placeholder
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                                        Data that works for people
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-700">
                                    Data-heavy doesn't have to mean hard to use. I design interfaces where complexity lives in the system, not in the experience.
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-2xl bg-purple-100">
                                <div className="aspect-[4/3] w-full bg-purple-200/60 flex items-center justify-center text-slate-500 text-sm">
                                    Image placeholder
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                                        Ship fast, keep craft
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-700">
                                    I prototype in days and push to production in months, not quarters. Speed and quality aren't opposites, cutting scope is a design decision, not a failure.
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-2xl bg-purple-100">
                                <div className="aspect-[4/3] w-full bg-purple-200/60 flex items-center justify-center text-slate-500 text-sm">
                                    Image placeholder
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                                        Automation with control
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-700">
                                    AI and automation should feel like a capable colleague, not a black box. I ensure users stay in control of the outcome, even when the process is being handled for them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hobbies – title + description + horizontal image gallery per hobby (like reference) */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                            Outside the screen
                        </h2>
                        <div className="mb-14 md:mb-16">                            
                            <p className="mt-3 text-base leading-7 text-slate-700">
                            I run, hike, and travel, not because it makes me a better designer in any neat, quotable way, but because switching off completely is the only thing that actually works. Some of my clearest thinking on hard UX problems has happened somewhere between kilometer 8 and 12.</p>
                            {/* <div className="mt-5 flex gap-3 overflow-x-auto pb-2 -mx-1">
                                {travellingImages.map((src, i) => (
                                    <div key={src} className="aspect-square w-36 shrink-0 overflow-hidden rounded-xl md:w-44">
                                        <Image
                                            src={src}
                                            alt={`Travel ${i + 1}`}
                                            width={176}
                                            height={176}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div> */}
                        </div>                       
                    </section>

                    {/* CTA – same as original */}
                    {/* <div className="border-t border-gray-200 pt-12 pb-8">
                        <p className="text-center text-base text-slate-700 md:text-lg">
                            I'm always looking for opportunities for collaboration.{" "}
                            <a
                                href="mailto:tom.m.spencer+portfolio@gmail.com"
                                className="font-medium text-purple-500 transition-colors hover:text-purple-600 underline underline-offset-4 decoration-purple-500/30 hover:decoration-purple-500/50"
                            >
                                Reach out and let's chat!
                            </a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
