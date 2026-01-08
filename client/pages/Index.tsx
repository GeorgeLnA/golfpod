import { ArrowRight, Play, GraduationCap, Briefcase, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const hostSectionRef = useRef<HTMLDivElement>(null);
  const hostContainerRef = useRef<HTMLDivElement>(null);
  const episodesSectionRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const developerToolsSectionRef = useRef<HTMLDivElement>(null);
  const beAGuestSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!hostContainerRef.current || !hostSectionRef.current) return;

    const container = hostContainerRef.current;
    const section = hostSectionRef.current;

    // Set will-change for better performance
    gsap.set([container, section], { willChange: "transform, width, padding" });

    // Calculate the offset needed to expand to full width
    const calculateOffset = () => {
      const sectionRect = section.getBoundingClientRect();
      return sectionRect.left;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 95%",
        end: "top 60%",
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Animate container from 70% width to full width, move up
    tl.to(container, {
      width: "100vw",
      maxWidth: "100vw",
      marginLeft: 0,
      marginRight: 0,
      x: () => -calculateOffset(),
      y: -100,
      ease: "sine.inOut",
      duration: 1,
    });

    // Move section up and remove padding simultaneously
    tl.to(
      section,
      {
        paddingLeft: 0,
        paddingRight: 0,
        y: -100,
        ease: "sine.inOut",
        duration: 1,
      },
      0
    );

    // Clean up will-change after animation
    ScrollTrigger.create({
      trigger: section,
      start: "top 10%",
      onEnter: () => {
        gsap.set([container, section], { willChange: "auto" });
      },
    });
  }, { scope: hostSectionRef });
  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-2">
        <div className="w-full flex justify-between items-center">
          <button className="border-[1px] border-white/20 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-light tracking-tight text-[#F5F5F5] hover:text-white hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 ease-out">
            BE A SPONSOR
          </button>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border-[1px] border-white/20 bg-black/40 backdrop-blur-sm px-2 py-1.5 rounded-lg hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out cursor-pointer"
          >
            <div className="flex items-center">
              <img
                src="/fb log white.png"
                alt="FutureBuilt"
                className="h-10 w-auto"
              />
            </div>
          </button>
          <button className="border-[1px] border-white/20 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-light tracking-tight text-[#F5F5F5] hover:text-white hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 ease-out">
            BE A GUEST
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative pt-32 pb-12 px-4 md:px-8">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left: Heading */}
            <div>
              <div className="mb-8">
                <div className="border-[1px] border-[#252525] rounded-lg px-4 py-2 inline-flex items-center gap-2">
                  <span className="text-sm font-medium tracking-tight text-[#F5F5F5]">PODCAST</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight">
                FUTUREBUILT
              </h1>
              <p className="text-lg font-light mt-4 leading-relaxed">
                A media + insights platform spotlighting the founders, developers, innovators, and creators redefining how buildings are imagined, manufactured, and delivered.
              </p>
            </div>

            {/* Right: Featured Links */}
            <div className="flex flex-col gap-4 justify-end">
              {[
                { title: "Modular + off-site manufacturing", date: "Latest", active: true, image: "https://api.builder.io/api/v1/image/assets/TEMP/dfe63c909c8d575d830e1d213e458260de452785?width=610" },
                { title: "Hospitality and amenity innovation", date: "Featured", active: false, image: "https://api.builder.io/api/v1/image/assets/TEMP/51669273274a96f02aa910aac4cff262ceaefcbf?width=610" },
                { title: "Developer strategy and real-world projects", date: "Coming soon", active: false, image: "https://api.builder.io/api/v1/image/assets/TEMP/4f2afe1b3d63ca297123078589102d959e9916e5?width=610" },
              ].map((item, idx) => (
                <div key={idx} className="border-t-[1px] border-[#252525] pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className={`text-base font-light ${item.active ? "text-[#F5F5F5]" : "text-[#F5F5F5]"}`}>
                        {item.title}
                      </p>
                      <p className={`text-xs font-light ${item.active ? "text-[#F5F5F5]" : "text-[#F5F5F5]"}`}>
                        {item.date}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-lg border-[1px] border-[#252525] overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-lg overflow-hidden h-[500px] md:h-[700px]">
            <img
              src="/herooo.jpeg"
              alt="FutureBuilt - Unfiltered conversations and insights"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl md:text-4xl font-medium mb-2 tracking-tight">Watch FutureBuilt</h2>
              <p className="text-3xl md:text-4xl font-medium mb-8 tracking-tight">Unfiltered conversations and insights shaping the next era of modular, off-site, and the built environment.</p>
              <button 
                onClick={() => {
                  episodesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border-[1px] border-white bg-white text-[#070707] px-4 py-2 rounded-lg flex items-center gap-3 text-xs font-light tracking-tight hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out"
              >
                <span>WATCH EPISODES</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24 bg-[#080808]"></div>

      {/* Statement Section */}
      <section ref={aboutSectionRef} className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full">
          {/* ABOUT Badge */}
          <div className="mb-8">
            <div className="border-[1px] border-[#252525] rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-tight text-[#F5F5F5]">ABOUT</span>
            </div>
          </div>
          {/* Text Content */}
          <div className="space-y-6">
            {/* Heading Section */}
            <div className="space-y-3">
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight">
                Where innovation meets real-world building
              </h2>
            </div>

            {/* Divider */}
            <div className="border-t-[1px] border-[#252525] my-8"></div>

            {/* Description Section */}
            <div className="space-y-5">
              <p className="text-base font-light leading-relaxed text-[#F5F5F5]">
                The built environment is changing faster than ever. Off-site manufacturing, modular construction, automation, and new development models are reshaping what's possible for hospitality, housing, and commercial projects.
              </p>
              <p className="text-base font-light leading-relaxed text-[#F5F5F5]">
                FutureBuilt exists to give developers, architects, and industry leaders a direct line to the insights, systems, and stories behind this transformation.
              </p>
              <p className="text-base font-light leading-relaxed text-[#F5F5F5]">
                Through long-form conversations, developer tools, and curated industry intelligence, we highlight what's working, what's emerging, and what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24 bg-[#080808]"></div>

      {/* Developer Tools Section */}
      <section ref={developerToolsSectionRef} className="bg-[#080808] py-16 px-4 md:px-8">
        <div className="w-full">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-4">Developer Tools</h2>
            <p className="text-lg font-light leading-relaxed text-[#F5F5F5]">
              Tools designed to help developers make faster, smarter decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool 1: Amenity ROI Calculator */}
            <div className="border-[1px] border-[#252525] rounded-lg p-8 bg-[#0a0a0a]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight">Amenity ROI Calculator</h3>
              <p className="text-sm font-light leading-relaxed mb-6 text-[#F5F5F5]">
                Quickly evaluate the revenue impact of modular wellness amenities and off-site guest experiences.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>TRY IT NOW</span>
              </button>
            </div>

            {/* Tool 2: Zoning + Entitlement AI Tools */}
            <div className="border-[1px] border-[#252525] rounded-lg p-8 bg-[#0a0a0a]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight">Zoning + Entitlement AI Tools</h3>
              <p className="text-sm font-light leading-relaxed mb-6 text-[#F5F5F5]">
                Speed up feasibility and entitlement assessments with automated intelligence.
              </p>
              <div className="inline-block border-[1px] border-white bg-white px-4 py-3 rounded-lg text-xs font-light tracking-tight text-[#070707]">
                COMING SOON
              </div>
            </div>

            {/* Tool 3: Off-Site Cost Frameworks */}
            <div className="border-[1px] border-[#252525] rounded-lg p-8 bg-[#0a0a0a]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight">Off-Site Cost Frameworks</h3>
              <p className="text-sm font-light leading-relaxed mb-6 text-[#F5F5F5]">
                Benchmark modular and prefab cost structures with clarity.
              </p>
              <div className="inline-block border-[1px] border-white bg-white px-4 py-3 rounded-lg text-xs font-light tracking-tight text-[#070707]">
                COMING SOON
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24 bg-[#080808]"></div>

      {/* Be a Guest Section */}
      <section ref={beAGuestSectionRef} className="bg-white pt-20 pb-[250px] px-4 md:px-8 overflow-hidden">
        <div className="w-full">
          <div className="border-[1px] border-[#252525] rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-12">
            <span className="text-sm font-medium text-[#212121]">NOW ACCEPTING</span>
            <span className="text-sm font-light text-[#212121]">2026 GUEST APPLICATIONS</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6 text-[#212121]">Be a Guest</h2>
              <p className="text-lg font-light leading-relaxed mb-8 text-[#212121]">
                Share your expertise with the FutureBuilt audience.
              </p>
              <p className="text-sm font-light leading-relaxed mb-8 text-[#212121]">
                We feature founders, developers, architects, operators, factory leaders, technologists, and innovators creating what's next in the built world.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Founders", "Developers", "Architects", "Operators", "Factory Leaders", "Technologists"].map((role, idx) => (
                  <span key={idx} className="border-[1px] border-[#252525] px-4 py-2 rounded-lg text-xs font-light text-[#212121]">
                    {role}
                  </span>
                ))}
                  </div>
              <p className="text-sm font-light leading-relaxed mb-8 text-[#212121]">
                If you're shaping a meaningful project or have insights worth sharing, apply below.
              </p>
              <button className="border-[1px] border-[#212121] bg-[#212121] text-white px-6 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight hover:bg-[#2a2a2a] hover:shadow-[0_0_20px_rgba(33,33,33,0.5)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>APPLY TO BE A GUEST</span>
              </button>
                  </div>
            <div className="relative rounded-lg overflow-hidden h-[500px]">
              <img
                src="/macro.jpeg"
                alt="Be a Guest"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Host Section */}
      <section ref={hostSectionRef} className="relative min-h-[737px] px-4 md:px-8 flex items-start pt-0 overflow-x-visible">
        <div className="absolute inset-0 bg-white h-[550px]"></div>
        <div ref={hostContainerRef} className="max-w-[1152px] mx-auto w-[80%] relative">
          <div className="relative rounded-lg overflow-hidden min-h-[699px] bg-[#070707]">
            <div className="p-12 flex flex-col gap-8">
              {/* YOUR HOST Badge */}
              <div className="w-full">
                <div className="border-[1px] border-[#252525] rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-8">
                  <span className="text-sm font-medium tracking-tight text-[#F5F5F5]">YOUR HOST</span>
                </div>
              </div>
              {/* Image Container - Full Width */}
              <div className="w-full">
                <div className="border-[1px] border-[#252525] rounded-lg overflow-hidden w-full">
                  <img
                    src="/244404656_919808368737536_2279108597948611483_n.jpg"
                    alt="Matt Boney"
                    className="w-full h-auto object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
              {/* Text Content - Full Width */}
              <div className="w-full space-y-6">
                {/* Name & Title Section */}
                <div className="space-y-3">
                  <h3 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight">
                    Matt Boney
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-base font-light text-[#F5F5F5]/90">
                    <span>Founder & CEO at Infinite Spa</span>
                    <span className="w-1 h-1 rounded-full bg-[#252525]"></span>
                    <span>Building the future of modular wellness</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t-[1px] border-[#252525] my-8"></div>

                {/* Bio Section */}
                <div className="space-y-5">
                  <p className="text-base font-light leading-relaxed text-[#F5F5F5]">
                    Matt Boney is the founder and CEO of Infinite Spa, pioneering modular wellness amenities for hospitality and residential development. His work sits at the intersection of off-site manufacturing, PropTech, and guest experience innovation.
                  </p>
                  <p className="text-base font-light leading-relaxed text-[#F5F5F5]">
                    Prior to Infinite Spa, Matt Co-Founded Daycation, a VC-backed startup in the hospitality technology space and brings a unique perspective to conversations about the future of the built environment.
                  </p>
                </div>

                {/* Credentials Section */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-[#F5F5F5] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-light text-[#F5F5F5]/90 leading-relaxed">Brown University</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 h-4 text-[#F5F5F5] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-light text-[#F5F5F5]/90 leading-relaxed">Founder & CEO, Infinite Spa</span>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                    <span>CONNECT ON LINKEDIN</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch FutureBuilt Section Header */}
      <section className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full mb-12">
          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-4">Watch FutureBuilt</h2>
          <p className="text-lg font-light leading-relaxed text-[#F5F5F5]">
            Unfiltered conversations with the people shaping the future of building.
          </p>
        </div>
      </section>

      {/* Episodes Section */}
      <section ref={episodesSectionRef} className="bg-[#070707] py-0 px-4 md:px-8">
        <div className="w-full">
          <div className="border-t-[1px] border-[#252525] mb-8"></div>

          {/* Episode 1 */}
          <div className="grid lg:grid-cols-[305px_1fr_305px] gap-8 mb-8 pb-8 border-b-[1px] border-[#252525]">
            <div className="hidden lg:flex bg-[#181818] rounded-lg h-[324px] items-center justify-center relative">
              <span className="text-2xl font-medium text-white tracking-tight">clientlogo</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#F5F5F5]">Episode 01</span>
                <span className="w-1.5 h-1.5 rounded-lg bg-[#252525]"></span>
                <span className="text-xs font-light text-[#F5F5F5]">Modular + off-site</span>
              </div>
              <h3 className="text-3xl font-light leading-tight mb-6 tracking-tight">
                Modular manufacturing
                <br />
                and factory workflows
              </h3>
              <p className="text-xs font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Exploring the future of off-site manufacturing,
                <br />
                modular construction, and factory technology.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>WATCH EPISODE</span>
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[324px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dfe63c909c8d575d830e1d213e458260de452785?width=610"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070707]"></div>
              <span className="absolute top-4 right-4 text-lg font-light text-[#F5F5F5]">01</span>
            </div>
          </div>

          {/* Episode 2 */}
          <div className="grid lg:grid-cols-[305px_1fr_305px] gap-8 mb-8 pb-8 border-b-[1px] border-[#252525]">
            <div className="hidden lg:flex bg-white rounded-lg h-[324px] items-center justify-center relative">
              <span className="text-2xl font-medium text-[#070707] tracking-tight">clientlogo</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#F5F5F5]">Episode 02</span>
                <span className="w-1.5 h-1.5 rounded-lg bg-[#252525]"></span>
                <span className="text-xs font-light text-[#F5F5F5]">Hospitality</span>
              </div>
              <h3 className="text-3xl font-light leading-tight mb-6 tracking-tight">
                Hospitality innovation
                <br />
                and amenity strategy
              </h3>
              <p className="text-xs font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Deep dive into modular wellness amenities and
                <br />
                how off-site guest experiences are transforming
                <br />
                the hospitality industry.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>WATCH EPISODE</span>
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[324px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/51669273274a96f02aa910aac4cff262ceaefcbf?width=610"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070707]"></div>
              <span className="absolute top-4 right-4 text-lg font-light text-[#F5F5F5]">02</span>
            </div>
          </div>

          {/* Episode 3 */}
          <div className="grid lg:grid-cols-[305px_1fr_305px] gap-8 mb-8 pb-8 border-b-[1px] border-[#252525]">
            <div className="hidden lg:flex bg-[#D62504] rounded-lg h-[324px] items-center justify-center relative">
              <span className="text-2xl font-medium text-white tracking-tight">clientlogo</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#F5F5F5]">Episode 03</span>
                <span className="w-1.5 h-1.5 rounded-lg bg-[#252525]"></span>
                <span className="text-xs font-light text-[#F5F5F5]">Developer strategy</span>
              </div>
              <h3 className="text-3xl font-light leading-tight mb-6 tracking-tight">
                Developer strategy
                <br />
                and real-world projects
              </h3>
              <p className="text-xs font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Real conversations with developers breaking ground
                <br />
                on next-generation communities, hotels, and
                <br />
                off-site projects.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>WATCH EPISODE</span>
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[324px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4f2afe1b3d63ca297123078589102d959e9916e5?width=610"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#110000]/0 via-[#110000]/0 to-[#110000]"></div>
              <span className="absolute top-4 right-4 text-lg font-light text-[#F5F5F5]">03</span>
            </div>
          </div>

          {/* Episode 4 */}
          <div className="grid lg:grid-cols-[305px_1fr_305px] gap-8 mb-8 pb-8 border-b-[1px] border-[#252525]">
            <div className="hidden lg:flex bg-[#5D25E0] rounded-lg h-[324px] items-center justify-center relative">
              <span className="text-2xl font-medium text-white tracking-tight">clientlogo</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#F5F5F5]">Episode 04</span>
                <span className="w-1.5 h-1.5 rounded-lg bg-[#252525]"></span>
                <span className="text-xs font-light text-[#F5F5F5]">Housing & communities</span>
              </div>
              <h3 className="text-3xl font-light leading-tight mb-6 tracking-tight">
                Housing, communities,
                <br />
                and alternative building formats
              </h3>
              <p className="text-xs font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Exploring new models for housing development,
                <br />
                community planning, and alternative building formats
                <br />
                that are reshaping the residential market.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>WATCH EPISODE</span>
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[324px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5d6fb6fa20a01cec195146d5ee0218ef6bda9038?width=610"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070707]"></div>
              <span className="absolute top-4 right-4 text-lg font-light text-[#F5F5F5]">04</span>
            </div>
          </div>

          {/* Episode 5 */}
          <div className="grid lg:grid-cols-[305px_1fr_305px] gap-8 mb-12 pb-8 border-b-[1px] border-[#252525]">
            <div className="hidden lg:flex bg-[#181818] rounded-lg h-[324px] items-center justify-center relative">
              <span className="text-2xl font-medium text-white tracking-tight">clientlogo</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-[#F5F5F5]">Episode 05</span>
                <span className="w-1.5 h-1.5 rounded-lg bg-[#252525]"></span>
                <span className="text-xs font-light text-[#F5F5F5]">Logistics & financing</span>
              </div>
              <h3 className="text-3xl font-light leading-tight mb-6 tracking-tight">
                Logistics, financing,
                <br />
                and system-level thinking
              </h3>
              <p className="text-xs font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Deep dive into the systems, logistics, and financing
                <br />
                models that enable modular and off-site construction
                <br />
                at scale.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>WATCH EPISODE</span>
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[324px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8c080dbbb198d65cb11fba4b737dec1773c4a877?width=610"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070707]"></div>
              <span className="absolute top-4 right-4 text-lg font-light text-[#F5F5F5]">05</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 bg-[#070707]"></div>

      {/* Newsletter Section */}
      <section className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">Stay ahead of the future of building.</h2>
              <p className="text-lg font-light leading-relaxed text-[#F5F5F5]">
                Join developers, architects, and innovators receiving modular/off-site insights, industry breakdowns, and FutureBuilt updates.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border-[1px] border-[#252525] bg-[#232323] px-4 py-3 rounded-lg text-sm font-light text-[#F5F5F5] placeholder:text-[#F5F5F5]/60 focus:outline-none focus:border-[1px] focus:border-[#F5F5F5] transition-colors"
                />
                <button className="border-[1px] border-white bg-white text-[#070707] px-6 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                  <span>SUBSCRIBE</span>
                  </button>
              </div>
            </div>
          </div>
            </div>
      </section>

      {/* Infinite Spa Section */}
      <section className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full">
          <div className="border-[1px] border-[#252525] rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-12">
            <span className="text-sm font-medium tracking-tight text-[#F5F5F5]">POWERED BY</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
                <div>
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">Infinite Spa</h2>
              <p className="text-lg font-light leading-relaxed mb-6 text-[#F5F5F5]">
                Turnkey modular wellness suites designed for boutique hotels, resorts, and destination properties.
              </p>
              <p className="text-sm font-light leading-relaxed mb-8 text-[#F5F5F5]">
                A modular amenity that increases ADR, drives occupancy, and installs in a single day.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] transition-colors">
                <span>LEARN MORE</span>
                  </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[500px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/67ed5901b5d88d7fc811bb6c6a80cf1dd1da0871?width=756"
                alt="Infinite Spa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor 2 Section */}
      <section className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative rounded-lg overflow-hidden h-[500px] order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/67ed5901b5d88d7fc811bb6c6a80cf1dd1da0871?width=756"
                alt="Sponsor 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">Sponsor 2</h2>
              <p className="text-lg font-light leading-relaxed mb-6 text-[#F5F5F5]">
                Innovative solutions for the modern built environment.
              </p>
              <p className="text-sm font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Transforming the way buildings are designed, constructed, and operated.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 bg-[#070707]"></div>

      {/* Sponsor 3 Section */}
      <section className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">Sponsor 3</h2>
              <p className="text-lg font-light leading-relaxed mb-6 text-[#F5F5F5]">
                Leading innovation in sustainable construction and development.
              </p>
              <p className="text-sm font-light leading-relaxed mb-8 text-[#F5F5F5]">
                Empowering the next generation of builders and developers.
              </p>
              <button className="border-[1px] border-white bg-white text-[#070707] px-4 py-3 rounded-lg flex items-center gap-4 text-xs font-light tracking-tight w-fit hover:bg-[#F5F5F5] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                <span>LEARN MORE</span>
              </button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[500px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/67ed5901b5d88d7fc811bb6c6a80cf1dd1da0871?width=756"
                alt="Sponsor 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070707] py-16 px-4 md:px-8">
        <div className="w-full">
          {/* Mobile Footer - Hidden on md and up */}
          <div className="md:hidden">
            {/* Mobile Logo */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-medium leading-none tracking-tight mb-6">
                FUTUREBUILT
              </h2>
            </div>

            {/* Mobile Navigation - Vertical Stack */}
            <nav className="flex flex-col gap-4 mb-8">
              <button
                onClick={() => {
                  heroSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-center text-sm font-medium text-[#F5F5F5] hover:text-white hover:pl-2 transition-all duration-500 ease-out py-2 border-b-[1px] border-[#252525]"
              >
                Homepage
              </button>
              <button
                onClick={() => {
                  aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-center text-sm font-medium text-[#F5F5F5] hover:text-white hover:pl-2 transition-all duration-500 ease-out py-2 border-b-[1px] border-[#252525]"
              >
                About
              </button>
              <button
                onClick={() => {
                  episodesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-center text-sm font-medium text-[#F5F5F5] hover:text-white hover:pl-2 transition-all duration-500 ease-out py-2 border-b-[1px] border-[#252525]"
              >
                Watch Episodes
              </button>
              <button
                onClick={() => {
                  developerToolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-center text-sm font-medium text-[#F5F5F5] hover:text-white hover:pl-2 transition-all duration-500 ease-out py-2 border-b-[1px] border-[#252525]"
              >
                Developer Tools
              </button>
              <button
                onClick={() => {
                  beAGuestSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-center text-sm font-medium text-[#F5F5F5] hover:text-white hover:pl-2 transition-all duration-500 ease-out py-2 border-b-[1px] border-[#252525]"
              >
                Be a Guest
              </button>
            </nav>

            {/* Mobile Contact Info - Stacked */}
            <div className="flex flex-col gap-4 mb-8">
              <a href="mailto:info@futurebuilt.com" className="text-sm font-medium text-[#F5F5F5] hover:text-white transition-colors text-center">
                info@futurebuilt.com
              </a>
              <a href="tel:+1234567890" className="text-sm font-medium text-[#F5F5F5] hover:text-white transition-colors text-center">
                +1 (234) 567-890
              </a>
            </div>

            {/* Mobile Social Links - Centered */}
            <div className="flex justify-center gap-3 mb-8">
              <a
                href="https://www.linkedin.com/company/futurebuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#F5F5F5]" />
              </a>
              <a
                href="https://twitter.com/futurebuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-[#F5F5F5]" />
              </a>
              <a
                href="https://www.instagram.com/futurebuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#F5F5F5]" />
              </a>
              <a
                href="https://www.youtube.com/@futurebuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-[#F5F5F5]" />
              </a>
            </div>

            {/* Mobile Bottom Border */}
            <div className="border-t-[1px] border-[#252525] pt-4">
              <div className="flex flex-wrap justify-center gap-4 text-xs font-light text-[#F5F5F5]">
                <a href="#" className="text-[#F5F5F5] hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
                <a href="#" className="text-[#F5F5F5] hover:text-white transition-colors whitespace-nowrap">Terms and Conditions</a>
              </div>
            </div>
          </div>

          {/* Desktop Footer - Hidden on mobile, shown on md and up */}
          <div className="hidden md:block">
            {/* Large Logo */}
            <h2 className="text-center text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[240px] font-medium leading-none tracking-[-0.02em] mb-16 whitespace-nowrap overflow-hidden">
              FUTUREBUILT
            </h2>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-medium text-[#F5F5F5]">
            <button
              onClick={() => {
                heroSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-[#F5F5F5] hover:text-white hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
            >
              Homepage
            </button>
            <button
              onClick={() => {
                aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-[#F5F5F5] hover:text-white hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => {
                episodesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-[#F5F5F5] hover:text-white hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
            >
              Watch Episodes
            </button>
            <button
              onClick={() => {
                developerToolsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-[#F5F5F5] hover:text-white hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
            >
              Developer Tools
            </button>
            <button
              onClick={() => {
                beAGuestSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-[#F5F5F5] hover:text-white hover:scale-110 transition-all duration-500 ease-out cursor-pointer"
            >
              Be a Guest
            </button>
            </nav>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mb-24 text-xs font-medium text-[#F5F5F5]">
              <a href="mailto:info@futurebuilt.com" className="text-[#F5F5F5] hover:text-white transition-colors">
                info@futurebuilt.com
              </a>
              <a href="tel:+1234567890" className="text-[#F5F5F5] hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            {/* Bottom Border */}
            <div className="border-t-[1px] border-[#252525] pt-2">
              <div className="flex flex-nowrap justify-between items-center gap-4 text-xs font-light text-[#F5F5F5]">
                <div className="flex gap-6 items-center flex-nowrap">
                  <a href="#" className="text-[#F5F5F5] hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
                  <a href="#" className="text-[#F5F5F5] hover:text-white transition-colors whitespace-nowrap">Terms and Conditions</a>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/company/futurebuilt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[#F5F5F5]" />
                  </a>
                  <a
                    href="https://twitter.com/futurebuilt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-[#F5F5F5]" />
                  </a>
                  <a
                    href="https://www.instagram.com/futurebuilt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-[#F5F5F5]" />
                  </a>
                  <a
                    href="https://www.youtube.com/@futurebuilt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border-[1px] border-[#252525] flex items-center justify-center hover:bg-white/5 hover:border-white/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-[#F5F5F5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
