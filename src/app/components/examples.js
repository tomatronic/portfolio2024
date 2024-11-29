
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default function ExampleGallery() {
    return (
        <div>
        <div className="pt-16 md:pt-16">
          <div className="container mx-auto max-w-screen-lg">
          <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight text-gray-100 md:text-3xl xl:text-4xl">Extra Pixels</h1>
          <p className="mx-auto max-w-xl text-balance pb-16 pt-4 text-center text-base text-gray-100 dark:text-gray-400">A collection of personal projects.</p>
<div className="grid grid-cols-2 gap-4 px-4 pb-16 md:grid-cols-4">
    <div className="grid gap-4">
        <div>        
            <Image className="h-auto max-w-full rounded-lg" src="/236x300.png" alt="" width={472} height={600} />
        </div>
        <div>
            <Zoom>
                <Image src="/donutmock.png" alt="Concept delivery app for a fictional donut company" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        </div>
        <div>
            <Zoom>
                <Image className="h-auto max-w-full rounded-lg" src="/236x236.png" alt="" width={472} height={472}  />
            </Zoom>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/236x236.png" alt="" width={472} height={472}  />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/236x300.png" alt="" width={472} height={600} />
        </div>
        <div>
        <Zoom>
                <Image src="/404.png" alt="404 page illustration iteration" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/236x300.png" alt="" width={472} height={600} />
        </div>
        <Zoom>
                <Image src="/todoList.gif" alt="Tom Spencer - Senior UX Designer" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/236x236.png" alt="" width={472} height={472} />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/236x175.png" alt="" width={472} height={350}/>
        </div>
        <div>
        <Zoom>
                <Image src="/beerapp.gif" alt="Tom Spencer - Senior UX Designer" width={1000} height={728} className="h-auto max-w-full rounded-lg" />
            </Zoom>
        </div>
        <div>
        <Zoom>
            <Image className="h-auto max-w-full rounded-lg" src="/236x175.png" alt="" width={236} height={350} />
        </Zoom>
        </div>
    </div>
</div>
</div>
</div>
</div>
);
}