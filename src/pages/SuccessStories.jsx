import { useState } from 'react';
import { Link } from 'react-router-dom';

// Only real, verified stories go here. Do not add invented/placeholder
// beneficiary stories - for a nonprofit, that's a credibility risk if a donor
// or journalist ever asks for the person behind a story that doesn't exist.
const stories = [
  {
    id: 'sapna-karmoda',
    name: 'Sapna Karmoda',
    date: 'January 2026',
    excerpt:
      "A tribal student who went from state schooling through Class 12, to a hostel during her D.Ed, to weekly English sessions with a volunteer from abroad - and now reads with children from her own community.",
    image: '/assets/moments-group-photo-school.webp',
    secondImage: '/assets/moments-girl-writing-notebook.webp',
    secondImageCaption: 'Sapna with students she now mentors in her own community.',
    body: [
      "Sapna grew up attending state-run schools in a tribal community, and continued her education through a hostel while completing her D.Ed (Diploma in Education). Like many first-generation learners, spoken English was not something she had much exposure to growing up.",
      "Through n+1 Social Foundation's Read-a-story programme, Sapna was paired with Nick, a volunteer tutor from abroad, for weekly one-to-one English reading sessions over the phone. Over time, consistent practice built her reading fluency and her confidence speaking English.",
      "That confidence carried into her studies and, eventually, into clearing the selection process for a government teaching position. Today, Sapna works as a teacher and continues to read with children from her own community - passing forward the same kind of support she once received.",
    ],
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform .18s ease', transform: open ? 'rotate(180deg)' : 'none' }}
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  );
}

function StoryRow({ story }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="ss-row">
      <img loading="lazy" src={story.image} alt={story.name} className="ss-row-img" />
      <div style={{ flex: 1 }}>
        <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
        <p className="ss-row-date">Published on {story.date}</p>
        <p className="text-gray-600 mt-2">{story.excerpt}</p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="ss-pill"
          style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          {open ? 'Show Less' : 'Read More'} <ChevronIcon open={open} />
        </button>
        {open && (
          <div className="ss-panel" role="region">
            {story.body.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-3">{p}</p>
            ))}
            {story.secondImage && (
              <figure className="ss-figure">
                <img src={story.secondImage} alt={story.secondImageCaption} />
                <figcaption>{story.secondImageCaption}</figcaption>
              </figure>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const featured = stories[0];
  const rest = stories.slice(1);
  const visibleRest = showAll ? rest : rest.slice(0, 2);

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 z-0">
          <img src="/assets/moments-group-photo-school.webp" alt="Students and facilitator" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[85px] overflow-hidden leading-[0] z-[2] pointer-events-none">
          <img loading="lazy" src="/assets/wave-divider.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in">Success Stories</h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto">Real stories from the children and volunteers behind our programmes</p>
          </div>
        </div>
      </section>

      <section className="py-16 reveal-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="ss-featured">
            <img loading="lazy" src={featured.image} alt={featured.name} className="ss-featured-img" />
            <div className="ss-featured-body">
              <span className="ss-featured-eyebrow">Featured Story</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-2">{featured.name}</h2>
              <p className="ss-row-date mb-2">Published on {featured.date}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
              <FeaturedToggle story={featured} />
            </div>
          </div>

          {rest.length > 0 && (
            <>
              <div className="mt-10">
                {visibleRest.map((s) => (
                  <StoryRow key={s.id} story={s} />
                ))}
              </div>
              {rest.length > 2 && !showAll && (
                <div className="text-center mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 bg-[#004AAD] text-white hover:bg-[#003a8c] transition-colors px-8 rounded-md"
                  >
                    Show More Stories
                  </button>
                </div>
              )}
            </>
          )}

          {rest.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              More stories are on the way as we verify them with the families and volunteers involved.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#004AAD] reveal-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be part of the next story</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Your support or your time can change a child's path.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-12 bg-white text-[#004AAD] hover:bg-[#FEB344] hover:text-white transition-colors px-8 py-3 rounded-md font-semibold">
              Get Involved
            </Link>
            <Link to="/donate" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-12 border-2 border-white text-white hover:bg-white hover:text-[#004AAD] transition-colors px-8 py-3 rounded-md font-semibold">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeaturedToggle({ story }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="ss-pill"
        style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
      >
        {open ? 'Show Less' : 'Read Full Story'} <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="ss-panel" role="region">
          {story.body.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-3">{p}</p>
          ))}
          {story.secondImage && (
            <figure className="ss-figure">
              <img src={story.secondImage} alt={story.secondImageCaption} />
              <figcaption>{story.secondImageCaption}</figcaption>
            </figure>
          )}
        </div>
      )}
    </>
  );
}
