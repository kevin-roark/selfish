
const years = ['2017', '2016', '2015', '2014'];

export function yearFromDate(date = '', ongoing = false) {
  const d = date.toLowerCase();

  if (ongoing) {
    if (d.indexOf('ongoing') >= 0 || d.indexOf('present') >= 0) {
      return years[0];
    }
  }

  for (let i = 0; i < years.length; i += 1) {
    const y = years[i];
    if (d.indexOf(y) >= 0) {
      return y;
    }
  }

  return null;
}

export default { yearFromDate };
