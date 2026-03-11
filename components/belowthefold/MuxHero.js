import MuxPlayer from '@mux/mux-player-react';
import classNames from 'classnames';
import { useState } from 'react';

const MuxHero = ({
  playbackId,
  metadata,
  startTime,
  className,
  playerClassName,
  words,
}) => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      className={classNames(
        'hero landscape:h-[85vh] portrait:h-[40vh] overflow-y-hidden w-full flex flex-col justify-center items-center relative z-10 bg-js-black',
        className
      )}
    >
      <MuxPlayer
        loop
        nohotkeys
        preload
        autoPlay="muted"
        streamType="on-demand"
        loading="viewport"
        className={classNames(
          'bg-js-black hero-mux-player fade-in-init animate-init-slow',
          videoReady && 'fade-in-animate',
          playerClassName
        )}
        playbackId={playbackId}
        metadata={metadata}
        startTime={startTime}
        maxResolution="720p"
        minResolution="480p"
        onCanPlay={() => setVideoReady(true)}
      />
      <div className={classNames('fade-in-init', videoReady && 'animate-init fade-in-animate')}>
        <div className="hero-mux-word-box white-black-border absolute-center font-js-math text-center z-10">
          {words.map((word, index) => (
            <div
              key={index}
              className={classNames(
                `fade-in-init animate-delay-${index + 1 - 0.75}s`,
                videoReady && `animate-init fade-in-animate`
              )}
            >
              <h4 className="type-hero js-math-treatments">
                {word}
              </h4>
            </div>
          ))}
        </div>
        <div className="hidden invisible animate-delay-0.25s animate-delay-1.25s animate-delay-2.25s animate-delay-3.25s"></div>
      </div>
    </section>
  );
};

export default MuxHero;
