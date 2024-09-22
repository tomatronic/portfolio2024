
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default function ExampleGallery() {
    return (
        <div className="mb-16">
        <div className="pt-40 md:pt-20">
          <div className="container max-w-screen-xl mx-auto pt-20">
          <h1 className="text-center text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">Extra Pixels</h1>
          <p className="max-w-xl mx-auto pt-4 pb-32 mb-10 text-center font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-balance">Examples of ideas and projects in gallery form.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>        
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
        </div>
        <div>
            <Zoom>
                <Image src="/donutmock.png" alt="Concept delivery app for a fictional donut company" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
        </div>
        <div>
        <Zoom>
                <Image src="/404.png" alt="404 page illustration iteration" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
        </div>
        <Zoom>
                <Image src="/todoList.gif" alt="Tom Spencer - Senior UX Designer" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        <div>
        <Zoom>
                <Image src="/beerapp.gif" alt="Tom Spencer - Senior UX Designer" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
    </div>
</div>
</div>
</div>
</div>
);
}