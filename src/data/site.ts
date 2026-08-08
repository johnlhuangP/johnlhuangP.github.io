// Central place for site-wide copy. Content is intentionally empty for now;
// it will be filled from the 8_2026_master.pdf resume (Google, AWS, Brown ML
// research, AbbVie, TA, Dino.DB) once the copy is written.
export const site = {
  name: 'John Huang',
  location: 'Providence, RI',
  email: 'john_huang@brown.edu',
  github: 'https://github.com/johnlhuangP',
  linkedin: 'https://www.linkedin.com/in/john-huang',
  meta: {
    description:
      "John Huang's personal site — applied mathematics and computer science at Brown, machine learning research, and building things.",
  },
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  hero: {
    eyebrow: 'John Huang · Providence, RI',
    oneLiner: 'Just figuring things out',
  },
  about: {
    heading: 'A little about me',
    // Placeholder paragraphs — replace with real copy from the resume.
    paragraphs: [
      {
        text: 'Your about paragraph goes here — a sentence or two about who you are, what you work on, and what you care about.',
        placeholder: true,
      },
    ],
    // Interest chips, e.g. ['Machine learning', 'Systems', 'Basketball', 'Music'].
    chips: [],
  },
  contact: {
    heading: 'Say hi.',
    blurb: "Whether it's research, engineering, or a good music recommendation — my inbox is open.",
  },
};
