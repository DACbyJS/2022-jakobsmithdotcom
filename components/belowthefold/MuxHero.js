import MuxPlayer from '@mux/mux-player-react/lazy';
import classNames from 'classnames';
import { uid } from 'uid';

// Custom
import { blackPlaceholder } from '../../public/dataURI/blackPlaceholder';

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
        'hero h-[50vh] lg:h-[60vh] 2xl:h-[80vh] w-full flex flex-col justify-center items-center relative z-10 bg-js-black',
        className
      )}
    >
      <MuxPlayer
        loop
        nohotkeys
        autoPlay="muted"
        streamType="on-demand"
        poster={blackPlaceholder}
        placeholder={blackPlaceholder}
        className={classNames('bg-js-black hero-mux-player', playerClassName)}
        playbackId={playbackId}
        metadata={metadata}
        startTime={startTime}
      />
      <div className="white-black-border absolute-center font-js-math text-center z-10 p-6">
        {words.map((word, index) => (
          <h1
            key={uid(index)}
            className="text-[3ch] sm:text-[4ch] lg:text-[5ch] 2xl:text-[7ch] js-math-treatments"
          >
            {word}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default MuxHero;
