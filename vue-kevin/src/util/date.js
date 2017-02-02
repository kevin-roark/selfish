
export function yearFromDate(date) {
  const c = date.split(' ');
  const l = c[c.length - 1].trim();
  return l;
}

export default { yearFromDate };
