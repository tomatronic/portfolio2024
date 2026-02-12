import Image from "next/image"
import { DraggableImageGallery } from "../components/draggable-image-gallery"

export async function generateMetadata() {
    return {
        title: "About | Tom Spencer",
        description: "Hello, I am Tom Spencer, a Senior UX Designer based in Brighton, UK. I am currently working at Rakuten Advertising.",
    }
}

export default function About() {
    return (
        <>
            <div className="mt-4">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="rounded-4xl bg-white p-12">
                        {/* Header Section */}
                        <div className="mb-16 md:mb-24">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                                <div className="order-last md:order-first md:col-span-6">
                                    <div className="flex h-full flex-col justify-center">
                                        <div className="text-xl font-semibold tracking-tight">Hi, I'm Tom —</div>
                                        <div className="mb-12 space-y-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">

                                            <p>I'm a Senior UX Designer based in Brighton, specializing in products where data clarity drives decisions with analytics and performance tracking. For the past 8 years at Rakuten Advertising, I've designed dashboards, built intelligent search systems, and created attribution tools that help people make sense of overwhelming information.</p>

                                        </div>
                                        <h2 className="text-xl font-semibold tracking-tight">What I am good at</h2>
                                        <div className="mb-12 space-y-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                                            <ul>
                                                <p>Making data-heavy interfaces feel effortless (not just "accessible", enjoyable)</p>
                                                <p>Shipping fast without sacrificing craft (5 day prototypes, 3 month MVPs)</p>
                                                <p>Balancing automation with user control (users want help, not replacement)</p>
                                            </ul>
                                        </div>
                                        <h2 className="text-xl font-semibold tracking-tight">Outside work</h2>
                                        <div className="mb-16 space-y-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                                            <p>I recharge in nature, whether that is taking it slow and steady or running. Or you can find me planning the next adventure with my partner. The best design ideas come when I'm not staring at a screen.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-6">
                                <div className="mb-12 overflow-hidden rounded-2xl">
                    <Image 
                        src="/bio.png" 
                        alt="A little insight to my life" 
                        width={200} 
                        height={80}
                        className="w-full rounded-2xl"
                    />
                </div> 
                                </div>
                            </div>
                        </div>




                        {/*                 
                <div className="mb-16 overflow-hidden rounded-2xl">
                    <Image 
                        src="/aboutBanner.png" 
                        alt="A little insight to my life" 
                        width={2000} 
                        height={800}
                        className="w-full rounded-2xl"
                    />
                </div> */}

                        <div className="border-t border-gray-200 pt-12 pb-8">
                            <p className="text-center text-base text-slate-700 md:text-lg">
                                I'm always looking for opportunities for collaboration.{" "}
                                <a
                                    href="mailto:tom.m.spencer+portfolio@gmail.com"
                                    className="font-medium text-purple-500 transition-colors hover:text-purple-600 underline underline-offset-4 decoration-purple-500/30 hover:decoration-purple-500/50"
                                >
                                    Reach out and let's chat!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


/* 📧 [Email] | 💼 [LinkedIn] | 📄 [Resume] */