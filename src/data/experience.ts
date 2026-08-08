// Experience entries (structure and dates from 8_2026_master.pdf).
// `summary` is left empty until the copy is written.
export interface Experience {
  role: string;
  org: string;
  start: string; // YYYY-MM-DD
  end?: string | null; // null/undefined = still active
  summary?: string;
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer Intern',
    org: 'Google · Vertex AI',
    start: '2026-05-01',
    end: '2026-08-01',
    summary: '',
  },
  {
    role: 'Software Development Engineer Intern',
    org: 'Amazon Web Services',
    start: '2025-05-01',
    end: '2025-08-01',
    summary: '',
  },
  {
    role: 'Machine Learning Research Assistant',
    org: 'Brown University',
    start: '2024-05-01',
    end: '2025-05-01',
    summary: '',
  },
  {
    role: 'Data Science Intern',
    org: 'AbbVie',
    start: '2024-05-01',
    end: '2024-08-01',
    summary: '',
  },
  {
    role: 'Undergraduate Teaching Assistant',
    org: 'Brown University CS Department',
    start: '2025-01-01',
    end: null,
    summary: '',
  },
];
