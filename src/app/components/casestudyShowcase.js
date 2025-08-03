import Image from "next/image";
import Link from "next/link";

function CasestudyShowcase() {
  return (
    <div id="work">
      <div className="py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="space-y-16">
            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
                <div className="grid-col-1 flex content-center justify-start overflow-hidden">
                  <Image src="/offersThumb.png" alt="Streamlining the offer management experience for Rakuten Advertising" width={0} height={0} sizes="100vw" style={{ width: '150%', height: 'auto', maxWidth: '1200px', objectFit: "contain" }} />
                </div>
              </div>

              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div className="text-sm font-medium uppercase text-gray-600">Rakuten Advertising</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Enhancing offer management</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                  Reimagining how users manage offers. I crafted a solution that simplifies workflows and elevates visibility.
                </p>
                <Link href="casestudy/Rakuten" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-yellow-50 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
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

              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div className="text-sm font-medium uppercase text-gray-600">Designflows 2021</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Creating a tool hire app in 48 hours</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                  A fast-paced design sprint from concept to high-fidelity mocks—testing my skills, creativity, and adaptability under pressure.
                </p>
                <Link href="/casestudy/DesignFlows" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-emerald-50 md:grid-cols-2 md:gap-10">
            <div className="grid-col-1 relative grid content-center overflow-visible pt-10 md:order-last md:pl-10">
                <div className="relative inset-0 h-[20rem] overflow-hidden md:absolute md:h-full">
                  <Image
                    src="/brewtiful24.png"
                    alt="Creating an engaging craft beer blog &amp blog"
                    layout="fill"
                    objectFit="contain"
                    className="absolute left-1/2 top-1/2 min-h-full min-w-full"
                  />
                </div>
              </div>            

              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div className="text-sm font-medium uppercase text-gray-600">Brewtiful</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Creating an engaging craft beer brand &amp; blog</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                  A passion project taking a craft beer community blog through the full UX process — I still hope to bring this to life one day.
                </p>
                <Link href="casestudy/Brewtiful" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
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