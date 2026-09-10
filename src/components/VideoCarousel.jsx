import { useState } from 'react';

const videos = [
  {
    id: 'students',
    title: 'Students',
    sub: 'Village life',
    poster: '/assets/video-poster-students-village.webp',
    src: '/videos/students-village-life.webm',
    duration: '5:37',
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    sub: 'Experience of a volunteer',
    poster: '/assets/video-poster-volunteer.webp',
    src: '/videos/volunteer-experience.webm',
    duration: '3:55',
  },
  {
    id: 'pitfalls',
    title: 'Common pitfalls',
    sub: 'Typical things to be careful of',
    poster: '/assets/video-poster-common-pitfalls.webp',
    src: '/videos/common-pitfalls.webm',
    duration: '3:05',
  },
];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3"></polygon>
    </svg>
  );
}

function Slide({ video, playing, onPlay }) {
  return (
    <div className="vc-slide">
      {playing ? (
        <video className="vc-video" controls autoPlay poster={video.poster}>
          <source src={video.src} type="video/webm" />
        </video>
      ) : (
        <button type="button" className="vc-poster" onClick={onPlay} aria-label={`Play: ${video.title}`}>
          <img src={video.poster} alt={video.title} loading="lazy" />
          <span className="vc-scrim"></span>
          <span className="vc-play"><PlayIcon /></span>
          <span className="vc-dur">{video.duration}</span>
          <span className="vc-caption">
            <span className="vc-caption__title">{video.title}</span>
            <span className="vc-caption__sub">{video.sub}</span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const n = videos.length;

  const visible = [videos[index % n], videos[(index + 1) % n]];

  const prev = () => {
    setPlayingId(null);
    setIndex((i) => (i - 1 + n) % n);
  };
  const next = () => {
    setPlayingId(null);
    setIndex((i) => (i + 1) % n);
  };

  return (
    <div className="vc-wrap">
      <button type="button" className="vc-arrow vc-arrow--left" onClick={prev} aria-label="Previous videos">
        <ChevronLeft />
      </button>
      <div className="vc-track">
        {visible.map((v) => (
          <Slide key={v.id} video={v} playing={playingId === v.id} onPlay={() => setPlayingId(v.id)} />
        ))}
      </div>
      <button type="button" className="vc-arrow vc-arrow--right" onClick={next} aria-label="Next videos">
        <ChevronRight />
      </button>
    </div>
  );
}
