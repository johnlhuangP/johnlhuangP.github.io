import { describe, expect, it } from 'vitest';
import { formatDate, formatDateFromDate, formatRange, sortPostsByDate } from './dates';

describe('formatRange', () => {
  it('formats an open-ended range with Present', () => {
    expect(formatRange('2025-01-15')).toBe('Jan 2025 — Present');
  });

  it('formats a closed range', () => {
    expect(formatRange('2024-05-21', '2024-08-12')).toBe('May 2024 — Aug 2024');
  });
});

describe('formatDate', () => {
  it('formats an ISO date as a readable date', () => {
    expect(formatDate('2026-08-07')).toBe('August 7, 2026');
  });

  it('formats a Date as a readable date', () => {
    expect(formatDateFromDate(new Date('2026-08-07T00:00:00Z'))).toBe('August 7, 2026');
  });
});

describe('sortPostsByDate', () => {
  it('returns posts newest first', () => {
    const posts = [
      { id: 'old', data: { pubDate: new Date('2025-01-01') } },
      { id: 'new', data: { pubDate: new Date('2026-06-01') } },
      { id: 'mid', data: { pubDate: new Date('2025-08-01') } },
    ];

    expect(sortPostsByDate(posts).map((post) => post.id)).toEqual(['new', 'mid', 'old']);
  });
});
