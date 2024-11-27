// CasestudyShowcase.js

import Image from "next/image";
import Link from "next/link";

function CasestudyShowcase() {
  return (
    <div id="work">
      <div className="bg-[radial-gradient(154.86%_76.83%_at_50%_22.26%)] py-16">
        <div className="container mx-auto max-w-screen-lg px-4">          
          <div className="space-y-16">
            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-20">
              <div className="grid-col-1 relative grid content-end overflow-visible px-8 py-8 md:px-0 md:py-0 md:pl-20 md:pt-20">
                <div className="relative inset-0 overflow-hidden md:absolute">
                  <Image src="/offersThumb.png" alt="Streamlining the offer management experience" className="left-1/2 top-1/2 min-h-full min-w-full md:pl-8 md:pt-8" layout="fill" objectFit="cover" priority={false} />
                </div>
              </div>

              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-20 md:pr-20">
                <div className="text-sm font-medium uppercase text-gray-600">Rakuten Advertising</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Improving offer management</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                  Taking an existing product and bringing forward with a new vision requires care and attention. Working closely with users I was able to carefully craft a new experience to bring the Affiliate marketing dashboard experience to a completely new level.
                </p>
                <Link href="casestudy/Rakuten" className="self-start">
                  <button className="rounded-xl bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-yellow-50 md:grid-cols-2 md:gap-20">
            <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-20">
  <div className="relative inset-0 h-[20rem] overflow-hidden md:absolute md:h-full">
    <Image 
      src="/sm_tools.png" 
      alt="Creating a tool hire app in 48 hours" 
      layout="fill"
      objectFit="cover"
      className="absolute left-1/2 top-1/2 min-h-full min-w-full"
    />
  </div>
</div>

              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-20 md:pl-20">
                <div className="text-sm font-medium uppercase text-gray-600">Designflows 2021</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Creating a tool hire app in 48 hours</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                  A fast paced project that saw my skills tested in an extremely tight timeframe. From concept to high fidelety mocks, this project was both fun and exciting as well as helping me grow as a designer.
                </p>
                <Link href="/casestudy/DesignFlows" className="self-start">
                <button className="rounded-xl bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                Read case study
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-emerald-50 md:grid-cols-2 md:gap-20">
              <div className="grid-col-1 grid content-center overflow-visible pl-20">
                <Image src="/brewtiful24.png" width={0} height={0} alt="Creating a beatiful and engaging craft beer brand and blog" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>

              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-20 md:pr-20">
                <div className="text-sm font-medium uppercase text-gray-600">Brewtiful</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Creating a beatiful and engaging craft beer brand and blog</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                  A personal project that saw the of a blog based craft beer community go through all the stage of the UX process. I still hope to bring this project to a live deployment one day.
                </p>
                <Link href="/casestudy/Brewtiful" className="self-start">
                <button className="rounded-xl bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                Read case study
                  </button>
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasestudyShowcase;