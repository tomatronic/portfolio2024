
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default function ExampleGallery() {
    return (
        <div className="mb-16">
        <div className="pt-16 md:pt-16">
          <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">Extra Pixels</h1>
          <p className="mx-auto max-w-xl text-balance pb-16 pt-4 text-center text-base text-gray-500 dark:text-gray-400">A collection of personal projects.</p>
<div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4">
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