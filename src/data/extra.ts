// Lists derived from the verbatim copy in site.ts (no new copy here).
import { services, strands, online, physio, classesPage, northern, consulting } from './site';

export const offer = [
  { strand: strands[0].name, name: 'Performance Programme', href: '/team-outliers/online-programmes#performance', img: 'shot-put', text: services.programmes[0].text, meta: online.performance.fee },
  { strand: strands[0].name, name: 'Bespoke Coaching', href: '/team-outliers/online-programmes#bespoke', img: 'mtb', text: services.programmes[1].text, meta: online.bespoke.sub },
  { strand: strands[0].name, name: 'Resilience Programme', href: '/team-outliers/online-programmes#resilience', img: 'hike', text: online.resilience.text[0], meta: online.resilience.fee },
  { strand: strands[0].name, name: 'Physiotherapy', href: '/team-outliers/physiotherapy', img: 'physio-ball', text: physio.consult.sub, meta: physio.consult.price },
  { strand: strands[0].name, name: 'Classes', href: '/team-outliers/classes', img: 'class-women', text: services.classesLead, meta: classesPage.intro.price },
  { strand: strands[1].name, name: 'Rugby Pathway', href: '/northern-outliers', img: 'rugby-huddle', text: northern.pathway[0], meta: 'U13-18 Girls · U13-17 Boys' },
  { strand: strands[2].name, name: 'Schools & Clubs', href: '/consulting', img: 'workshop', text: consulting.text[0], meta: consulting.workTitle },
];

// Northern Outliers 2026-2027 block dates (from northern.dates), as ISO dates.
const monthIdx: Record<string, number> = { Sep: 8, Oct: 9, Nov: 10, Dec: 11, Jan: 0, Feb: 1, Mar: 2, Apr: 3 };
export const northernSessions = northern.dates.flatMap(({ m, d }) => {
  const days = [...d.matchAll(/(\d+)(st|nd|rd|th)/g)].map((x) => Number(x[1]));
  const year = monthIdx[m] >= 8 ? 2026 : 2027;
  return days.map((day) => `${year}-${String(monthIdx[m] + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
});
