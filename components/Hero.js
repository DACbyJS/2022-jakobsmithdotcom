import styles from '../styles/Hero.module.css';
import MuxPlayer from "@mux/mux-player-react/lazy";

export default function Hero() {
  return (
    <section className="hero h-[80vh] flex flex-col justify-center items-center relative z-10">
      <MuxPlayer
        loop
        autoPlay="muted"
        className={styles.player}
        streamType="on-demand"
        playbackId="lj3tm5zsAwuRRC3xAxbMq1aCheG8qL1NRhbaj01wNIW4"
        metadata={{
          video_id: 'home-page-hero-video',
          video_title: 'Multiple Color Hero Liquid Loop',
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
