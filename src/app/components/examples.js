import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default function ExampleGallery() {
    const images = [
        {
            src: "/donutmock.png",
            alt: "Concept delivery app for a fictional donut company",
            width: 472,
            height: 600
        },
        {
            src: "/404.png",
            alt: "404 page illustration iteration",
            width: 236,
            height: 236
        },
        {
            src: "/beerapp.gif",
            alt: "Mobile app design - Beer app",
            width: 472,
            height: 710
        },
        {
            src: "/todoList.gif",
            alt: "UI design - To do list mobile app",
            width: 472,
            height: 350
        }
    ];

    return (
        <div className="py-24 md:pt-16">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                    Extra Pixels
                </h2>
                <p className="text-balance pb-6 pt-0 text-base font-normal text-slate-600 dark:text-slate-400">
                    Work I do when nobody's watching. Personal projects, speculative ideas, and the occasional rabbit hole.
                </p> 

                <div className="grid grid-cols-4 gap-4 pb-16">
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-2xl">
                            <Zoom>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </Zoom>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}