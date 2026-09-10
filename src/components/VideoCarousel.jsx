import { useState } from 'react';

const videos = [
  {
    id: 'students',
    title: 'Students \u2014 Village life',
    sub: 'A glimpse into daily life in the villages we work in.',
    poster: '/assets/video-poster-students-village.webp',
    src: '/videos/students-village-life.webm',
    duration: '5:37',
  },
  {
    id: 'volunteer',
    title: 'Volunteer \u2014 Experience of a volunteer',
    sub: 'What it feels like to volunteer for Read-a-story.',
    poster: '/assets/video-poster-volunteer.webp',
    src: '/videos/volunteer-experience.webm',
    duration: '3:55',
  },
  {
    id: 'pitfalls',
    title: 'Common pitfalls',
    sub: 'Typical things to be careful of as a new volunteer.',
    poster: '/assets/video-poster-common-pitfalls.webp',
    src: '/videos/common-pitfalls.webm',
    duration: '3:05',
  },
];

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3"></polygon>
    </svg>
  );
}

function VideoCard({ video, playing, onPlay }) {
  return (
    <div className="yt-card">
      <div className="yt-thumb">
        {playing ? (
          <video className="yt-video" controls autoPlay poster={video.poster}>
            <source src={video.src} type="video/webm" />
          </video>
        ) : (
          <button type="button" className="yt-thumb__btn" onClick={onPlay} aria-label={`Play: ${video.title}`}>
            <img src={video.poster} alt={video.title} loading="lazy" />
            <span className="yt-play"><PlayIcon /></span>
            <span className="yt-dur">{video.duration}</span>
          </button>
        )}
      </div>
      <div className="yt-meta">
        <h4 className="yt-title">{video.title}</h4>
        <p className="yt-sub">{video.sub}</p>
      </div>
    </div>
  );
}

export default function VideoCarousel() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <div className="yt-grid">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} playing={playingId === v.id} onPlay={() => setPlayingId(v.id)} />
      ))}
    </div>
  );
}
