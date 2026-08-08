const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const LONG_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function partsOf(isoDate: string): { year: string; month: number; day: string } {
  const [year, month, day] = isoDate.split('-');
  return { year, month: Number(month), day: day ?? '1' };
}

/** Formats an ISO date (YYYY-MM-DD) as "Aug 2026". */
export function formatMonthYear(isoDate: string): string {
  const { year, month } = partsOf(isoDate);
  return `${SHORT_MONTHS[month - 1]} ${year}`;
}

/** Formats an ISO date (YYYY-MM-DD) as "August 7, 2026". */
export function formatDate(isoDate: string): string {
  const { year, month, day } = partsOf(isoDate);
  return `${LONG_MONTHS[month - 1]} ${Number(day)}, ${year}`;
}

/** Formats a `Date` (as stored on blog posts) as a readable date. */
export function formatDateFromDate(date: Date): string {
  return formatDate(date.toISOString().slice(0, 10));
}

/**
 * Formats a date range for the experience list.
 * An omitted or null end date renders as "Present".
 */
export function formatRange(start: string, end?: string | null): string {
  const endLabel = end ? formatMonthYear(end) : 'Present';
  return `${formatMonthYear(start)} — ${endLabel}`;
}

/** Sorts entries that carry a `pubDate` in their data, newest first. */
export function sortPostsByDate<T extends { data: { pubDate: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
