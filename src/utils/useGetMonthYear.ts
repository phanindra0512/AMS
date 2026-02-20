export const getMonthYear = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // number (1–12)
  const monthName = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return { day, month, monthName, year };
};
