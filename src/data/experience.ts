// Experience, grouped by company (structure and dates from 8_2026_master.pdf).
// `summary` holds short lines until the full copy is written.
export type BrandName = 'google' | 'aws' | 'brown' | 'abbvie';

export interface CompanyRole {
  role: string;
  start: string; // YYYY-MM-DD
  end?: string | null; // null/undefined = still active
  summary?: string;
}

export interface Company {
  id: string;
  name: string;
  icon: BrandName;
  roles: CompanyRole[];
}

export const companies: Company[] = [
  {
    id: 'google',
    name: 'Google · Vertex AI',
    icon: 'google',
    roles: [
      {
        role: 'Software Engineer Intern',
        start: '2026-05-01',
        end: '2026-08-01',
        summary: 'Gemini Serving Infrastructure, Capacity Management',
      },
    ],
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    icon: 'aws',
    roles: [
      {
        role: 'Software Development Engineer Intern',
        start: '2025-05-01',
        end: '2025-08-01',
        summary: 'AWS Marketplace',
      },
    ],
  },
  {
    id: 'brown',
    name: 'Brown University',
    icon: 'brown',
    roles: [
      {
        role: 'Machine Learning Research Assistant',
        start: '2024-05-01',
        end: '2025-05-01',
        summary: '',
      },
      {
        role: 'Undergraduate Teaching Assistant',
        start: '2025-01-01',
        end: null,
        summary: '',
      },
    ],
  },
  {
    id: 'abbvie',
    name: 'AbbVie',
    icon: 'abbvie',
    roles: [
      {
        role: 'Data Science Intern',
        start: '2024-05-01',
        end: '2024-08-01',
        summary: '',
      },
    ],
  },
];
