import { ArrowRight, Download, Menu, X } from "lucide-react";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery-images";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  const useCasesSectionRef = useRef<HTMLDivElement>(null);
  const economicsSectionRef = useRef<HTMLDivElement>(null);
  const configurationsSectionRef = useRef<HTMLDivElement>(null);
  const whyModularSectionRef = useRef<HTMLDivElement>(null);
  const processSectionRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  // showcaseGallery uses 0-15 (16 images) - keep unchanged
  const showcaseGallery = [
    ...galleryImages.slice(0, 13),
    { ...galleryImages[13], className: "sm:col-span-2" },
    { ...galleryImages[14], className: "sm:col-span-3" },
    { ...galleryImages[15], className: "sm:col-span-4" },
  ];
  // All other galleries use unique images - no overlaps between non-showcase galleries
  const introGallery = [
    galleryImages[16],
    galleryImages[17],
    galleryImages[18],
    galleryImages[19],
  ];
  const problemGallery = [
    galleryImages[20],
    galleryImages[21],
    galleryImages[22],
  ];
  const solutionGallery = [
    galleryImages[23],
    galleryImages[24],
    galleryImages[25],
  ];
  const useCasesGallery = [
    galleryImages[15],
    galleryImages[9],
    galleryImages[13],
  ];
  const economicsGallery = [
    galleryImages[29],
    galleryImages[30],
  ];
  // These reuse some showcaseGallery images but are unique from each other
  const configurationsGallery = [
    galleryImages[0],
    galleryImages[1],
  ];
  const whyModularGallery = [
    galleryImages[2],
    galleryImages[3],
    galleryImages[4],
  ];
  const processGallery = [
    galleryImages[5],
    galleryImages[6],
    galleryImages[7],
  ];
  const ctaGallery = [
    galleryImages[8],
  ];

  return (
    <div className="min-h-screen bg-[#faf2dc] text-[#070707]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-2">
        <div className="w-full max-w-[1400px] mx-auto relative flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="border-[1px] border-gray-300 bg-[#faf2dc] px-4 py-3 rounded-lg hover:border-gray-400 hover:shadow-[0_0_15px_rgba(250,242,220,0.2)] transition-all duration-500 ease-out cursor-pointer h-[46px] flex items-center"
          >
            <span className="text-sm md:text-base font-light tracking-tight text-[#070707]">GolfPod</span>
          </button>

          {/* Navigation Island - Desktop Only */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-4 border-[1px] border-gray-300 bg-[#faf2dc] px-4 py-3 rounded-lg h-[46px]">
              <nav className="flex items-center gap-6">
                <button
                  onClick={() => {
                    problemSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-sm font-light tracking-tight text-[#070707] hover:text-black transition-all duration-500 ease-out"
                >
                  THE PROBLEM
          </button>
                <button
                  onClick={() => {
                    solutionSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-sm font-light tracking-tight text-[#070707] hover:text-black transition-all duration-500 ease-out"
                >
                  THE SOLUTION
                </button>
                <button
                  onClick={() => {
                    useCasesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-sm font-light tracking-tight text-[#070707] hover:text-black transition-all duration-500 ease-out"
                >
                  USE CASES
                </button>
                <button
                  onClick={() => {
                    economicsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-sm font-light tracking-tight text-[#070707] hover:text-black transition-all duration-500 ease-out"
                >
                  ECONOMICS
                </button>
              </nav>
        </div>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center gap-2 md:gap-0">
            {/* Mobile CTA Button */}
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setMobileMenuOpen(false);
              }}
              className="md:hidden border-[1px] border-gray-300 bg-[#3F6B4F] text-white px-3 py-3 rounded-lg text-xs font-light tracking-tight hover:bg-[#2d4f3a] transition-all duration-500 ease-out whitespace-nowrap h-[46px] flex items-center"
            >
              REQUEST PRICING
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden border-[1px] border-gray-300 bg-[#faf2dc] p-2 rounded-lg hover:border-gray-400 transition-all duration-500 ease-out h-[46px] w-[46px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#070707]" />
              ) : (
                <Menu className="w-5 h-5 text-[#070707]" />
              )}
            </button>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <button 
                onClick={() => {
                  ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border-[1px] border-gray-300 bg-[#3F6B4F] text-white px-6 py-3 rounded-lg text-sm font-light tracking-tight hover:bg-[#2d4f3a] hover:border-gray-400 hover:shadow-[0_0_15px_rgba(63,107,79,0.2)] transition-all duration-500 ease-out whitespace-nowrap h-[46px] flex items-center"
              >
                REQUEST PRICING
              </button>
                </div>
              </div>
            </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf2dc] border-t border-gray-300 shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              <button
                onClick={() => {
                  problemSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm font-light tracking-tight text-[#070707] hover:text-black py-2 px-4 rounded-lg hover:bg-[#faf2dc]/80 transition-all duration-500 ease-out"
              >
                THE PROBLEM
              </button>
              <button
                onClick={() => {
                  solutionSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm font-light tracking-tight text-[#070707] hover:text-black py-2 px-4 rounded-lg hover:bg-[#faf2dc]/80 transition-all duration-500 ease-out"
              >
                THE SOLUTION
              </button>
              <button
                onClick={() => {
                  useCasesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm font-light tracking-tight text-[#070707] hover:text-black py-2 px-4 rounded-lg hover:bg-[#faf2dc]/80 transition-all duration-500 ease-out"
              >
                USE CASES
              </button>
              <button
                onClick={() => {
                  economicsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm font-light tracking-tight text-[#070707] hover:text-black py-2 px-4 rounded-lg hover:bg-[#faf2dc]/80 transition-all duration-500 ease-out"
              >
                ECONOMICS
              </button>
            </nav>
                    </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative pt-24 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Hero Video with padding and rounded corners */}
          <div className="relative rounded-lg overflow-hidden h-[500px] md:h-[600px] mb-8">
            <video
              src="/Do_a_showcase_202601171650_umjhq.mov"
              autoPlay
              loop
              muted
              playsInline
                        className="w-full h-full object-cover"
                      />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-3 text-center text-white">
                MODULAR GOLF PODS
              </h2>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="border-[1px] border-[#faf2dc] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(250,242,220,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out">
                  <span>REQUEST PRICING & LAYOUTS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-[1px] border-[#3F6B4F] bg-[#3F6B4F] text-white px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#2d4f3a] hover:border-[#2d4f3a] hover:shadow-[0_0_20px_rgba(63,107,79,0.4)] transition-all duration-500 ease-out">
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD SPEC SHEET</span>
              </button>
                    </div>
                  </div>
                </div>
            </div>
      </section>

      {/* Text Content Section */}
      <section className="bg-[#faf2dc] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
            Turn Underutilized Land Into Year-Round Revenue.
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-6 max-w-3xl">
            Modular, climate-controlled golf pod solutions that expand member engagement, unlock off-season monetization, and deploy in months — not years.
          </p>
          <p className="text-base font-light leading-relaxed text-[#070707]/90 max-w-3xl">
            Designed for golf courses, private clubs, resorts, and mixed-use developments seeking high-ROI amenities without permanent construction risk.
                      </p>
          <GalleryGrid
            images={introGallery}
            className="mt-10"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              className="border-[1px] border-[#3F6B4F] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(63,107,79,0.3)] hover:border-[#2d4f3a] hover:scale-[1.02] transition-all duration-500 ease-out"
              >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>
      </section>


      {/* Problem Section */}
      <section ref={problemSectionRef} className="bg-[#faf2dc] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-gray-300 rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-tight text-[#070707]">THE PROBLEM</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
            Traditional Golf Expansion Is Slow, Risky, and Capital Heavy
              </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Permanent builds require:</h3>
              <ul className="space-y-4 text-base font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Long entitlement cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>High construction risk and overruns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Permanent land commitments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Limited flexibility if demand shifts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Weather-driven seasonality constraints</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">At the same time, operators face:</h3>
              <ul className="space-y-4 text-base font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Declining shoulder-season utilization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Pressure to increase member value and retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Rising operating costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-2">•</span>
                  <span>Demand for experiential, tech-enabled amenities</span>
                </li>
              </ul>
            </div>
          </div>

          <GalleryGrid
            images={problemGallery}
            className="mt-12"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-[1px] border-[#3F6B4F] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(63,107,79,0.3)] hover:border-[#2d4f3a] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* Solution Section */}
      <section ref={solutionSectionRef} className="bg-[#3F6B4F] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-[#faf2dc] rounded-lg px-4 py-2 inline-flex items-center gap-2 bg-[#faf2dc]">
              <span className="text-sm font-medium tracking-tight text-[#070707]">THE SOLUTION</span>
          </div>
            </div>

          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8 text-white">
            A Smarter Way to Expand Golf Revenue
              </h2>

          <p className="text-lg font-light leading-relaxed mb-12 max-w-3xl text-white">
            Modular Golf Pods deliver rapid deployment, portability, and climate-controlled play for year-round utilization.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Rapid deployment (weeks to months)",
              "Portability — relocate, expand, or redeploy as demand evolves",
              "Climate-controlled play for year-round utilization",
              "Scalable layouts from single bay to multi-bay installations",
              "Lower upfront risk than permanent construction",
              "Clean aesthetics aligned with premium club environments"
            ].map((benefit, idx) => (
              <div key={idx} className="border-[1px] border-[#faf2dc] rounded-lg p-6 bg-[#faf2dc]">
                <p className="text-base font-light leading-relaxed text-[#070707]">{benefit}</p>
              </div>
            ))}
            </div>

          <div className="mt-12 p-6 border-[1px] border-[#faf2dc] rounded-lg bg-[#faf2dc]">
            <p className="text-base font-light leading-relaxed text-[#070707]">
              Each pod integrates seamlessly with leading simulator platforms, AV systems, and club branding.
            </p>
              </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-[1px] border-[#faf2dc] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(250,242,220,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* Use Cases Section */}
      <section ref={useCasesSectionRef} className="bg-[#3F6B4F] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-[#faf2dc] rounded-lg px-4 py-2 inline-flex items-center gap-2 bg-[#faf2dc]">
              <span className="text-sm font-medium tracking-tight text-[#070707]">USE CASES</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-4 text-white">
            Built for Revenue, Retention & Differentiation
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border-[1px] border-[#faf2dc] rounded-lg p-8 bg-[#faf2dc]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-[#070707]">Private Clubs</h3>
              <ul className="space-y-3 text-sm font-light leading-relaxed text-[#070707]">
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Member engagement upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Winter play continuity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>New membership tiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Private events and leagues</span>
                </li>
              </ul>
                  </div>

            <div className="border-[1px] border-[#faf2dc] rounded-lg p-8 bg-[#faf2dc]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-[#070707]">Golf Courses</h3>
              <ul className="space-y-3 text-sm font-light leading-relaxed text-[#070707]">
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Monetize unused acreage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Drive off-peak utilization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Corporate outings and group bookings</span>
                </li>
              </ul>
                  </div>

            <div className="border-[1px] border-[#faf2dc] rounded-lg p-8 bg-[#faf2dc]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-[#070707]">Resorts & Hospitality</h3>
              <ul className="space-y-3 text-sm font-light leading-relaxed text-[#070707]">
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>All-weather activity offering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Family programming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Premium experiential upsells</span>
                </li>
              </ul>
            </div>

            <div className="border-[1px] border-[#faf2dc] rounded-lg p-8 bg-[#faf2dc]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-[#070707]">Developers / Mixed-Use</h3>
              <ul className="space-y-3 text-sm font-light leading-relaxed text-[#070707]">
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Amenity differentiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Faster lease-up velocity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#070707] mt-1.5">•</span>
                  <span>Strong visual activation of outdoor space</span>
                </li>
              </ul>
                </div>
              </div>

          <GalleryGrid
            images={useCasesGallery}
            className="mt-12"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-[1px] border-[#faf2dc] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(250,242,220,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
                </div>
              </div>
      </section>


      {/* Economics Snapshot Section */}
      <section ref={economicsSectionRef} className="bg-[#faf2dc] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-gray-300 rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-tight text-[#070707]">ECONOMICS</span>
                  </div>
                </div>

          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
            Strong Unit Economics Without Permanent Risk
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-4">Typical deployment profile:</h3>
                <ul className="space-y-3 text-base font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><strong>Estimated Build Cost:</strong> ~$100,000 per bay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><strong>Target MSRP:</strong> $150,000–$170,000 per bay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Multi-bay discounts available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Financing options available through equipment lenders</span>
                  </li>
                </ul>
            </div>
              </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-4">Revenue model:</h3>
                <p className="text-base font-light leading-relaxed mb-4">
                  Designed for rapid payback via hourly rentals, memberships, leagues, and events.
                </p>
                <p className="text-sm font-light leading-relaxed text-[#070707]/80">
                  Final pricing varies by layout, finishes, technology package, and site logistics.
                  </p>
                </div>
                  </div>
                  </div>
          <GalleryGrid
            images={economicsGallery}
            className="mt-12"
            columns="grid-cols-1 sm:grid-cols-2"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-[1px] border-[#3F6B4F] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(63,107,79,0.3)] hover:border-[#2d4f3a] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
      </section>


      {/* Configurations Section */}
      <section ref={configurationsSectionRef} className="bg-[#faf2dc] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-gray-300 rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-tight text-[#070707]">CONFIGURATIONS</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
            Flexible Layouts
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border-[1px] border-[#3F6B4F] rounded-lg p-8 bg-[#3F6B4F]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-white">Single Bay Pods</h3>
              <p className="text-base font-light leading-relaxed text-white">
                Compact footprint, fast deployment
              </p>
        </div>

            <div className="border-[1px] border-[#3F6B4F] rounded-lg p-8 bg-[#3F6B4F]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-white">2–4 Bay Installations</h3>
              <p className="text-base font-light leading-relaxed text-white">
                Shared infrastructure efficiencies
          </p>
        </div>

            <div className="border-[1px] border-[#3F6B4F] rounded-lg p-8 bg-[#3F6B4F]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-white">Custom Branding</h3>
              <p className="text-base font-light leading-relaxed text-white">
                Custom branding and exterior finishes
              </p>
          </div>

            <div className="border-[1px] border-[#3F6B4F] rounded-lg p-8 bg-[#3F6B4F]">
              <h3 className="text-2xl font-medium mb-4 tracking-tight text-white">Optional Integrations</h3>
              <p className="text-base font-light leading-relaxed text-white">
                Optional lounge, viewing, and hospitality integrations
              </p>
            </div>
              </div>

          <div className="mt-12 p-6 border-[1px] border-[#3F6B4F] rounded-lg bg-[#3F6B4F]">
            <p className="text-base font-light leading-relaxed text-white">
              Layouts adapt to parking lots, driving range edges, unused turf, rooftops, and adjacent amenity zones.
            </p>
            </div>
          <GalleryGrid
            images={configurationsGallery}
            className="mt-12"
            columns="grid-cols-1 sm:grid-cols-2"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-[1px] border-[#3F6B4F] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(63,107,79,0.3)] hover:border-[#2d4f3a] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            </div>
      </section>


      {/* Why Modular Section */}
      <section ref={whyModularSectionRef} className="bg-[#faf2dc] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-gray-300 rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-tight text-[#070707]">WHY MODULAR</span>
            </div>
              </div>
          
          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
            Optionality Is the Real Asset
          </h2>

          <p className="text-lg font-light leading-relaxed mb-12 max-w-3xl">
            Unlike permanent construction, modular allows you to:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Test demand before committing long-term capital",
              "Move assets if usage patterns change",
              "Expand incrementally",
              "Preserve land flexibility",
              "Reduce entitlement exposure"
            ].map((benefit, idx) => (
              <div key={idx} className="border-[1px] border-[#3F6B4F] rounded-lg p-6 bg-[#3F6B4F]">
                <p className="text-base font-light leading-relaxed text-white">{benefit}</p>
            </div>
            ))}
              </div>

          <div className="mt-12 p-6 border-[1px] border-[#3F6B4F] rounded-lg bg-[#3F6B4F]">
            <p className="text-base font-light leading-relaxed text-white">
              This creates a materially better risk-adjusted return profile.
            </p>
            </div>
          <GalleryGrid
            images={whyModularGallery}
            className="mt-12"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-[1px] border-[#3F6B4F] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(63,107,79,0.3)] hover:border-[#2d4f3a] hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section ref={processSectionRef} className="bg-[#faf2dc] py-16 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="mb-8">
            <div className="border-[1px] border-gray-300 rounded-lg px-4 py-2 inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-tight text-[#070707]">PROCESS</span>
            </div>
              </div>

          <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-8">
            From Concept to Operation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              "Site review and feasibility",
              "Layout design and budget confirmation",
              "Manufacturing and fit-out",
              "Delivery and installation",
              "Tech integration and launch"
            ].map((step, idx) => (
              <div key={idx} className="border-[1px] border-[#3F6B4F] rounded-lg p-6 bg-[#3F6B4F]">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-medium text-white flex-shrink-0">{idx + 1}</span>
                  <p className="text-base font-light leading-relaxed text-white">{step}</p>
            </div>
          </div>
            ))}
            </div>

          <div className="mt-12 p-6 border-[1px] border-[#3F6B4F] rounded-lg bg-[#3F6B4F]">
            <p className="text-base font-light leading-relaxed text-white">
              Typical timelines range from 8–20 weeks depending on configuration.
            </p>
            </div>
          <GalleryGrid
            images={processGallery}
            className="mt-12"
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />

          {/* CTA */}
          <div className="flex justify-center mt-12">
              <button
                onClick={() => {
                ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              className="border-[1px] border-[#3F6B4F] bg-[#faf2dc] text-[#070707] px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-light tracking-tight hover:bg-[#faf2dc] hover:shadow-[0_0_20px_rgba(63,107,79,0.3)] hover:border-[#2d4f3a] hover:scale-[1.02] transition-all duration-500 ease-out"
              >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section ref={ctaSectionRef} className="bg-[#faf2dc] py-20 px-4 md:px-8">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">
              Explore a Modular Golf Deployment
            </h2>
            <p className="text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Request pricing ranges, layout concepts, site feasibility feedback, and ROI modeling support.
            </p>
            </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-[1px] border-[#3F6B4F] rounded-lg p-8 bg-[#3F6B4F]">
              <h3 className="text-xl font-medium mb-4 text-white">Request:</h3>
              <ul className="space-y-3 text-base font-light leading-relaxed text-white">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Pricing ranges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Layout concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>Site feasibility feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-2">•</span>
                  <span>ROI modeling support</span>
                </li>
              </ul>
            </div>

              <button
                onClick={() => {
                // CTA action can be added here
                }}
              className="border-[1px] border-[#3F6B4F] bg-[#3F6B4F] text-white rounded-lg flex items-center justify-center gap-3 text-sm font-light tracking-tight hover:bg-[#2d4f3a] hover:shadow-[0_0_20px_rgba(63,107,79,0.4)] hover:scale-[1.02] transition-all duration-500 ease-out w-full h-full min-h-[200px]"
              >
              <span>REQUEST PRICING & LAYOUTS</span>
              <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#faf2dc] py-16 px-4 md:px-8 rounded-t-3xl">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-tight mb-3 text-[#070707]">
                MODULAR GOLF PODS
            </h2>
              <p className="text-sm font-light text-[#070707]/70 mb-4">
                Premium, Portable Golf Experiences for Clubs, Resorts & Developments
              </p>
              <p className="text-xs font-light text-[#070707]/60">
                Powered by FutureBuilt
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-medium mb-4 tracking-tight text-[#070707]">Navigation</h3>
              <nav className="flex flex-col gap-3">
            <button
              onClick={() => {
                heroSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
                  className="text-left text-sm font-light text-[#070707] hover:text-black transition-colors"
            >
                  Home
            </button>
            <button
              onClick={() => {
                    problemSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
                  className="text-left text-sm font-light text-[#070707] hover:text-black transition-colors"
            >
                  The Problem
            </button>
            <button
              onClick={() => {
                    solutionSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
                  className="text-left text-sm font-light text-[#070707] hover:text-black transition-colors"
            >
                  The Solution
            </button>
            <button
              onClick={() => {
                    useCasesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
                  className="text-left text-sm font-light text-[#070707] hover:text-black transition-colors"
            >
                  Use Cases
            </button>
            <button
              onClick={() => {
                    ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
                  className="text-left text-sm font-light text-[#070707] hover:text-black transition-colors"
            >
                  Request Pricing
            </button>
            </nav>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="text-sm font-medium mb-4 tracking-tight text-[#070707]">Contact</h3>
              <div className="flex flex-col gap-3 mb-6">
                <a href="mailto:info@modulargolfpods.com" className="text-sm font-light text-[#070707] hover:text-black transition-colors">
                  info@modulargolfpods.com
              </a>
            </div>
              <div className="flex flex-col gap-2 text-xs font-light text-[#070707]/60">
                <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                </div>
                </div>
              </div>

          {/* Bottom Bar */}
          <div className="border-t-[1px] border-gray-300 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#070707]/60">
              <p>© {new Date().getFullYear()} Modular Golf Pods. All rights reserved.</p>
              <p>Modular Golf Solutions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
