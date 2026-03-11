// Next
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Constants
import { pageData, personSchema } from "../lib/constants";
import { getCanonicalUrl } from "../lib/utilities/seo";
import { aboutPageContent } from "../pages-content/about.js";

// Image
import jakob1 from "../public/images/jakob-1.jpg";
import jakob2 from "../public/images/jakob-2.jpg";
import jakob3 from "../public/images/jakob-3.jpg";
import jakob4 from "../public/images/jakob-4.jpg";

// Custom
import NextIntersectionObserver from "../components/layout/NextIntersectionObserver";
import MuxHero from "../components/belowthefold/MuxHero";
import BelowTheFold from "../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../components/layout/WhiteBlackBorderBox";
import Spacer from "../components/layout/Spacer";
import BigBlueCircle from "../components/svg/BigBlueCircle";
import BigRedTriangle from "../components/svg/BigRedTriangle";
import BigYellowSquare from "../components/svg/BigYellowSquare";
import PinnedBadge from "../components/svg/PinnedBadge";

const technicalExpertiseLinks = {
  "Craft CMS": "https://craftcms.com/",
  WordPress: "https://wordpress.org/",
  Contentful: "https://www.contentful.com/",
  Sanity: "https://www.sanity.io/",
  "Expression Engine": "https://expressionengine.com/",
  Joomla: "https://www.joomla.org/",
  PHP: "https://www.php.net/",
  Ruby: "https://www.ruby-lang.org/",
  Python: "https://www.python.org/",
  Laravel: "https://laravel.com/",
  Symfony: "https://symfony.com/",
  Yii: "https://www.yiiframework.com/",
  "Ruby on Rails": "https://rubyonrails.org/",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  SCSS: "https://sass-lang.com/",
  Tailwind: "https://tailwindcss.com/",
  Bootstrap: "https://getbootstrap.com/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/",
  "Alpine.js": "https://alpinejs.dev/",
  jQuery: "https://jquery.com/",
  Kinsta: "https://kinsta.com/",
  WpEngine: "https://wpengine.com/",
  Linode: "https://www.linode.com/",
  Servd: "https://servd.host/",
  "AWS S3": "https://aws.amazon.com/s3/",
  CloudFront: "https://aws.amazon.com/cloudfront/",
  "Google Cloud": "https://cloud.google.com/",
  DDEV: "https://ddev.com/",
  Lando: "https://lando.dev/",
  Docker: "https://www.docker.com/",
  Git: "https://git-scm.com/",
  Trellis: "https://roots.io/trellis/",
  "VS Code on Linux Mint Cinnamon": "https://code.visualstudio.com/",
  MySQL: "https://www.mysql.com/",
  PostgreSQL: "https://www.postgresql.org/",
  MariaDB: "https://mariadb.org/",
  GraphQL: "https://graphql.org/",
  "REST APIs": "https://restfulapi.net/",
};

export default function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const jakobImages = [jakob1, jakob2, jakob3, jakob4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex((previousIndex) => (previousIndex + 1) % jakobImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [jakobImages.length]);

  const aboutPageData = pageData.find((page) => page.slug === "about");
  const { 
    muxWords, 
    firstWhiteBlackBox, 
    hero, 
    personal, 
    coreValues, 
    technicalExpertise 
  } = aboutPageContent;

  const renderTechnicalContent = (content, lineSpacingClass = "") => {
    const lines = Array.isArray(content) ? content : [content];

    return lines.map((line, lineIndex) => {
      const items = line.split("•").map((item) => item.trim());

      return (
        <p
          key={`${line}-${lineIndex}`}
          className={`font-light font-overpass leading-[1.75] text-[1.45ch] lg:text-[1.7ch] 2xl:text-[2.1ch] text-center ${
            lineIndex > 0 ? lineSpacingClass : ""
          }`}
        >
          {items.map((item, itemIndex) => {
            const itemLink = technicalExpertiseLinks[item];

            return (
              <span key={`${item}-${itemIndex}`}>
                {itemLink ? (
                  <Link
                    href={itemLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-opacity duration-300 hover:opacity-70"
                  >
                    {item}
                  </Link>
                ) : (
                  item
                )}
                {itemIndex < items.length - 1 ? " / " : ""}
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <>
      <Head>
        <title>{aboutPageData.metaTitle}</title>
        <meta name="description" content={aboutPageData.metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={aboutPageData.metaKeywords} />
        <link rel="canonical" href={getCanonicalUrl(aboutPageData.data.href)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
            <PinnedBadge
              className="absolute z-30 -top-6 md:-top-[20px] -left-4 md:-left-[50px] -translate-x-1/2 translate-y-1/2 w-[100px] sm:w-[150px] lg:w-[200px] h-auto"
              linkTo="/portfolio"
              linkText="See My Portfolio"
            />
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
                  <div className="grid zero:grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-10 font-light font-overpass leading-[1.8] text-[1.25ch] lg:text-[1.5ch] 2xl:text-[2ch]">
                    <div className="space-y-4">
                      <h4 className="font-js-math text-[2.1ch] sm:text-[1.8ch] lg:text-[2ch] 2xl:text-[2.5ch] pb-3">
                        {personal.pic.heading}
                      </h4>
                      <div className="relative">
                        <Image
                          src={jakobImages[activeImageIndex]}
                          alt={personal.pic.alt}
                          className="w-full h-[325px] object-cover"
                        />
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                          {jakobImages.map((image, index) => (
                            <button
                              key={image.src}
                              type="button"
                              className={`h-2.5 w-2.5 border border-js-black rounded-full ${
                                index === activeImageIndex ? "bg-js-black" : "bg-js-white"
                              }`}
                              onClick={() => setActiveImageIndex(index)}
                              aria-label={`Show photo ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-js-math text-[2.1ch] sm:text-[1.8ch] lg:text-[2ch] 2xl:text-[2.5ch] pb-3">
                        {personal.links.heading}
                      </h4>
                      <ul className="pl-3 uppercase space-y-3">
                        {personal.links.items.map((link, index) => (
                          <li key={index} className="before:content-['⇀'] before:mr-3">
                            <Link
                              className="underline transition-opacity duration-300 hover:opacity-70"
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
                    <h4 className="font-overpass-mono font-light text-[1.8ch] lg:text-[2ch] tracking-wide mb-6 text-center">
                      {technicalExpertise.developmentStack.heading}
                    </h4>
                    <div className="space-y-6">
                      {technicalExpertise.developmentStack.sections.map((section, index) => (
                        <div key={index} className="px-4 py-3">
                          <h5 className="font-overpass font-semibold text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-3 text-center">
                            {section.title}
                          </h5>
                          {renderTechnicalContent(section.content, "mt-2")}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-overpass-mono font-light text-[1.8ch] lg:text-[2ch] tracking-wide mb-6 text-center">
                      {technicalExpertise.infrastructure.heading}
                    </h4>
                    <div className="space-y-6">
                      {technicalExpertise.infrastructure.sections.map((section, index) => (
                        <div key={index} className="px-4 py-3">
                          <h5 className="font-overpass font-semibold text-[1.4ch] lg:text-[1.6ch] tracking-wide mb-3 text-center">
                            {section.title}
                          </h5>
                          {renderTechnicalContent(section.content, "mt-2")}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience Summary */}
                <div className="mt-12">
                  <div className="parralelogram-divider"></div>
                  <h4 className="font-overpass-mono font-light text-[1.8ch] lg:text-[2ch] tracking-wide mb-6 text-center">
                    {technicalExpertise.experienceOverview.heading}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {technicalExpertise.experienceOverview.stats.map((stat, index) => (
                      <div key={index} className="p-4">
                        <div className="font-js-math text-[2.5ch] lg:text-[3ch] 2xl:text-[4ch] mb-2">
                          {stat.number}
                        </div>
                        <p className="font-overpass font-light text-[1.35ch] lg:text-[1.55ch]">
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
