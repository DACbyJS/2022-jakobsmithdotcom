import MuxPlayer from '@mux/mux-player-react/lazy';
import { blackPlaceholder } from '../../public/dataURI/blackPlaceholder';

export default function HomeHero() {
  const playbackId = 'lj3tm5zsAwuRRC3xAxbMq1aCheG8qL1NRhbaj01wNIW4';

  return (
    <section className="hero h-[80vh] w-full flex flex-col justify-center items-center relative z-10 bg-js-black">
      <MuxPlayer
        loop
        nohotkeys
        poster={blackPlaceholder}
        placeholder={blackPlaceholder}
        autoPlay="muted"
        className="bg-js-black hero-mux-player"
        streamType="on-demand"
        playbackId={playbackId}
        metadata={{
          video_id: 'home-page-hero-video',
          video_title: 'Multiple Color Home Page Hero Liquid Loop',
        }}
      />
      <div className="white-black-border absolute-center font-js-math text-center z-10 p-6">
        <h1 className="text-[7ch] js-math-treatments">Translate.</h1>
        <h1 className="text-[7ch] js-math-treatments">Decide.</h1>
        <h1 className="text-[7ch] js-math-treatments">Develop.</h1>
        <h1 className="text-[7ch] js-math-treatments">Deliver.</h1>
      </div>
    </section>
  );
}
