import { useState } from 'react';
import { Link } from 'react-router-dom';

// Only real, verified stories go here. Do not add invented/placeholder
// beneficiary stories - for a nonprofit, that's a credibility risk if a donor
// or journalist ever asks for the person behind a story that doesn't exist.

function ArrowIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform .2s ease', transform: open ? 'rotate(90deg)' : 'none' }}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}

export default function SuccessStories() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 z-0">
          <img src="/assets/success-stories-hero-officer-student.webp" alt="Officer speaking with a student" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[85px] overflow-hidden leading-[0] z-[2] pointer-events-none">
          <img loading="lazy" src="/assets/wave-divider.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-white animate-fade-in">Success Stories</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">Amazing children, amazing stories: how volunteers and communities change one child's future at a time.</p>
          </div>
        </div>
      </section>

      <section className="py-16 reveal-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="ss-featured ss-featured--compact">
            <div className="ss-featured__media">
              <img src="/assets/sapna-with-nick.webp" alt="Sapna Karmoda reading English with volunteer Nick" />
            </div>
            <div className="ss-featured__body">
              <span className="ss-featured__eyebrow">Featured story</span>
              <h2 className="ss-featured__title">Sapna Karmoda: From a Tribal Classroom to a Government Job</h2>
              <p className="ss-featured__excerpt">
                A tribal student from Maharashtra, Sapna joined Read-a-story to close the one gap her schooling could not &mdash; English.
                Weekly sessions with Nick, a volunteer from abroad, took her from reading aloud to answering an interview panel in
                English &mdash; and into a government job.
              </p>
              <button
                type="button"
                className="ss-btn"
                aria-expanded={open}
                aria-controls="ss-panel-featured"
                data-state={open ? 'open' : 'closed'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? 'Show Less' : 'Read More'} <ArrowIcon open={open} />
              </button>
              {open && (
                <div className="ss-panel" id="ss-panel-featured" role="region" data-state="open">
                  <p>
                    &ldquo;The state took care of my education till Class 12, and the hostel took care of me through D.Ed,&rdquo; Sapna says.
                    What no scheme could give her was the confidence to speak and read English &mdash; the language every interview and
                    every application form assumed she already had.
                  </p>
                  <p>
                    Nick, a volunteer from overseas, sat with her over newspapers and storybooks: she read aloud, he corrected gently,
                    and neither of them skipped a week. Reading turned into speaking, and speaking turned into answering questions in
                    front of a panel.
                  </p>
                  <p>
                    Sapna cleared her selection and now holds a government post &mdash; the first in her family to do so. She still
                    returns to the programme, this time on the other side of the call, reading with children from her own community.
                  </p>
                  <figure className="ss-figure">
                    <img loading="lazy" src="/assets/sapna-story.webp" alt="Sapna Karmoda telling her story" />
                    <figcaption>Sapna telling her story in her village &mdash; &ldquo;the state took care of my education till 12th, and the hostel for D.Ed.&rdquo;</figcaption>
                  </figure>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-gray-500 mt-10 max-w-xl mx-auto">
            More stories are on the way as we verify them with the families and volunteers involved.
          </p>
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
