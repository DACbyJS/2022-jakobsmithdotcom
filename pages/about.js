// Next
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Libs
import { v4 as uuidv4 } from "uuid";

// Constants
import { pageData } from "../lib/constants";
import { aboutPageContent } from "../pages-content/about.js";

// Image
import jakob from "../public/images/jakob.png";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import BigYellowSquare from "../components/svg/BigYellowSquare";

export default function About() {
  const aboutPageData = pageData.find((page) => page.slug === "about");
  const { 
    muxWords, 
    firstWhiteBlackBox, 
    hero, 
    personal, 
    coreValues, 
    technicalExpertise 
  } = aboutPageContent;

  return (
    <>
      <Head>
        <title>{aboutPageData.metaTitle}</title>
        <meta description={aboutPageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MuxHero
        playbackId="011xEpegVtj401cHWeHsnZVBU00HsqQ02WtwliwMpekPktw"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={muxWords}
      />
      <BelowTheFold>
        <BigBlueCircle className="-top-[50rem] border-js md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[15%]" />
        <Spacer />

        <BigRedTriangle className="-top-[40rem] md:-top-[35rem] lg:-top-[25rem] -left-[55rem] sm:-left-[45rem] md:-left-[35rem] lg:left-[1rem] rotate-[81deg] scale-[20%]" />

        {/* Hero Section */}
        <NextIntersectionObserver
          thresholdValue={0.3}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[1200px] py-6 md:py-10 lg:py-12 z-10">
            <div className="font-js-math text-center mb-8 md:mb-12">
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide -mb-1 sm:-mb-2 2xl:-mb-6">
                {hero.title.line1}
              </h2>
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                {hero.title.line2}
              </h2>
            </div>

            {/* Introduction */}
            <div className="text-left mb-12 px-6 md:px-10 font-overpass font-light text-[1.5ch] lg:text-[1.8ch] 2xl:text-[2.2ch] leading-[1.6] max-w-4xl mx-auto">
              {hero.introduction.map((paragraph, index) => (
                <p key={index} className="pb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="zero:p-6 sm:p-10">
              {/* Portfolio & Values Section */}
              <div className="grid zero:grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                <div className="flex-col">
                  <h3 className="btn w-full text-center mb-6">{personal.heading}</h3>
                  <div className="grid zero:grid-cols-1 xs:grid-cols-2 gap-10 font-light font-overpass leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch]">
                    <div>
                      <h4 className="font-js-math text-[1.5ch] lg:text-[2ch] 2xl:text-[2.5ch] pb-3">
                        {personal.pic.heading}
                      </h4>
                      <Image
                        src={jakob}
                        alt={personal.pic.alt}
                        className="w-full h-[325px] object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-js-math text-[1.5ch] lg:text-[2ch] 2xl:text-[2.5ch] pb-3">
                        {personal.links.heading}
                      </h4>
                      <ul className="pl-3 uppercase space-y-3">
                        {personal.links.items.map((link, index) => (
                          <li key={index} className="before:content-['⇀'] before:mr-3">
                            <Link
                              className="underline"
                              href={link.url}
                              target="_blank"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-col">
                  <h3 className="btn w-full text-center mb-6">{coreValues.heading}</h3>
                  <div className="space-y-6">
                    <ul className="grid zero:grid-cols-1 xs:grid-cols-2 gap-y-4 font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch]">
                      {coreValues.values.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Expertise Section */}
              <div className="flex-col">
                <h3 className="btn w-full text-center mb-8">
                  {technicalExpertise.heading}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-overpass-mono font-light uppercase text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-6 text-center">
                      {technicalExpertise.developmentStack.heading}
                    </h4>
                    <div className="space-y-6">
                      {technicalExpertise.developmentStack.sections.map((section, index) => (
                        <div key={index}>
                          <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                            {section.title}
                          </h5>
                          {Array.isArray(section.content) ? (
                            section.content.map((text, i) => (
                              <p key={i} className={`font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center ${i > 0 ? 'mt-2' : ''}`}>
                                {text}
                              </p>
                            ))
                          ) : (
                            <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                              {section.content}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-overpass-mono font-light uppercase text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-6 text-center">
                      {technicalExpertise.infrastructure.heading}
                    </h4>
                    <div className="space-y-6">
                      {technicalExpertise.infrastructure.sections.map((section, index) => (
                        <div key={index}>
                          <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                            {section.title}
                          </h5>
                          {Array.isArray(section.content) ? (
                            section.content.map((text, i) => (
                              <p key={i} className={`font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center ${i > 0 ? 'mt-2' : ''}`}>
                                {text}
                              </p>
                            ))
                          ) : (
                            <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                              {section.content}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience Summary */}
                <div className="mt-12">
                  <div className="parralelogram-divider"></div>
                  <h4 className="font-overpass-mono font-light uppercase text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-6 text-center">
                    {technicalExpertise.experienceOverview.heading}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {technicalExpertise.experienceOverview.stats.map((stat, index) => (
                      <div key={index} className="p-4">
                        <div className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] mb-2">
                          {stat.number}
                        </div>
                        <p className="font-overpass font-light uppercase text-[1.1ch] lg:text-[1.3ch]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </WhiteBlackBorderBox>
        </NextIntersectionObserver>
        <BigYellowSquare className="rotate-[16deg] -top-[55rem] md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[35%]" />
        <Spacer />
      </BelowTheFold>
    </>
  );
}
