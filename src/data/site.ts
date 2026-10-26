// All copy below is verbatim from https://teamoutliers.com (scraped 2026-10-26).
// Typos in the source are kept as-is and listed in the delivery note for the client.
// Only neutral UI microcopy lives in the components themselves.

export const brand = {
  name: 'Outliers',
  legalName: 'Team Outliers Ltd',
  companyNo: '12995322',
  registeredOffice: '10 Kentrigg, Kendal, LA9 6EE, England',
  facility: 'Unit 1 Junction36 Rural Auctions Centre LA7 7FP',
  classesWhere: 'Junction 36, LA7 7FP',
  email: 'chris@teamoutliers.com',
  phone: { label: 'Chris Downham', display: '07772 955986', tel: '+447772955986' },
  physioPhone: { label: 'Lucy (Lead Physiotherapist)', display: '07796 882302', tel: '+447796882302' },
  site: 'https://teamoutliers.com',
};

export const titles = {
  home: 'Outliers Performance Coaching, Rugby and Physiotherapy - Outliers',
  teamOutliers: 'Outliers Services - Outliers',
  online: 'Outliers Online Programmes - Outliers',
  classes: 'Team Outliers Classes - Outliers',
  physio: 'Outliers Physiotherapy - Outliers',
  northern: 'Northern Outliers Rugby - Outliers',
  consulting: 'Schools and Clubs - Outliers',
  method: 'The Outliers Method (Methodology) - Outliers',
  team: 'Outliers Team - Outliers',
  contact: 'Contact us - Outliers',
  terms: 'Terms and Conditions - Outliers',
  privacy: 'Outliers Privacy Policy - Outliers',
};

export const home = {
  kicker: 'Outliers, Move Brilliantly.',
  h1: 'Train Differently.',
  lead: 'Too many athletes fall short, not from lack of effort, but from chasing quick wins without the right coaching. At Outliers, we’re here to change that. We coach for the long game.',
  founder: 'Led by founder Chris Downham Outliers is a performance coaching and physiotherapy business combining coaching with movement mastery to future-proof athletes.',
  missionTitle: 'Redefining Athletic Movement',
  mission: [
    'Outliers’ mission is simple: to revolutionise the way athletes train. We combine elite experience, cutting-edge coaching, and expert physiotherapy knowledge to help you dominate your sport and understand your body.',
    'We go beyond the basics, developing control, strength, power and endurance that lasts a lifetime. This is about building the kind of athlete who performs brilliantly and stays healthier, longer.',
  ],
  northernTitle: 'NORTHERN OUTLIERS',
  northernNews: 'NEW DATES FROM SEPT 2026 RELEASED!',
  northernCta: 'Take me there!',
  whyTitle: 'Why Outliers?',
  why: [
    'Outliers don’t follow – they lead. With precision, intention, and a champion’s mindset.',
    'We equip athletes, parents, and coaches with the tools and support to perform at their best. This is where game-changers belong. Join the movement. Become an Outlier.',
  ],
  whyCta: 'See All Our Services',
  bespokeTitle: 'BUILT AROUND YOU, DRIVEN BY PERFORMANCE',
  bespoke:
    'Alongside our comprehensive online programme, Outliers also offers a bespoke coaching service. It really does what it says on the tin and is individually adapted for every athlete. From hockey players to sprinters we have worked with multiple athletes to give them the edge and maximise their performance',
  testimonialsKicker: 'This is what makes us different',
  testimonialsTitle: 'Hear from our athletes.',
  talkTitle: 'Want to talk?',
  talk: 'Not sure where to start? Contact us to discuss your goals and we’ll help you find the right Outliers service for you.',
};

// Old homepage cards showed "Company Name" under every name: a theme placeholder, dropped.
export const testimonials = [
  {
    name: 'Joe Todd',
    img: 'track-trio',
    quote:
      'We asked Chris to coach our twin boys (400m and 800m runners) when they were losing interest in running and unsure how to train in the gym. His fun, supportive approach helped them bond with him immediately. His impressive knowledge also quickly gave the boys self-belief. The weekly training plans and video guidance are incredibly helpful. Just four months in, the boys are running better than ever. I would recommend Chris without hesitation',
  },
  {
    name: 'Tim Humphries',
    img: 'tim',
    quote:
      'At 32, after battling various injuries, I still wanted to push my squash performance. Thanks to Chris at Outliers, I’ve climbed the rankings, stayed injury-free, and can now enjoy other sports too!',
  },
  {
    name: 'Andrew Carruthers',
    img: 'shot-put',
    quote:
      'As a parent, I saw how Chris managed to get the best out of Hannah (daughter) and from the early sessions watching her train with him helped me understand what she was capable of and how far she can push herself! Chris’s coaching style has influenced Hannah’s development – as parents we have noticed a great improvement in her self esteem, which is then reflected in her performance on the pitch as well as her attitude off the pitch.',
  },
  {
    name: 'Caroline Flakelar',
    img: 'rugby-carry',
    quote:
      'I first approached Chris in 2024 when my 14 yo daughter stated that her dream was to play professional rugby – What Chris provides is a structured but interesting training regime that any keen youth player can manage themselves, at home and with minimal equipment. The sessions are short enough and of sufficient intensity to ensure that progress is made without overloading growing bodies. My daughter has recently been selected for our County U16 squad and I firmly believe her S&C with Chris is one of the major reasons why she was successful.',
  },
  {
    name: 'Helen Dawson',
    img: 'evie-carry',
    quote:
      'Since training with Chris, both of my teenage children have grown in confidence and strength. Their performance on the rugby field has improved noticeably, and as a family, we’re really excited to see how they continue to develop. I’d really recommend Chris to any athlete or parent who are looking to make the most out of their sport without having to exhaust themselves.',
  },
  {
    name: 'Liam Moffatt',
    img: null,
    quote:
      'I would definitely recommend to other athletes. I personally find it complements my sport better than other training methods I’ve tried. The movements used in the programming closely replicates natural movement so the strength and endurance is developed in a more useful and accessible way. Most importantly for me, the focus on good movement at sensible weights, means that I have seen a massive reduction in injury time meaning I can spend more time doing the things I enjoy',
  },
];

/* ---------------- The three strands ---------------- */

export const strands = [
  {
    slug: 'team-outliers',
    href: '/team-outliers',
    name: 'Team Outliers',
    tag: 'Performance coaching & physiotherapy',
    img: 'band-row',
    blurb: 'Led by founder Chris Downham Outliers is a performance coaching and physiotherapy business combining coaching with movement mastery to future-proof athletes.',
    links: [
      { label: 'Explore Online Programmes', href: '/team-outliers/online-programmes' },
      { label: 'Explore Physiotherapy', href: '/team-outliers/physiotherapy' },
      { label: 'Explore Our Classes', href: '/team-outliers/classes' },
    ],
  },
  {
    slug: 'northern-outliers',
    href: '/northern-outliers',
    name: 'Northern Outliers',
    tag: 'Rugby pathway · Penrith RUFC',
    img: 'rugby-huddle',
    blurb: 'This is a performance pathway for all rugby players across Cumbria. Outliers Rugby aims to bridge the gap between grassroots rugby and elite pathways, delivering a professional coaching environment without elitist barriers.',
    links: [{ label: 'Take me there!', href: '/northern-outliers' }],
  },
  {
    slug: 'consulting',
    href: '/consulting',
    name: 'Consulting',
    tag: 'Schools & clubs',
    img: 'coach-field',
    blurb: 'Every school and club is different, which is why our sessions are fully bespoke. We work closely with teachers, coaches, and support staff to deliver training that aligns with your environment, age groups, and sporting demands.',
    links: [{ label: 'Explore Coaching Consultancy', href: '/consulting' }],
  },
];

/* ---------------- Team Outliers (from /outliers-services/) ---------------- */

export const services = {
  onlineTitle: 'Online Programmes',
  onlineFrom: 'Start from: £45.00 per month',
  programmes: [
    {
      name: 'Performance Programme',
      text: 'This programme is designed to support people looking to perform to their best in their chosen sport.',
      bullets: ['Movement video demonstrations', 'Four Sessions per week', 'New plan each week (no session fatigue).', 'Delivered in our App for easy use.'],
    },
    {
      name: 'Bespoke Coaching',
      text: 'We offer a fully tailored programme with regular contact with our performance coaches, giving you expert guidance, accountability, and support as you progress.',
      bullets: ['Individual Movement Assessment.', 'Periodised Bespoke plan mapping out full weeks with our App.', 'Face to face and online sessions dependent on needs of the athlete.', 'Integrated Physiotherapy *additional cost'],
    },
    {
      name: 'Resilience Programme (COMING SOON)',
      text: 'This programme is designed for those who want to stay strong, and injury-free without high training demands. This is a perfect and sustainable approach to strength and movement for everyday life and sport.',
      bullets: [],
    },
  ],
  onlineCta: 'See Our Programmes',
  physioTitle: 'Physio Services',
  physioFrom: 'Start from: £75.00',
  physioLead: 'We go beyond traditional physiotherapy, focusing on long-term strength, resilience, and performance not just short-term pain relief.',
  physioItems: [
    { name: 'Physiotherapy Initial Consultation', text: 'A comprehensive assessment to understand your injury, movement patterns, and goals.' },
    { name: 'Rehabilitation in Strength – 12 Week Plan', text: 'A structured programme bridging the gap between rehab and full performance, ensuring you return stronger and more resilient' },
  ],
  physioCta: 'See Our Physiotherapy',
  classesTitle: 'Our Classes',
  classesLead: 'Our classes are held at our unit and are designed to help you build strength, confidence and long-term health in a supportive environment.',
  classes: [
    {
      name: 'Intro to Women’s Strength and Conditioning',
      when: 'Mondays | 9am-10am',
      text: [
        'Learn the basics of strength training in a supportive, beginner-friendly space. These sessions introduce the fundamentals of strength and conditioning, helping you understand how resistance exercise can support muscle strength, movement control and bone health. You’ll build practical skills and confidence to stay active and strong for the long term.',
        'Suitable for beginners and anyone new to strength and conditioning.',
      ],
    },
    {
      name: 'Strength and Conditioning',
      when: 'Wednesdays | 6pm',
      text: [
        'Our regular strength and conditioning class is ideal if you already have some experience of training and want to continue developing your strength, movement quality and overall performance.',
        'Sessions are structured and coached, with options to progress as your confidence and technique improve.',
      ],
    },
    {
      name: 'Coming soon Thursdays',
      when: '',
      text: ['Additional classes will be launching soon. Keep an eye on this page or follow us on social media for updates.'],
    },
  ],
  classesCta: 'See Our Classes',
  contactTitle: 'Contact Us',
};

/* ---------------- /outliers-online-programmes/ ---------------- */

export const online = {
  performance: {
    title: 'Performance Programme',
    sub: 'High-performance movement, strengh conditioning…anywhere.',
    text: [
      'Train at home, in the gym, or on the road with structured sessions that keep you strong, mobile, and resilient.',
      'Train up to four days per week with new programmes delivered every Sunday via our app, giving you a clear plan for the week ahead. Every exercise is supported by video demonstrations from expert Outliers coaches, with options for full or limited equipment training.',
      'When you start, you will complete six introductory sessions as part of your training plan. These teach The Outliers Method, ensuring you understand our approach, move with purpose and reduce injury risk, from day one.',
    ],
    fee: 'Monthly fee: £45',
    cta: 'Sign Up',
  },
  bespoke: {
    title: 'Bespoke Coaching',
    sub: 'Individualised training, built around you.',
    text: [
      'Our bespoke coaching delivers a fully tailored programme designed around your goals, sport, training history, lifestyle, and current capacity.',
      'After an initial assessment your programme will be built and delivered via our app and updated regularly based on your progress. Every session includes video demonstrations, clear intent, and direct application of The Outliers Method.',
      'Our Bespoke coaching service also offers in person or online sessions that fit in with your plan. This may be looking at sports technique or an element of strength and conditioning.',
      'You’ll have ongoing contact with your performance coach, ensuring feedback, adjustments, and accountability throughout so your training evolves as you do, not just week to week, but long term.',
    ],
    cta: 'Book a Call',
  },
  resilience: {
    title: 'Resilience Programme',
    text: [
      'Built for long term health, confidence, and consistency, the Resilience Programme supports those who want to stay active, strong, and injury-free, without high training demands.',
      'Using simple, effective strength and movement work, sessions are designed to be completed in under one hour, focusing on joint health, strength, and movement confidence. The programme applies The Outliers Method in a progressive, accessible way, helping you build capacity for life compliment your goals.',
    ],
    fee: 'Monthly fee: £35',
    cta: 'Sign Up',
  },
  faqTitle: 'F.A.Q.',
  faq: [
    { q: 'Who are the programmes suitable for?', a: 'Our programmes are designed for a wide range of abilities, from those returning to structured training to athletes looking to improve performance. Each option is built around The Outliers Method, with progressions to match your experience and goals.' },
    { q: 'How much time do I need each week?', a: 'Training is structured across four sessions per week, with each session taking around one hour. This allows you to train consistently alongside work, sport, and everyday life.' },
    { q: 'Do I need gym equipment?', a: 'Yes, ideally, you need some equipment to get the best benefit from resistance training. However, a minimum amount of kit would be: two dumbbells, a resistance band, and a kettlebell. If possible we recommend athletes to get a light medicine ball or slam ball. All exercises can be adapted to work with this equipment. Any further questions don’t hesitate to contact us.' },
    { q: 'How is the programme delivered?', a: 'All programmes are delivered via our app, with weekly plans released every Sunday for the week ahead. Every movement includes video demonstrations and clear coaching guidance.' },
    { q: 'What makes Outliers different?', a: 'Outliers focuses on movement quality, long-term strength, and injury resilience, not quick fixes. Whether you’re training online, receiving bespoke coaching, or attending in person, you benefit from expert coaching, clear structure, and an approach designed to last.' },
  ],
};

/* ---------------- /outliers-services/team-outliers-classes/ ---------------- */

export const classesPage = {
  intro: {
    title: 'Intro to Women’s Strength and Conditioning',
    when: 'Start Monday 2 November 2026 at 9am -10am',
    where: 'Junction 36, LA7 7FP',
    text: [
      'Our Intro to Women’s Strength and Conditioning classes are designed for women who are new to strength training, returning to exercise, or simply want to learn the fundamentals in a supportive and welcoming environment!',
      'Each session focuses on building confidence as well as strength. You’ll be introduced to key movements and training techniques, learning how to use resistance safely and effectively to develop muscle strength, improve movement control and support bone health.',
      'There’s no expectation to arrive already strong, fit or experienced. The sessions are beginner-friendly, paced appropriately and coached with clear guidance, so you can learn at a level that feels right for you.',
      'Over time, you’ll develop practical strength and skills that carry into everyday life — from feeling more capable with daily movement to building a foundation for long-term health and activity.',
    ],
    suitable: 'Beginners and anyone looking for an introduction to strength and conditioning.',
    note: 'Just a heads up, spaces are limited! Once the 9am class is full we will open spaces for 10am',
    price: 'Six week block: £90',
    signup: 'Sign up to our 9am class which kicks off on Monday 2 November. Once this class is full we will open slots for our 10am class.',
    cta: 'Sign Up',
  },
  sc: {
    title: 'Strength and Conditioning',
    when: 'Every Wednesday @ 6pm',
    text: [
      'Our Wednesday Strength and Conditioning class is designed for people who already have some experience of training and want to take their strength, movement and performance further!',
      'Sessions build on the foundations of strength and conditioning, with a focus on developing strength, power, control and resilience. You’ll work through structured exercises and training progressions, with coaching to help you move well, challenge yourself appropriately and continue making progress.',
      'This class is ideal if you’re comfortable with the basics of resistance training and are looking for a regular, coached session to keep you accountable and consistent.',
      'If interested, please contact us below!',
    ],
    cta: 'Contact Us',
  },
  soon: {
    title: 'COMING SOON',
    sub: 'Thursday Classes',
    text: [
      'We’re adding more classes to our timetable soon.',
      'Details will be announced shortly. If you’d like to be kept updated, follow us on social media or check back on this page.',
    ],
  },
};

/* ---------------- /physiotherapy/ ---------------- */

export const physio = {
  title: 'Outliers Physiotherapy & Athletic Recovery',
  lead: 'At Outliers, we’re redefining what physiotherapy and rehabilitation mean. Our goal is to help you take ownership of your health, build strength and resilience, and stay well for the long term. We provide the support, expertise, and accountability you need to recover effectively and perform at your best!',
  offerTitle: 'What We Offer:',
  consult: {
    title: 'Physiotherapy Initial Consultation',
    sub: 'Our in-person (Cumbria) and remote consultation is a comprehensive assessment designed to identify the root cause of your pain, discomfort, or injury, not just the symptoms.',
    steps: [
      { t: 'Comprehensive Injury Assessment', d: 'We assess more than the injured area, evaluating how your body moves and functions as a whole. This includes analysing movement patterns, balance, coordination, and strength to identify compensations or imbalances contributing to your issue.' },
      { t: 'Holistic Movement Assessment:', d: 'Here we identify the root cause of your pain, discomfort or injury. We will take a detailed look at your lifestyle followed by a thorough physical examination including a joint and muscle testing.' },
      { t: 'Initial Rehabilitation Plan', d: 'We will provide individualised plan to help you return to a pain-free, active lifestyle.' },
    ],
    price: 'From £75',
    cta: 'Enquire Now',
    note: 'The usual initial assessment is one hour. However, if you feel you have multiple movement issues or feel your case is more complex, then we offer the option of a longer initial assessment of 1.5 hours. If you wish to make this particular appointment please let us know in the enquiry form.',
  },
  rehab: {
    title: 'Rehabilitation in Strength – 12 Week Plan',
    sub: 'Our most inclusive rehabilitation and training program, built for athletes and active individuals looking to overcome pain, recover efficiently from injury or surgery, and enhance their performance simultaneously.',
    includedTitle: 'What’s included?',
    included: [
      'A physiotherapy led Initial 1.5 hour movement assessment.',
      'Accountability and ongoing support for your rehab and strength and conditioning over a three month period with in person and online check in’s',
      'A progressive approach to rehabilitation which is also integrated into a strength program designed around you and your needs.',
      'The opportunity to learn how to move more effectively toward your goals through a blend of rehab-focused training and the Outliers Movement Methodology.',
    ],
    app: 'Access all your training through our online app, made complete with instructional videos for every exercise.',
    startTitle: 'Contact Us To Start!',
    cta: 'Start Now',
  },
  questionsTitle: 'Have questions?',
  questions: 'Not sure where to start? Call us directly at 07796 882302 and we’ll help you find the right physio service for you.',
  enquiry: 'Please fill out the short form below or you can give our Lead Physiotherapist Lucy a call on 07796 882302',
};

/* ---------------- /northern-outliers-rugby/ ---------------- */

export const northern = {
  intro: 'We’re excited to introduce Northern Outliers, a new rugby pathway designed to revolutionise player development for U13-18 Girls and U13-17 Boys at Penrith RUFC, Cumbria.',
  visionLead: 'Our vision is simple yet ambitious:',
  vision: 'To make performance-level coaching accessible to all young players, regardless of background or ability, we want to keep dreams alive!',
  text: [
    'Through the Northern Outliers programme, we will help every aspiring rugby athlete build world class basics and maximise their athletic potential without over stressing their bodies.',
    'The Northern Outliers programme is designed to open the door of opportunity to all young people, because it’s amazing to see what they can do when they are given a chance!',
  ],
  datesTitle: 'Future Block Dates at Penrith RUFC',
  datesLead: 'Northern Outliers 2026-2027 training will start in September and will run the first three Tuesdays every month at Penrith RUFC. We will run September to April with a break in December.',
  datesIntro: 'The dates for the next blocks are:',
  dates: [
    { m: 'Sep', d: '1st, 8th, 15th' },
    { m: 'Oct', d: '6th, 13th, 20th' },
    { m: 'Nov', d: '3rd, 10th, 17th' },
    { m: 'Dec', d: 'BREAK' },
    { m: 'Jan', d: '5th, 12th, 19th' },
    { m: 'Feb', d: '2nd, 9th, 16th' },
    { m: 'Mar', d: '2nd, 9th, 16th' },
    { m: 'Apr', d: 'TBC (Based on new intake)' },
  ],
  spond: 'https://spond.com/invite/ZPCQB',
  spondLabel: 'Visit this link https://spond.com/invite/ZPCQB',
  spondOr: 'or fill out our quick form!',
  signup: 'https://club.spond.com/landing/signup/northernoutliers/form/51105CB980E14E219B566A7292EB3C26',
  signupLabel: 'Sign Up',
  diffTitle: 'What Makes Northern Outliers Different?',
  diffLead: 'We’re non-elitist, inclusive, and collaborative: We work to support clubs and schools, complementing their existing programmes rather than competing.',
  holisticTitle: 'Holistic player development:',
  pillars: [
    { t: 'Competence', d: 'We teach world-class basics from rugby skills to the fundamentals of movement. Because the best players in the world simply do the basics better!' },
    { t: 'Confidence', d: 'We nurture self-belief, self worth, resilience, and mental toughness through the Outliers coaching philosophy.' },
    { t: 'Connection', d: 'We want to build social bonds between players, parents, coaches, and staff. Focussing on the best bit about rugby and keeping the community spirit of rugby alive.' },
    { t: 'Character', d: 'We develop integrity, empathy, and respect so players become the role models of the next generation. – Better People make Better Players!' },
  ],
  joinTitle: 'To join our future sessions and blocks at Penrith RUFC, sign up to our SPOND group',
  shopTitle: 'Visit our shop!',
  shopText: 'Why not have a browse through our kit and what we have on offer.',
  shopCta: 'Take me to the shop',
  shop: 'https://halbro.com/product-category/your-store/northern-outliers/',
  // also from /outliers-services/
  pathway: [
    'This is a performance pathway for all rugby players across Cumbria. Outliers Rugby aims to bridge the gap between grassroots rugby and elite pathways, delivering a professional coaching environment without elitist barriers.',
    'Our aim is to provide a professional, supportive environment where athletes can improve, rediscover belief, and prepare themselves properly for future opportunities, or simply experience what it feels like to be coached at a high performance level.',
  ],
  gallery: ['rugby-huddle', 'rugby-sprint', 'rugby-drill', 'rugby-staff', 'rugby-run', 'rugby-pad'],
};

/* ---------------- Consulting (old /schools-and-clubs/) ---------------- */

export const consulting = {
  title: 'Schools & Clubs',
  lead: 'Developing young athletes isn’t about doing more — it’s about doing the right things at the right time.',
  text: [
    'At Outliers, we work with schools and clubs to build strong, capable, and resilient athletes by teaching movement, strength, and performance fundamentals that support long-term development.',
    'Our approach is grounded in The Outliers Method, developed by performance coaches and physiotherapy experts, ensuring athletes are not only prepared to perform but protected for the future.',
  ],
  blocks: [
    {
      t: 'Athletic Foundations & Movement Education',
      img: 'workshop',
      p: [
        'We teach young athletes where to start. Before chasing performance outcomes, we focus on movement quality, coordination, and strength fundamentals that underpin all sport.',
        'Sessions introduce athletes to safe and effective strength training, helping them understand how to move well, control their bodies, and build confidence in physical training. This foundation reduces injury risk and supports sustainable athletic development as training demands increase.',
      ],
    },
    {
      t: 'Bespoke Coaching for Schools & Clubs',
      img: 'rugby-tackle',
      p: [
        'Every school and club is different, which is why our sessions are fully bespoke. We work closely with teachers, coaches, and support staff to deliver training that aligns with your environment, age groups, and sporting demands.',
        'Whether supporting PE programmes, academy pathways, or team-based performance, our coaching is structured, progressive, and designed to complement, not replace, existing sport training. We cover a multitude of sports',
      ],
    },
    {
      t: 'Education, Workshops & Coach Support',
      img: 'coach-ball',
      p: [
        'We provide educational talks and workshops for athletes, coaches, and parents, delivered by our performance coaches and physiotherapists. Topics include youth strength training, injury prevention, movement literacy, fuelking for sport, recovery, and long-term athletic development.',
        'These sessions empower those around the athlete with the knowledge needed to support healthy, confident, and resilient participation in sport.',
      ],
    },
  ],
  workTitle: 'Work With Outliers',
  work: 'If you’re a school or club looking to support athlete development, reduce injury risk, and introduce a structured approach to physical preparation, we’d love to work with you. Get in touch to discuss how we can support your athletes.',
  touchTitle: 'Get in Touch',
};

/* ---------------- /the-outliers-method-methodology/ ---------------- */

export const method = {
  kicker: 'The Outliers Method:',
  title: 'Built For Performance. Grounded In Science. Made To Last.',
  text: [
    'At Outliers, we don’t just build athletes we build movement mastery. Because behind every elite performance is a body that moves brilliantly to solve a problem.',
    'The Outliers Method underpins everything we do. From 1:1 coaching and team programmes to physiotherapy, bespoke programming, and online training.',
    'Our methodology (The Outliers Method) is based on three foundational principles, designed to unlock athletic ability, reduce injury risk, and build a lifelong foundation for success in sport and beyond.',
  ],
  principles: [
    {
      n: '1',
      t: 'Move First',
      s: 'Master Control Before Chaos',
      p: [
        'Before we add weight, speed or complexity, we build and establish control. Every athlete begins with a detailed movement assessment to identify strengths, imbalances and inefficiencies. From there, we coach foundational movement patterns; the ‘movement control’ phase, focusing on stability, coordination and body awareness.',
        'This phase is essential, especially in regards to reducing injury rish and improving neuromuscular control.',
      ],
      know: 'Athletes who master foundational movement patterns reduce injury risk by up to 50% and improve neuromuscular control and proprioception dramatically (Journal of Sports Science & Medicine, 2020).',
    },
    {
      n: '2',
      t: 'Build Strong',
      s: 'Progress With Purpose',
      p: [
        'With movement control established, we develop strength and power, but never at random. Our strength and power phases are ‘purpose-built’, aligned with sport-specific needs, and rooted in biomechanical efficiency. This is about ‘training smarter’, not just harder—maximising performance while protecting movement quality',
      ],
      know: 'Progressive overload built on stable movement patterns accelerates gains in strength and speed, while lowering injury rates by 30-40% (NSCA Performance Training Research, 2019).',
    },
    {
      n: '3',
      t: 'Play Long',
      s: 'Train for Longevity, Not Just the Win',
      p: [
        'We don’t chase short-term fitness spikes. We build repeatable performance through smart, progressive conditioning that matches the demands of your sport. By embedding movement intelligence from day one, athletes enjoy longer, healthier playing lives—and continue to perform when it matters most.',
      ],
      know: 'Athletes with high movement literacy adapt better to coaching, recover faster, and outperform peers in both high-pressure and high-volume scenarios.',
    },
  ],
  knowTitle: 'Did you know',
};

/* ---------------- /about-us/ ---------------- */

export const team = {
  title: 'MEET THE TEAM',
  lead: 'We’re not just training athletes. We’re developing the next generation of game-changing coaches.',
  text: 'Outliers is led by Chris Downham, a performance rugby coach with first-hand experience of the English pathway. At Outliers, we encourage creative thinking, evidence-based innovation, and a bold approach to developing movement and performance. Whether you’re a coach looking to refine your practice or just starting out, we give you the tools to lead with confidence, clarity, and impact.',
  people: [
    {
      name: 'CHRIS DOWNHAM',
      role: 'Founder & Performance Coach',
      img: 'chris',
      p: [
        'Chris Downham brings a wealth of experience to Outliers as its founder and director. His journey in elite sport began as a Junior International for England, followed by a decade immersed in academies and institutions including Newcastle Falcons and Sedbergh School, where he captained the 1st XV.',
        'He’s coached at national league, representative, university and collegiate level, working with individuals who now compete at premiership and international level. Chris’s passion lies in holistic development—helping athletes maximise their potential while safeguarding their physical and mental wellbeing.',
      ],
    },
    {
      name: 'LUCY DOWNHAM',
      role: 'Lead Physiotherapist', // wording from the old physio enquiry page
      img: 'lucy',
      p: [
        'Lucy is a registered HCPC and CSP physiotherapist with an MSc, and a BSc in Sports Science and Physiology. She specialises in musculoskeletal physiotherapy and movement-based rehabilitation.',
        'Combining clinical expertise with her background as an APPI Pilates instructor, Lucy helps athletes refine movement patterns, prevent injuries, and build the control and awareness needed for top performance. Her work is rooted in biomechanics and focused on long-term development.',
      ],
    },
    {
      name: 'EVIE TONKIN',
      role: '',
      img: 'evie',
      p: [
        'Evie is a Scotland international and former premiership rugby player who began her journey with Outliers as an athlete in 2021. She has played for DMP Sharks and Sale Sharks, and has represented Scotland in both 15s and 7s.',
        'With a first-class honours degree in Sports & Exercise Science and a PGCE in PE, Evie blends academic expertise with practical insight. She holds a Level 2 rugby coaching qualification and has coached across national development pathways. Her focus is helping young athletes grow—on and off the field.',
      ],
    },
    {
      name: 'SHERYL COULTAS',
      role: '',
      img: 'sheryl',
      p: [
        'Sheryl is a Level 3 qualified personal trainer with over a decade of experience, and additional qualifications in Olympic Weightlifting, BirthFit, Brand-X Kids Strength Training and Metafit.',
        'Combining practical coaching experience with a focus on women’s health, menopause and lifelong wellbeing, Sheryl helps people of all ages and abilities improve strength, mobility and confidence. Her work is rooted in the belief that it’s never too late to become stronger and discover what you’re capable of.',
      ],
    },
  ],
  methodCta: 'LEARN ABOUT OUR MOVEMENT METHODOLOGY',
};

/* ---------------- /contact-us/ ---------------- */

export const contact = {
  lead: 'Contact Chris Downham to discuss your goals and we’ll help you find the right Outliers service for you. You can either fill the form out below, or call 07772955986.',
  formTitle: 'Send Us a Message',
  // "What is your query regarding" options from the old form, plus physio and classes,
  // which had their own forms on the old site.
  options: [
    { slug: 'general', label: 'General Enquiries' },
    { slug: 'performance-programme', label: 'Performance Programme' },
    { slug: 'resilience-programme', label: 'Resilience Programme' },
    { slug: 'bespoke-coaching', label: 'Bespoke Coaching' },
    { slug: 'physiotherapy', label: 'Physiotherapy' },
    { slug: 'classes', label: 'Classes' },
    { slug: 'northern-outliers', label: 'Northern Outliers Rugby' },
    { slug: 'schools-and-clubs', label: 'Schools and Clubs' },
    { slug: 'other', label: 'Other' },
  ],
  consent: 'Yes, I agree with the privacy policy and terms and conditions.',
  send: 'Send Message',
};

export const nav = [
  { label: 'Team Outliers', href: '/team-outliers' },
  { label: 'Northern Outliers', href: '/northern-outliers' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'The Method', href: '/method' },
  { label: 'Team', href: '/team' },
  { label: 'Shop', href: '/shop' },
];
