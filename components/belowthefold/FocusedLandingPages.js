import Link from "next/link";
import classNames from "classnames";

import {
  expandLandingPageRelationships,
  getAudienceBySlug,
  getLandingPagesByAudience,
} from "../../lib/constants";

import NextIntersectionObserver from "../layout/NextIntersectionObserver";
import WhiteBlackBorderBox from "../layout/WhiteBlackBorderBox";
import BlackBox from "../layout/BlackBox";
import WigglyButton from "../layout/WigglyButton";

const FocusedLandingPages = ({
  audienceSlug,
  title = "Focused Pages",
  intro,
}) => {
  const audience = getAudienceBySlug(audienceSlug);
  const landingPages = getLandingPagesByAudience(audienceSlug)
    .map(expandLandingPageRelationships);

  if (!audience || landingPages.length === 0) {
    return null;
  }

  const defaultIntro = `Audience-specific pages for ${audience.title.toLowerCase()} that keep the offer tied to the right services.`;

  return (
    <NextIntersectionObserver
      thresholdValue={0.2}
      topIn="fade-down-animate"
      classes="fade-down-init"
    >
      <WhiteBlackBorderBox className="mx-auto max-w-[1300px] py-10 sm:py-16 lg:py-20 z-10">
        <div className="pad-inline-section">
          <div className="text-center max-w-[900px] mx-auto">
            <h2 className="type-section pb-4">{title}</h2>
            <p className="font-overpass text-[1.7ch] sm:text-[1.9ch] leading-[1.7] text-js-black/80">
              {intro ?? defaultIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 pt-10 sm:pt-12">
            {landingPages.map((landingPage, index) => {
              const isDarkCard = index % 2 !== 0;
              const CardComponent = index % 2 === 0 ? WhiteBlackBorderBox : BlackBox;
              const headingClassName = index % 2 === 0 ? "text-js-black" : "text-js-white";
              const bodyClassName = index % 2 === 0 ? "text-js-black/80" : "text-js-white/80";
              const secondaryLabelClassName = index % 2 === 0 ? "text-js-black/60" : "text-js-white/60";
              const secondaryLinkClassName = index % 2 === 0 ? "text-js-black/80 hover:text-js-black" : "text-js-white/80 hover:text-js-white";

              return (
                <CardComponent
                  key={landingPage.id}
                  className={classNames("h-full p-8 sm:p-10 lg:p-12")}
                >
                  <div className="flex h-full flex-col">
                    <p className={classNames("font-overpass-mono text-[1.2ch] uppercase tracking-[0.35em] pb-4", secondaryLabelClassName)}>
                      {landingPage.audience?.title}
                    </p>

                    <h3 className={classNames("font-js-math text-[2.8ch] sm:text-[3.5ch] leading-[1.2] pb-4", headingClassName)}>
                      {landingPage.title}
                    </h3>

                    <p className={classNames("font-overpass text-[1.7ch] sm:text-[1.9ch] leading-[1.75] pb-6", bodyClassName)}>
                      {landingPage.description}
                    </p>

                    <div className="pb-6">
                      <p className={classNames("font-overpass-mono text-[1.2ch] uppercase tracking-[0.25em] pb-3", secondaryLabelClassName)}>
                        Primary services
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {landingPage.primaryServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={classNames("font-overpass text-[1.6ch] underline underline-offset-4 transition-colors", secondaryLinkClassName)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {landingPage.supportingServices.length > 0 && (
                      <div className="pb-8">
                        <p className={classNames("font-overpass-mono text-[1.2ch] uppercase tracking-[0.25em] pb-3", secondaryLabelClassName)}>
                          Also related
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                          {landingPage.supportingServices.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className={classNames("font-overpass text-[1.6ch] underline underline-offset-4 transition-colors", secondaryLinkClassName)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-2">
                      <WigglyButton
                        href={landingPage.href}
                        colorName={landingPage.theme}
                        className={isDarkCard ? "text-js-white" : undefined}
                      >
                        Read This Page
                      </WigglyButton>
                    </div>
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </WhiteBlackBorderBox>
    </NextIntersectionObserver>
  );
};

export default FocusedLandingPages;
