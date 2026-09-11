import { useState, useMemo } from 'react';

const rasFaqs = [
  ['What is Read-a-story (RAS)?', "RAS is n+1 Social Foundation\u2019s English reading programme. Children read storybooks while a volunteer tutor supports them through regular one-to-one phone sessions."],
  ['Who can participate?', 'Children who need support with English reading can participate. Volunteers, schools, colleges, companies and institutions can also partner with the programme.'],
  ['How does a session work?', "The child reads from a physical storybook/textbook while the tutor has a digital copy. The tutor calls through the programme's phone/telephony system and guides the child through reading and conversation."],
  ['Who are the tutors?', 'Tutors are volunteers who register through institutions, organisations or individually.'],
  ['How are students and tutors paired?', 'n+1 pairs students and tutors based on programme requirements, level, availability and other relevant information. Pairings may be reviewed when circumstances change.'],
  ['What if a session is missed?', 'The student or tutor should inform the RAS coordinator where possible. Repeated missed sessions may lead to a review of the pairing or an inactive status. Participants can request reactivation.'],
  ['Are volunteer hours recorded?', 'Yes. Hours are normally recorded through the programme\u2019s cloud telephony system. If a technical issue prevents logging, the volunteer may be asked for supporting information.'],
  ['Do volunteers receive certificates?', 'Volunteers may receive a certificate after completing the required 12 hours. The threshold and format may vary by institution or programme arrangement. Certificates are issued after verification and approval.'],
  ['Can a volunteer work with more than one child?', 'Yes, where programme requirements and availability permit. In some situations, a volunteer may work with more than one child or a small group.'],
  ['Can participation be stopped?', 'Yes. A student, parent/guardian or tutor may request withdrawal. n+1 may also deactivate participation for safeguarding, conduct, repeated absence or programme-related reasons.'],
  ['How does n+1 protect children?', "Child safety is a priority. Programme interactions are structured and monitored. Direct sharing of a child's contact details requires the appropriate parental/guardian consent. Photos and videos are used only where appropriate consent has been obtained."],
  ['Are RAS calls monitored?', 'The telephony system is used for call logging and programme monitoring. Monitoring supports quality, attendance, programme management and safeguarding.'],
  ['Can parents contact the RAS team?', 'Yes. Parents/guardians can contact the programme team regarding participation, schedules, missed sessions or other programme concerns.'],
];

const swbFaqs = [
  ['What is Solve-with-Bharat (SWB)?', "SWB is n+1 Social Foundation's foundational numeracy programme. It focuses on strengthening children's understanding and practice of addition, subtraction, multiplication and division."],
  ['Who is SWB for?', 'It is designed for children who need additional support in foundational numeracy and is implemented with schools and communities, supported by trained Community Facilitators (CFs).'],
  ['How does SWB work?', 'Children practise mathematics using a mobile-based practice application. CFs support practice, monitor participation and identify areas needing additional practice.'],
  ['What does a Community Facilitator do?', 'CFs support children, record relevant information, monitor attendance and progress, and help identify students who need additional support.'],
  ['What mathematics does SWB cover?', 'The programme focuses on addition (+), subtraction (\u2212), multiplication (\u00d7) and division (\u00f7).'],
  ['How is progress measured?', 'The programme may use baseline, midline and endline assessments, along with practice and participation data, to understand learning progress.'],
  ['What if a child is absent?', 'The absence is communicated to the programme team where possible. The CF may follow up and support the child in continuing practice.'],
  ['Can children receive additional support?', 'Yes. Practice and monitoring data help the CF and programme team identify children who need additional attention or practice.'],
  ['What information is collected?', 'n+1 may collect information needed for registration, attendance, practice, assessment and programme monitoring. Information should be limited to what is needed for programme purposes.'],
  ['Who can I contact about SWB?', 'Parents/guardians and schools can contact the n+1 programme team about participation, attendance, learning progress or implementation.'],
];

const rasTerms = [
  ['Eligibility and Registration', 'Participation is subject to the eligibility and programme requirements communicated by n+1. Registration information must be accurate.'],
  ['Parent/Guardian Consent', 'Participation by children/minors requires appropriate parent or legal guardian consent. Additional consent may be sought for direct contact, photographs, videos or other activities where required.'],
  ['Student Responsibilities', 'Students are expected to participate regularly, use programme materials responsibly and follow reasonable instructions from the tutor and programme team.'],
  ['Volunteer Responsibilities', 'Volunteers are expected to attend agreed sessions, communicate respectfully, maintain appropriate boundaries and inform n+1 if they cannot attend or continue.'],
  ['Child Safeguarding', 'All interactions with children must be appropriate, respectful and programme-related. Volunteers must not seek unnecessary personal information or bypass approved communication channels.'],
  ['Contact Details', "A child's direct contact details will be shared with a tutor only where the programme arrangement and required parental/guardian consent permit it."],
  ['Calls and Monitoring', 'RAS uses phone/cloud telephony systems to facilitate sessions and record programme activity. Calls or related records may be reviewed for programme management, quality assurance and safeguarding.'],
  ['Attendance and Hours', 'Participation and volunteer hours are recorded using available programme records. Supporting information may be requested when automatic logging is unavailable.'],
  ['Certificates', 'Certificates are issued after required hours and other applicable requirements are verified. Qualifying hours and formats may vary by institution or programme arrangement.'],
  ['Inactive, Deactivation and Reactivation', 'n+1 may mark a participant inactive when participation stops or repeated non-participation makes a pairing impractical. Participants may request reactivation, subject to programme capacity and requirements.'],
  ['Conduct', 'Harassment, inappropriate communication, discrimination, bullying, attempts to bypass safeguarding procedures or behaviour that may place a child at risk are not permitted.'],
  ['Programme Changes', 'n+1 may change schedules, materials, technology, pairing arrangements or processes when required for programme delivery.'],
  ['Technical Issues', 'Phone networks, internet connectivity, telephony systems and other technology may occasionally fail. n+1 will make reasonable efforts to address such issues but cannot guarantee uninterrupted service.'],
  ['Privacy and Use of Information', 'Information collected through RAS will be used for registration, communication, monitoring, reporting, safeguarding and related organisational purposes. n+1 will not knowingly use participant information for unrelated commercial purposes.'],
  ['Withdrawal', 'A participant or participating institution may request withdrawal. n+1 may retain necessary programme records for legitimate organisational, reporting or safeguarding purposes.'],
  ['Acceptance', "Registration or continued participation indicates that the participant, and where applicable the parent/guardian or institution, has read and agrees to follow these programme terms and n+1's programme instructions."],
];

const swbTerms = [
  ['Eligibility and Registration', 'Participation is subject to the eligibility and programme requirements communicated by n+1. Registration information must be accurate and complete.'],
  ['Parent/Guardian and School Consent', 'Participation by children/minors is subject to appropriate consent and the arrangements agreed with the participating school or community.'],
  ['Student Responsibilities', 'Students are expected to attend sessions or practice activities regularly, use devices and programme materials responsibly, and follow reasonable instructions from the CF and programme team.'],
  ['Devices and Application', 'Where a device is provided for programme use, it should be used responsibly and for intended programme activities. Technical or device problems should be reported to the programme team.'],
  ['Community Facilitator Responsibilities', 'CFs are expected to support students respectfully, maintain accurate programme records, monitor participation and progress, and report concerns to n+1.'],
  ['Assessments and Monitoring', 'Students may participate in baseline, midline and endline assessments and other monitoring activities used to understand participation and learning progress.'],
  ['Data and Programme Records', 'n+1 may collect and maintain student, attendance, practice and assessment information needed to operate, monitor and report on the programme.'],
  ['Child Safeguarding', "All programme interactions must be respectful and appropriate. Any concern about a child's safety or wellbeing should be reported promptly to the programme team."],
  ['Photography and Video', 'Photographs or videos of children will be taken or used only where appropriate consent has been obtained.'],
  ['Conduct', 'Bullying, harassment, discrimination, inappropriate behaviour, misuse of programme devices or deliberate manipulation of programme records are not permitted.'],
  ['Programme Changes', 'n+1 may modify schedules, practice materials, application features, assessment processes or implementation arrangements when required.'],
  ['Technical Issues', 'The programme may be affected by device, application, network or connectivity problems. n+1 will make reasonable efforts to resolve such issues but cannot guarantee uninterrupted access.'],
  ['Privacy and Use of Information', 'Information collected through SWB will be used for programme implementation, communication, monitoring, evaluation, reporting, safeguarding and related organisational purposes. n+1 will not knowingly use participant information for unrelated commercial purposes.'],
  ['Withdrawal or Deactivation', 'A student, parent/guardian or participating school may request withdrawal. n+1 may also deactivate participation for safeguarding, conduct, repeated non-participation or programme-related concerns.'],
  ['Acceptance', "Registration or continued participation indicates that the participant, and where applicable the parent/guardian or participating institution, has read and agrees to these terms and n+1's programme instructions."],
];

function toItems(pairs) {
  return pairs.map(([q, a]) => ({ q, a }));
}

const groups = [
  { part: 'Part A', pillLabel: 'Read-a-story', title: 'Read-a-story \u2014 FAQs', chipBg: '#FEF3C7', chipColor: '#B45309', icon: 'book', numbered: false, items: toItems(rasFaqs) },
  { part: 'Part B', pillLabel: 'Solve-with-Bharat', title: 'Solve-with-Bharat \u2014 FAQs', chipBg: '#DBEAFE', chipColor: '#004AAD', icon: 'calc', numbered: false, items: toItems(swbFaqs) },
  { part: 'Part C', pillLabel: 'RAS Terms', title: 'Read-a-story \u2014 Terms & Conditions', chipBg: '#DCFCE7', chipColor: '#0F8A5F', icon: 'file', numbered: true, items: toItems(rasTerms) },
  { part: 'Part D', pillLabel: 'SWB Terms', title: 'Solve-with-Bharat \u2014 Terms & Conditions', chipBg: '#EDE9FE', chipColor: '#6D28D9', icon: 'shield', numbered: true, items: toItems(swbTerms) },
];

function GroupIcon({ type }) {
  const common = { width: 19, height: 19, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'book') {
    return (
      <svg {...common}>
        <path d="M12 7v14"></path>
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
      </svg>
    );
  }
  if (type === 'calc') {
    return (
      <svg {...common}>
        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
        <line x1="8" x2="16" y1="6" y2="6"></line>
        <line x1="16" x2="16" y1="14" y2="18"></line>
        <path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path>
        <path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path>
      </svg>
    );
  }
  if (type === 'file') {
    return (
      <svg {...common}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

export default function Faq() {
  const [query, setQuery] = useState('');
  const [openKeys, setOpenKeys] = useState(() => new Set());
  const [expandedGroups, setExpandedGroups] = useState(() => new Set());
  const PREVIEW_COUNT = 5;

  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const expandGroup = (gi) => {
    setExpandedGroups((prev) => new Set(prev).add(gi));
  };

  const q = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => {
    if (!q) return groups;
    return groups
      .map((g) => ({ ...g, items: g.items.filter((it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)) }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  const anyResults = filteredGroups.length > 0;

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden reveal-on-scroll">
        <div className="absolute inset-0 z-0">
          <img src="/assets/students-outdoor-learning-CmrH7eMe.webp" alt="Students learning outdoors" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-[85px] overflow-hidden leading-[0] z-[2] pointer-events-none">
          <img loading="lazy" src="/assets/wave-divider.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-white animate-fade-in">
              FAQs &amp; Programme Terms
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Everything about Read-a-story and Solve-with-Bharat, in one place
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white reveal-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fq-wrap">
            <div className="fq-tools">
              <label className="fq-search">
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Search your questions"
                  aria-label="Search your questions"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <div className="fq-pills">
                {groups.map((g, gi) => (
                  <a key={gi} className="fq-pill" href={`#fq-g${gi}`}>
                    {g.pillLabel}<b>{g.items.length}</b>
                  </a>
                ))}
              </div>
            </div>

            {!anyResults && (
              <p className="fq-empty">
                Nothing matches that search. Try a different word, or <a href="/contact">ask us directly</a>.
              </p>
            )}

            {filteredGroups.map((g, gi) => {
              const isExpanded = expandedGroups.has(gi) || !!q;
              const visibleItems = isExpanded ? g.items : g.items.slice(0, PREVIEW_COUNT);
              const remaining = g.items.length - visibleItems.length;
              return (
              <section key={gi} className="fq-group" id={`fq-g${gi}`}>
                <header className="fq-group__h">
                  <span className="fq-group__ic" style={{ background: g.chipBg, color: g.chipColor }}>
                    <GroupIcon type={g.icon} />
                  </span>
                  <div className="fq-group__meta">
                    <span className="fq-group__part">{g.part}</span>
                    <h3 className="fq-group__t">{g.title}</h3>
                  </div>
                  <span className="fq-group__n">{g.items.length}</span>
                </header>
                <div className="fq-list">
                  {visibleItems.map((it, i) => {
                    const key = `${gi}-${i}`;
                    const open = openKeys.has(key);
                    const state = open ? 'open' : 'closed';
                    return (
                      <div key={i} className="fq-item" data-state={state}>
                        <button
                          type="button"
                          className="fq-q"
                          aria-expanded={open}
                          aria-controls={`fq-a-${key}`}
                          data-state={state}
                          onClick={() => toggle(key)}
                        >
                          <span className="fq-q__t">
                            {g.numbered && <span className="fq-q__num">{i + 1}.</span>}
                            {it.q}
                          </span>
                          <span className="fq-q__i"><PlusIcon /></span>
                        </button>
                        <div className="fq-a" id={`fq-a-${key}`} role="region" data-state={state} hidden={!open}>
                          <p>{it.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {remaining > 0 && (
                  <button type="button" className="fq-showmore" onClick={() => expandGroup(gi)}>
                    Show {remaining} more
                  </button>
                )}
              </section>
              );
            })}

            <div className="fq-help">
              <h3 className="fq-help__t">Still have questions?</h3>
              <p className="fq-help__s">Our team answers volunteer queries within a working day.</p>
              <div className="fq-help__row">
                <a className="fq-help__btn" href="tel:+917083490865"><PhoneIcon />+91 70834 90865</a>
                <a className="fq-help__btn fq-help__btn--ghost" href="mailto:admin@readastory.org.in"><MailIcon />admin@readastory.org.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
