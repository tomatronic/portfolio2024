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
        <div className="pt-16 md:pt-16">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight text-slate-950 md:text-3xl xl:text-4xl">
                    Extra Pixels
                </h1>
                <p className="mx-auto max-w-xl text-balance pb-16 pt-4 text-center text-base text-slate-950 dark:text-gray-400">
                    Smaller projects and experiments.
                </p>
                
                <div className="grid grid-cols-4 gap-4 px-4 pb-16">
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
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