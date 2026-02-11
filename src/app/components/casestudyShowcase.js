import Image from "next/image";
import Link from "next/link";

function CasestudyShowcase() {
  return (
    <div id="work">
      <div className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-16 auto-rows-fr">
            {/* <div className="grid grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
                <div className="grid-col-1 flex content-center justify-start overflow-hidden">
                  <Image src="/offersThumb.png" alt="Streamlining the offer management experience for Rakuten Advertising" width={0} height={0} sizes="100vw" style={{ width: '150%', height: 'auto', maxWidth: '1200px', objectFit: "contain" }} />
                </div>
              </div>            
              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div className="text-sm font-medium uppercase text-gray-600">Rakuten Advertising</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">From Concept to Production in 3 Months</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                Prototyped a new experience in 5 days, secured stakeholder buy-in, helped ship the MVP in 3 months under extreme constraints.
                </p>
                <Link href="casestudy/InfluencerCampaigns" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div> */}
            {/* <div className="grid grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
                <div className="grid-col-1 flex content-center justify-start overflow-hidden">
                  <Image src="/offersThumb.png" alt="Streamlining the offer management experience for Rakuten Advertising" width={1200} height={800} sizes="100vw" style={{ width: '150%', height: 'auto', maxWidth: '1200px', objectFit: "contain" }} />
                </div>
              </div>            
              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div className="text-sm font-medium uppercase text-gray-600">Rakuten Advertising</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Natural Language Report Generation</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                Reduced report creation time by 90% through intelligent search—balancing natural language queries with structured controls for 1,000+ advertisers.
                </p>
                <Link href="casestudy/Prompt" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div> */}
            {/* <div className="grid grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
                <div className="grid-col-1 flex content-center justify-start overflow-hidden">
                  <Image src="/offersThumb.png" alt="Streamlining the offer management experience for Rakuten Advertising" width={1200} height={800} sizes="100vw" style={{ width: '150%', height: 'auto', maxWidth: '1200px', objectFit: "contain" }} />
                </div>
              </div>            
              <div className="grid grid-cols-1 justify-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div className="text-sm font-medium uppercase text-gray-600">Rakuten Advertising</div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700">Multi-Touch Attribution for Affiliate Marketing</h2>
                <p className="pb-4 text-base font-medium text-gray-700 dark:text-gray-400">
                Designed full-funnel attribution tool that helped publishers prove value beyond last-click.
                </p>
                <Link href="casestudy/ACJ" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div> */}

<div className="grid h-full grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-10">
  <div className="relative overflow-hidden md:order-last md:overflow-visible md:pl-10">
    <div className="flex h-[20rem] items-end md:absolute md:inset-0 md:h-full overflow-hidden">
      <Image
        src="/ACJ-hero.png"
        alt="Publishers couldn't prove their early-funnel value. Multi-touch attribution would help prove there value."
        width={1200}
        height={800}
        className="h-full w-auto max-w-none"
      />
    </div>
  </div>
  <div className="grid grid-cols-1 content-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
    <div>
      <div className="text-sm font-medium uppercase text-purple-600">Rakuten Advertising</div>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700">Multi-Touch Attribution for Affiliate</h2>
    </div>
    <p className="text-base font-medium text-gray-700 dark:text-gray-400">
      Publishers couldn't prove their early-funnel value. Multi-touch attribution would help prove there value.
    </p>
    <Link href="/casestudy/ACJ" className="self-start">
      <button
        className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg"
        type="button"
      >
        Read case study
      </button>
    </Link>
  </div>
</div>
            <div className="grid h-full grid-cols-1 gap-8 rounded-2xl bg-purple-100 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
                <div className="grid-col-1 flex content-center justify-start overflow-hidden">
                  <Image
                    src="/offersThumb.png"
                    alt="Streamlining the offer management experience for Rakuten Advertising"
                    width={1200}
                    height={800}
                    sizes="100vw"
                    style={{ width: '150%', height: 'auto', maxWidth: '1200px', objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 content-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div>
                  <div className="text-sm font-medium uppercase text-purple-600">Rakuten Advertising</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700">Enhancing offer management</h2>
                </div>
                <p className="text-base font-medium text-gray-700 dark:text-gray-400">
                  Reimagining how users manage offers. I crafted a solution that simplifies workflows and elevates visibility.
                </p>
                <Link href="/casestudy/Rakuten" className="self-start">
                  <button
                    className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg"
                    type="button"
                  >
                    Read case study
                  </button>
                </Link>
              </div>
            </div>


            <div className="grid h-full grid-cols-1 gap-8 rounded-2xl bg-yellow-50 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible md:order-last md:pl-10">
                <div className="relative inset-0 h-[20rem] overflow-hidden md:absolute md:h-full">
                  <Image
                    src="/sm_tools.png"
                    alt="Creating a tool hire app in 48 hours"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 content-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div>
                  <div className="text-sm font-medium uppercase text-yellow-600">Designflows 2021</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700">Creating a tool hire app in 48 hours</h2>
                </div>
                <p className="text-base font-medium text-gray-700 dark:text-gray-400">
                  A fast-paced design sprint from concept to high-fidelity mocks—testing my skills, creativity, and adaptability under pressure.
                </p>
                <Link href="/casestudy/DesignFlows" className="self-start">
                  <button className="rounded-xl border border-gray-300 bg-white/65 px-8 py-4 text-base font-medium text-gray-600 shadow-md transition-all hover:bg-white/35 hover:shadow-lg" type="button">
                    Read case study
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid h-full grid-cols-1 gap-8 rounded-2xl bg-emerald-50 md:grid-cols-2 md:gap-10">
              <div className="grid-col-1 relative grid content-center overflow-visible pt-10 md:order-last md:pl-10">
                <div className="relative inset-0 h-[20rem] overflow-hidden md:absolute md:h-full">
                  <Image
                    src="/brewtiful24.png"
                    alt="Creating an engaging craft beer blog &amp blog"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 content-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10">
                <div>
                  <div className="text-sm font-medium uppercase text-emerald-600">Brewtiful</div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700">Creating an engaging craft beer brand &amp; blog</h2>
                </div>
                <p className="text-base font-medium text-gray-700 dark:text-gray-400">
                  A passion project taking a craft beer community blog through the full UX process — I still hope to bring this to life one day.
                </p>
                <Link href="/casestudy/Brewtiful" className="self-start">
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