import MuxPlayer from '@mux/mux-player-react/lazy';
import classNames from 'classnames';
import { uid } from 'uid';

// Custom
import NextIntersectionObserver from '../layout/NextIntersectionObserver';

const MuxHero = ({
  playbackId = 'lj3tm5zsAwuRRC3xAxbMq1aCheG8qL1NRhbaj01wNIW4',
  metadata = {
    video_id: 'mux-hero-video',
    video_title: 'Mux Hero Video',
  },
  startTime = 0,
  className,
  playerClassName,
  words = ['Translate.', 'Decide.', 'Develop.', 'Deliver.'],
}) => {
  return (
    <section
      className={classNames(
        'hero landscape:h-[100vh] portrait:h-[40vh] overflow-y-hidden w-full flex flex-col justify-center items-center relative z-10 bg-js-black',
        className
      )}
    >
      <NextIntersectionObserver
        thresholdValue={1}
        classes="fade-in-init animate-init-slow"
        topIn="fade-in-animate animate-delay-0.5s"
      >
        <MuxPlayer
          loop
          nohotkeys
          preload
          autoPlay="muted"
          streamType="on-demand"
          loading="viewport"
          className={classNames('bg-js-black hero-mux-player', playerClassName)}
          playbackId={playbackId}
          metadata={metadata}
          startTime={startTime}
        />
      </NextIntersectionObserver>
      <NextIntersectionObserver
        thresholdValue={0.5}
        classes="fade-in-init"
        topIn="fade-in-animate"
      >
        <div className="white-black-border absolute-center font-js-math text-center z-10 p-6">
          {words.map((word, index) => (
            <NextIntersectionObserver
              key={uid(index)}
              thresholdValue={0.4}
              classes={`fade-in-init animate-delay-${index + 1 - 0.75}s`}
              topIn="fade-in-animate"
            >
              <h4
                key={uid(index)}
                className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[7ch] js-math-treatments"
              >
                {word}
              </h4>
            </NextIntersectionObserver>
          ))}
        </div>
        <div className="hidden invisible animate-delay-0.25s animate-delay-1.25s animate-delay-2.25s animate-delay-3.25s"></div>
      </NextIntersectionObserver>
    </section>
  );
};

export default MuxHero;
