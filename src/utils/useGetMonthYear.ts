export const getMonthYear = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // number (1–12)
  const monthName = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return { day, month, monthName, year };
};

export const getMonthName = (month: number) => {
  const months = [
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
  return months[month - 1] || 'Unknown';
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const daySuffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  return `${day}${daySuffix} ${month}`;
};
