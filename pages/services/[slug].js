// Next
import Head from "next/head";
import Link from "next/link";
import WigglyButton from "../../components/layout/WigglyButton";

// Constants
import { personSchema } from "../../lib/constants";
import { servicesData } from "../../lib/constants/servicesData";
import { useTheme } from "../../lib/contexts/ThemeProvider";
import { getCanonicalUrl } from "../../lib/utilities/seo";

const BLURB_COLORS = ["blue", "red", "yellow"];

// Custom
import NextIntersectionObserver from "../../components/layout/NextIntersectionObserver";
import MuxHero from "../../components/belowthefold/MuxHero";
import BelowTheFold from "../../components/layout/BelowTheFold";
import WhiteBlackBorderBox from "../../components/layout/WhiteBlackBorderBox";
import Spacer from "../../components/layout/Spacer";
import BigBlueCircle from "../../components/svg/BigBlueCircle";
import BigRedTriangle from "../../components/svg/BigRedTriangle";
import BigYellowSquare from "../../components/svg/BigYellowSquare";

export async function getStaticPaths() {
  return {
    paths: servicesData.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

export default function ServiceDetail({ slug }) {
  const service = servicesData.find((s) => s.slug === slug);
  const { theme } = useTheme();
  const blurbColor = BLURB_COLORS.includes(theme)
    ? theme
    : BLURB_COLORS[Math.floor(Math.random() * BLURB_COLORS.length)];
  const faqSchema = service.faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  return (
    <>
      <Head>
        <title>{service.metaTitle ?? `Jakob Smith | ${service.title}`}</title>
        <meta
          name="description"
          content={service.metaDescription ?? service.tooltip}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={getCanonicalUrl(`/services/${slug}`)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      <MuxHero
        playbackId="lFKXc01pKRKTB901fBGpDaUx2MKzgwf3MuYLUZwTPKvTM"
        metadata={{
          video_id: "multi-color-liquid-looping-bg",
          video_title: "Multi-color Liquid Looping Video Background",
        }}
        words={service.muxWords}
      />

      <BelowTheFold>
        <BigBlueCircle className="-top-[50rem] border-js md:-top-[48rem] -left-[55rem] md:-left-[50rem] scale-[15%]" />

        <Spacer />

        <BigRedTriangle className="-top-[40rem] md:-top-[35rem] lg:-top-[25rem] -left-[55rem] sm:-left-[45rem] md:-left-[35rem] lg:-left-[2rem] rotate-[81deg] scale-[20%]" />

        <NextIntersectionObserver
          thresholdValue={0.1}
          classes="fade-in-init"
          topIn="fade-in-animate"
        >
          <WhiteBlackBorderBox className="mx-auto md:max-w-[600px] lg:max-w-[900px] py-6 md:py-10 lg:py-12 z-10">
            <div className="px-6 md:px-10 lg:px-12">
              <Link
                href="/services"
                className="inline-block font-overpass text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-10"
              >
                ← All Services
              </Link>

              <h1 className="font-js-math text-[4ch] md:text-[5ch] 2xl:text-[7ch] tracking-wide mb-2">
                {service.metaTitle ?? service.title}
              </h1>

              <p className="font-overpass text-gray-500 text-sm mb-4">
                {service.metaDescription ?? service.tooltip}
              </p>

              <p className="font-js-math text-[2ch] md:text-[2.5ch] font-semibold mb-10">
                {service.priceString}
              </p>

              <div className={`default-blurb-style blurb-style-${blurbColor}`}>
                {service.heroQuestion && (
                  <p className="font-js-math text-[2.1ch] md:text-[2.5ch] leading-[1.4] tracking-[0.03em] mb-10 text-balance">
                    {service.heroQuestion}
                  </p>
                )}

                {service.contentSections
                  ? service.contentSections.map((section) => (
                      <div key={section.heading} className="mb-10 last:mb-0">
                        <h2>{section.heading}</h2>
                        {section.body && <p className="mb-4">{section.body}</p>}
                        {section.items && (
                          <ul>
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))
                  : service.htmlDescription}

                {service.faqItems && (
                  <div className="mt-12">
                    <h2>FAQ</h2>
                    {service.faqItems.map((item) => (
                      <div key={item.q} className="mb-8 last:mb-0">
                        <p className="font-js-math text-[1.8ch] md:text-[2ch] mb-2">
                          {item.q}
                        </p>
                        <p>{item.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-12 text-center">
                <WigglyButton href="/contact" colorName={blurbColor}>Get Started</WigglyButton>
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