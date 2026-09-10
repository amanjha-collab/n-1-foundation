import { useState, useMemo } from 'react';

// ============================================================
// DRAFT CONTENT - NEEDS CLIENT SIGN-OFF before launch.
// Several specifics below are provisional placeholders, flagged
// individually with a (DRAFT) note in this file. In particular:
// the call window, the 3-month minimum commitment, "calls are not
// recorded", the WhatsApp/Skype/Google Voice suggestions, and the
// beginner/intermediate/advanced level definitions are all guesses
// that need confirmation from whoever runs the programme day-to-day.
// ============================================================

const groups = [
  {
    id: 'volunteering',
    title: 'Volunteering',
    chipBg: '#DBEAFE',
    chipColor: '#004AAD',
    items: [
      {
        q: 'How do I get involved?',
        a: 'Sign up through our Get Involved page. Once your registration is reviewed, we\u2019ll match you with a child based on availability and requirements.',
      },
      {
        q: 'What are the required skills to teach?',
        a: 'Fluency in spoken English and patience with young learners. No formal teaching qualification is required.',
      },
      {
        q: 'Can I teach from outside of India?',
        a: 'Yes. Since sessions happen over a phone call, volunteers can participate from anywhere in the world.',
      },
      {
        q: 'Where are the students located?',
        a: 'Students are located in tribal and underserved parts of India, primarily in rural Maharashtra.',
      },
      {
        q: 'Do I need to speak the local language?',
        a: 'No. Sessions are conducted in English. Some familiarity with the local language can help but is not required.',
      },
      {
        q: 'Can my school, college or company volunteer as a group?',
        a: 'Yes. We partner with institutions who register groups of volunteers together, and can coordinate onboarding for larger cohorts.',
      },
      {
        q: 'Do volunteers receive a certificate?',
        a: 'Yes. Volunteers receive a certificate after completing the required 12 hours of verified sessions.',
      },
    ],
  },
  {
    id: 'time-commitment',
    title: 'Time Commitment',
    chipBg: '#FEF3C7',
    chipColor: '#B45309',
    items: [
      {
        q: 'How much time do I need to commit each week?',
        a: 'Sessions are approximately 30 minutes, once a week, at a time agreed with your paired student.',
      },
      {
        q: 'What is the minimum commitment period?',
        a: '(DRAFT \u2013 to confirm) We currently ask volunteers to commit to a minimum of three months, so the child has a consistent tutor to build progress with.',
      },
      {
        q: 'What if I need to pause or discontinue partway through?',
        a: 'Let your coordinator know as early as possible so we can arrange alternate support for the child and avoid a gap in their sessions.',
      },
    ],
  },
  {
    id: 'call-format',
    title: 'Call Format and Teaching',
    chipBg: '#DCFCE7',
    chipColor: '#0F8A5F',
    items: [
      {
        q: 'How does a session actually work?',
        a: 'The child reads aloud from a physical storybook while the volunteer follows along on a digital copy, over a phone call, with the tutor guiding pronunciation and comprehension.',
      },
      {
        q: 'What platform do the calls happen on?',
        a: '(DRAFT \u2013 to confirm) Most sessions happen over a regular phone call. Some volunteer-student pairs use WhatsApp, Skype or Google Voice depending on connectivity on either side.',
      },
      {
        q: 'Is there a set call window?',
        a: '(DRAFT \u2013 to confirm) Sessions are typically scheduled between 5:00\u20138:30 pm IST on weekdays, to work around school hours in India.',
      },
      {
        q: 'Are calls recorded?',
        a: '(DRAFT \u2013 to confirm) No, calls themselves are not recorded. Session completion and hours are logged through our internal system for attendance and certification purposes.',
      },
      {
        q: 'How are student reading levels defined?',
        a: '(DRAFT \u2013 to confirm) Students are grouped as beginner, intermediate or advanced based on an initial reading assessment, which helps volunteers pick appropriate material.',
      },
      {
        q: 'What if my assigned child misses a session?',
        a: 'Let your coordinator know where possible. Repeated missed sessions may lead to a review of the pairing, and participants can request reactivation later.',
      },
      {
        q: 'Can I volunteer with more than one child?',
        a: 'Yes, depending on availability and programme requirements you may be paired with more than one student.',
      },
      {
        q: 'Who do I contact if I have a technical issue during a call?',
        a: 'Reach out to your programme coordinator, who can help troubleshoot connectivity issues or help reschedule the session.',
      },
    ],
  },
];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"></circle>
    </svg>
  );
}

export default function Faq() {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => {
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  const anyResults = filteredGroups.length > 0;

  return (
    <main>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 z-0">
          <img src="/assets/students-outdoor-learning-CmrH7eMe.webp" alt="Students learning outdoors" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[85px] overflow-hidden leading-[0] z-[2] pointer-events-none">
          <img loading="lazy" src="/assets/wave-divider.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white animate-fade-in">
              One <span className="italic font-serif">Question</span>. One <span className="italic font-serif">Answer</span>. One <span className="italic font-serif">Step Forward</span>.
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about volunteering and making a difference in children's education
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 reveal-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="fq-search-wrap">
            <span className="fq-search-icon"><SearchIcon /></span>
            <input
              type="text"
              className="fq-search"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FAQs"
            />
          </div>

          {!query && (
            <div className="fq-pills">
              {groups.map((g) => (
                <a key={g.id} href={`#${g.id}`} className="fq-pill">
                  {g.title} ({g.items.length})
                </a>
              ))}
            </div>
          )}

          {filteredGroups.map((g) => (
            <div key={g.id} id={g.id} className="fq-group" data-fq-group>
              <div className="fq-group-head">
                <span className="fq-group-icon" style={{ background: g.chipBg, color: g.chipColor }}>
                  <GroupIcon />
                </span>
                <h2 className="fq-group-title">{g.title}</h2>
                <span className="fq-group-count">{g.items.length}</span>
              </div>
              <div className="fq-list">
                {g.items.map((it, i) => (
                  <details key={i} className="fq-item">
                    <summary>
                      {it.q}
                      <span className="fq-item-plus"><PlusIcon /></span>
                    </summary>
                    <p>{it.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {!anyResults && (
            <div className="fq-empty" style={{ display: 'block' }}>
              <p className="mb-3">No questions matched "{query}".</p>
              <a href="/contact" className="fq-contact-btn fq-contact-btn--ghost">Ask us directly</a>
            </div>
          )}

          <div className="fq-hb">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Volunteer Handbook</h2>
            <h3>Profile of a Read-a-story Student</h3>
            <p className="text-gray-700 leading-relaxed">
              The majority of our students come from Zilla Parishad schools in remote Maharashtra areas. These schools often have 400+ students but only 4-5 teachers. Students are young and may not fully understand education's significance, with parents unaware of educational opportunities. With your help, these students can access otherwise unreachable opportunities.
            </p>
            <h3>Challenges Faced by Students</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Limited network coverage and connectivity issues</li>
              <li>Inconsistent electricity supply affecting phone charging</li>
              <li>Only one family phone, often taken by working parents</li>
              <li>First-generation learners with limited English exposure</li>
              <li>Potential lack of parental motivation for education</li>
              <li>Parents engaged in daily wage work, farming, or labor</li>
              <li>Students eager to learn despite unsupportive environments</li>
            </ul>
            <h3>How Your Patience and Dedication Make a Difference</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Building Trust:</strong> Your consistent presence develops trust and strong bonds</li>
              <li><strong>English Development:</strong> Dedicated efforts improve language skills and expand horizons</li>
              <li><strong>Parental Engagement:</strong> Motivate parents by demonstrating education's importance</li>
              <li><strong>Consistency:</strong> Regular volunteering establishes routines and reinforces commitment</li>
              <li><strong>Overcoming Challenges:</strong> Your dedication inspires students to overcome obstacles</li>
            </ul>
            <h3>Teaching Guidelines</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-800 mb-1">Pronunciation, Punctuation, and Intonation:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Ask students to read aloud and help them identify mistakes</li>
                  <li>Focus on pronunciation, sentence rhythm, and proper intonation</li>
                  <li>Allocate time for discussion and feedback at session end</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">Homework:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Ask students to write summaries of what they've read</li>
                  <li>Have them write new words 5 times with local language meanings</li>
                  <li>Encourage review of written work for vocabulary retention</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">Reading Session Without Books:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Sing nursery rhymes focusing on pronunciation</li>
                  <li>Teach colors, vegetables, festivals, and village life concepts</li>
                  <li>Play language games: "Give me 5 words starting with B"</li>
                  <li>Encourage active participation in a supportive environment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg border text-card-foreground shadow-sm bg-primary/5 border-primary/20 mt-8">
            <div className="p-6 pt-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">Contact our support team for additional help and guidance.</p>
              <div className="fq-contact-actions">
                <a href="tel:+917083490865" className="fq-contact-btn">Call +91 70834 90865</a>
                <a href="mailto:info@nplusone.org.in" className="fq-contact-btn fq-contact-btn--ghost">info@nplusone.org.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
