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
                    <div className="mb-6 text-sm font-medium uppercase tracking-wider text-purple-500">Hi, I'm Tom —</div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                        <div className="order-last md:order-first md:col-span-8">
                            <div className="flex h-full flex-col justify-center">
                                <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl">About Me</h1>
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            <DraggableImageGallery />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mb-16 space-y-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                    <p>I'm a Senior UX Designer based in Brighton, UK. I thrive on solving complex problems and crafting experiences that feel natural and engaging. My work is all about making products enjoyable, accessible, and beautifully intuitive.</p>
                    <p>Currently, I'm at Rakuten Advertising, where I dive deep into user behavior, ensuring that every design decision is rooted in empathy and understanding. I love experimenting with ideas and solutions to create products that not only work but make users feel right at home.</p>
                    <p>When I'm not designing, you'll find me recharging in nature or exploring new places with my partner, always drawing inspiration from the world around me.</p>
                </div>

                {/* Banner Image */}
                <div className="mb-16 overflow-hidden rounded-2xl">
                    <Image 
                        src="/aboutBanner.png" 
                        alt="A little insight to my life" 
                        width={2000} 
                        height={800}
                        className="w-full rounded-2xl"
                    />
                </div>

                {/* CTA Section */}
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
