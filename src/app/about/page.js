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
        description: "About Tom Spencer — Senior UX Designer specialising in data-heavy enterprise tools, based in Brighton, UK.",
    }
}

export default function About() {
    return (
        <div className="mt-4">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Single white card – matches original site and home page structure */}
                <div className="rounded-4xl bg-zinc-50 dark:bg-slate-900 p-8 md:p-12 lg:p-16">
                    {/* Header: statement left + photo below, paragraphs right */}
                    <header className="mb-16 md:mb-20">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

                            {/* Left: large statement + photo */}
                            <div>
                                <h1 className="text-2xl font-normal leading-snug tracking-tight text-slate-950 dark:text-white md:text-3xl">
                                    I'm a Senior UX Designer based in Brighton. I specialise in data-heavy enterprise tools — the kind where users are experts, stakes are high, and complexity has to disappear into the design rather than sit on top of it.
                                </h1>
                                <div className="relative mt-8 w-2/3 aspect-square overflow-hidden rounded-2xl ring-0.5 ring-[rgba(184,64,16,0.22)] dark:ring-[rgba(238,159,104,0.30)]">
                                    <Image
                                        src="/bio.png"
                                        alt="Tom Spencer"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Right: supporting paragraphs */}
                            <div className="text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                                <p className="mb-8">
                                    For the past 8 years at Rakuten Advertising I've been embedded in one of the most complex ecosystems in ad-tech: affiliate reporting, publisher attribution, offer management. Products that touch thousands of advertisers and publishers daily. My job has always been the same — take something genuinely complicated and make it feel like it was never complicated at all.
                                </p>
                                <p className="mb-0">
                                    If you're building tools for people who know exactly what they want and won't tolerate software that slows them down, that's the problem I want to work on next.
                                </p>
                            </div>

                        </div>
                    </header>

                    {/* My Design Philosophies – commented out until real images are ready
                    <section className="mb-16 md:mb-20">
                        <h2 className="mb-8 text-2xl font-normal tracking-tight text-slate-950 dark:text-white">
                            My Design Philosophies
                        </h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="overflow-hidden rounded-2xl bg-[#EDE7DD] dark:bg-slate-800/50">
                                <div className="aspect-[4/3] w-full bg-[#E4DDD2] dark:bg-slate-700/50 flex items-center justify-center">
                                    <BarChart3 size={56} className="text-accent-600/30 dark:text-accent-300/30" />
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-normal tracking-tight text-slate-950 dark:text-white">
                                        Data that works for people
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-600">
                                    Data-heavy doesn't have to mean hard to use. I design interfaces where complexity lives in the system, not in the experience.
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-2xl bg-[#EDE7DD] dark:bg-slate-800/50">
                                <div className="aspect-[4/3] w-full bg-[#E4DDD2] dark:bg-slate-700/50 flex items-center justify-center">
                                    <Zap size={56} className="text-accent-600/30 dark:text-accent-300/30" />
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-normal tracking-tight text-slate-950 dark:text-white">
                                        Ship fast, keep craft
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-600">
                                    I prototype in days and push to production in months, not quarters. Cutting scope to hit a deadline isn't a failure — it's just design.
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-2xl bg-[#EDE7DD] dark:bg-slate-800/50">
                                <div className="aspect-[4/3] w-full bg-[#E4DDD2] dark:bg-slate-700/50 flex items-center justify-center">
                                    <SlidersHorizontal size={56} className="text-accent-600/30 dark:text-accent-300/30" />
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-normal tracking-tight text-slate-950 dark:text-white">
                                        Automation with control
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-slate-600">
                                    When the system does something for you, you should still understand what it did and be able to step in if needed. That's the design problem I find most interesting right now.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    */}

                    {/* Hobbies – title + description + horizontal image gallery per hobby (like reference) */}
                    <section className="mb-16 md:mb-20">
                        <h2 className="mb-4 text-2xl font-normal tracking-tight text-slate-950 dark:text-white">
                            Outside the screen
                        </h2>
                        <div className="mb-14 md:mb-16">
                            <p className="mt-3 text-base leading-7 text-slate-600">
                            I run, hike, and travel, not because it makes me a better designer in any neat, quotable way, but because switching off completely is the only thing that actually works. Some of my clearest thinking on hard UX problems has happened somewhere between kilometer 8 and 12.</p>
                            <div className="mt-6 overflow-hidden rounded-2xl">
                                <Image
                                    src="/aboutBanner.png"
                                    alt="Outside the screen"
                                    width={1200}
                                    height={600}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
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

                    {/* CTA */}
                    <div className="border-t border-[#C8BEB0] dark:border-[#2A3A4A] pt-12 pb-4">
                        <p className="text-base text-slate-600 dark:text-slate-400">
                            Want to see how this thinking plays out in practice?{' '}
                            <a
                                href="/#work"
                                className="font-medium text-accent-600 dark:text-accent-400 underline underline-offset-2 decoration-accent-300 hover:decoration-accent-500 transition-colors"
                            >
                                See my work →
                            </a>
                        </p>
                    </div>

                    {/* old CTA – kept for reference */}
                    {/* <div className="border-t border-gray-200 pt-12 pb-8">
                        <p className="text-center text-base text-slate-600 md:text-lg">
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
