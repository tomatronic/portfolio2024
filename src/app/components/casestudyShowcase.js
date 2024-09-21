import caseStudies from "./casestudies";
import Presentation from "./casestudyCard";

function CasestudyShowcase() {
  return (
    <>
      <div className="mb-16" id="work">
        <div className="py-40 md:pt-20 bg-gray-100" style={{ boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1)" }}>
          <div className="container max-w-screen-xl mx-auto">
            <h1 className="text-center text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">Case Studies</h1>
            <p className="max-w-xl mx-auto pt-4 pb-32 mb-10 text-center font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-balance">A small curated collection of some of my favorite projects.</p>

            <div className="grid grid-cols-1 gap-y-96 gap-0 max-w-screen-xl mx-auto">
              {caseStudies.slice(0, 3).map((study, i) => (
                <div
                  key={study.link}
                  className={`flex gap-20 items-center justify-between group row-span-1 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <Presentation
                    key={study.link}
                    tag={study.tag}
                    title={study.title}
                    blurb={study.blurb}
                    img={study.img}
                    link={study.link}
                  />
                </div>
              ))}
            </div>            
          </div>
        </div>
      </div>
    </>
  );
}

export default CasestudyShowcase;