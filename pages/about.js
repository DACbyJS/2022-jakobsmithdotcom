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
  const { muxWords, firstWhiteBlackBox } = aboutPageContent;

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
                Who Is
              </h2>
              <h2 className="text-[3.5ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[8ch] tracking-wide">
                Jakob Smith?
              </h2>
            </div>

            {/* Introduction */}
            <div className="text-left mb-12 px-6 md:px-10 font-overpass font-light text-[1.5ch] lg:text-[1.8ch] 2xl:text-[2.2ch] leading-[1.6] max-w-4xl mx-auto">
              <p className="pb-4">
                I am a qualified digital designer and web developer with many
                years of diverse experience creating, refactoring and
                maintaining marketing websites, emails, advertisements and web
                applications.
              </p>
              <p className="pb-4">
                My strengths are flexibility and intuition. I understand that in
                marketing and advertising, human needs and feelings override
                processes and perfectionism. I believe that the Internet should
                continue to transcend barriers between people and information.
                As an active participant in it’s expansion, I hope to use it to
                create more unprecedented transparency and equity.
              </p>
              <p className="pb-4">
                These qualities and beliefs make me an adaptable generalist who
                can offer insight, clarity and connection to every person I meet
                in you and your client’s organization.
              </p>
            </div>

            <div className="zero:p-6 sm:p-10">
              {/* Portfolio & Values Section */}
              <div className="grid zero:grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                <div className="flex-col">
                  <h3 className="btn w-full text-center mb-6">Personal</h3>
                  <div className="grid zero:grid-cols-1 xs:grid-cols-2 gap-10 font-light font-overpass leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch]">
                    <div>
                      <h4 className="font-js-math text-[1.5ch] lg:text-[2ch] 2xl:text-[2.5ch] pb-3">
                        Pic
                      </h4>
                      <Image
                        src={jakob}
                        alt="Jakob Smith"
                        className="w-full h-[325px] object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-js-math text-[1.5ch] lg:text-[2ch] 2xl:text-[2.5ch] pb-3">
                        Links
                      </h4>
                      <ul className="pl-3 uppercase space-y-3">
                        <li className="before:content-['⇀'] before:mr-3">
                          <Link
                            className="underline"
                            href="https://www.linkedin.com/in/jakob-smith-webdev/"
                            target="_blank"
                          >
                            LinkedIn
                          </Link>
                        </li>
                        <li className="before:content-['⇀'] before:mr-3">
                          <Link
                            className="underline"
                            href="https://github.com/DACbyJS"
                            target="_blank"
                          >
                            Github
                          </Link>
                        </li>
                        <li className="before:content-['⇀'] before:mr-3">
                          <Link
                            className="underline"
                            href="https://www.ebay.com/str/contraconsume"
                            target="_blank"
                          >
                            Retro Store
                          </Link>
                        </li>
                        <li className="before:content-['⇀'] before:mr-3">
                          <Link
                            className="underline"
                            href="https://ardenbriarsmith.com/"
                            target="_blank"
                          >
                            Artwork
                          </Link>
                        </li>
                        <li className="before:content-['⇀'] before:mr-3">
                          <Link
                            className="underline"
                            href="https://jakeisdead.com/"
                            target="_blank"
                          >
                            Writing
                          </Link>
                        </li>
                        <li className="before:content-['⇀'] before:mr-3">
                          <Link
                            className="underline"
                            href="https://soundcloud.com/smiththeband/"
                            target="_blank"
                          >
                            Music
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-col">
                  <h3 className="btn w-full text-center mb-6">Core Values</h3>
                  <div className="space-y-6">
                    <ul className="grid zero:grid-cols-1 xs:grid-cols-2 gap-y-4 font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch]">
                      <li>Communication</li>
                      <li>Responsibility</li>
                      <li>Thoughtfulness</li>
                      <li>Determination</li>
                      <li>Artistry</li>
                      <li>Creativity</li>
                      <li>Liberty</li>
                      <li>Compassion</li>
                      <li>Prosperity</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Expertise Section */}
              <div className="flex-col">
                <h3 className="btn w-full text-center mb-8">
                  Technical Expertise
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="font-overpass-mono font-light uppercase text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-6 text-center">
                      Development Stack
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Content Management
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          Craft CMS • WordPress • Contentful • Sanity •
                          Expression Engine • Joomla
                        </p>
                      </div>
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Backend Languages
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          PHP • Ruby • Python
                        </p>
                      </div>
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Frameworks
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          Laravel • Symfony • Yii • Ruby on Rails
                        </p>
                      </div>
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Frontend Technologies
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          HTML • CSS • SCSS • Tailwind • Bootstrap
                        </p>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center mt-2">
                          JavaScript • React • Next.js • Alpine.js • jQuery
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-overpass-mono font-light uppercase text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-6 text-center">
                      Infrastructure & Tools
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Hosting & Cloud
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          Kinsta • WpEngine • Linode • Servd
                        </p>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center mt-2">
                          AWS S3 • CloudFront • Google Cloud
                        </p>
                      </div>
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Development Environment
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          DDEV • Lando • Docker • Git • Trellis
                        </p>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center mt-2">
                          VS Code on Linux Mint Cinnamon
                        </p>
                      </div>
                      <div>
                        <h5 className="font-overpass font-medium uppercase text-[1.1ch] lg:text-[1.3ch] tracking-wide mb-3 text-center">
                          Database & APIs
                        </h5>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center">
                          MySQL • PostgreSQL • MariaDB
                        </p>
                        <p className="font-light font-overpass uppercase leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch] text-center mt-2">
                          GraphQL • REST APIs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Summary */}
                <div className="mt-12">
                  <div className="parralelogram-divider"></div>
                  <h4 className="font-overpass-mono font-light uppercase text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-6 text-center">
                    Experience Overview
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <div className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] mb-2">
                        50+
                      </div>
                      <p className="font-overpass font-light uppercase text-[1.1ch] lg:text-[1.3ch]">
                        Server-side Websites
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] mb-2">
                        20+
                      </div>
                      <p className="font-overpass font-light uppercase text-[1.1ch] lg:text-[1.3ch]">
                        Client-side Websites
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] mb-2">
                        7
                      </div>
                      <p className="font-overpass font-light uppercase text-[1.1ch] lg:text-[1.3ch]">
                        Production Web Apps
                      </p>
                    </div>
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
