
const tagColors = {
  Money: '#00ff00',

  // names
  'Mister Shane': '#FF0090',
  'Carmichael Payamps': '#5544dd',
  'Dog Shadow': '#4990E2',
  'Pleasure Seeker': '#9a0000',

  // mediums
  Net: '#0000ff',
  Video: '#ff0000',
  Sound: '#ffe708',
  '3D': '#9900FF',
  Text: '#B17B1E',
  Software: '#9B9B9B',
  Object: '#82392b',
  Installation: '#15bec3',
  Sculpture: '#1f8850',
};

export default function tagStyle(tag, type = 'subtle') {
  const style = {};

  const color = tagColors[tag] || tagColors[tag.toLowerCase()];

  switch (type) {
    case 'solid':
      if (color) {
        style.color = color;
      }
      break;

    case 'subtle':
    default:
      if (color) {
        style.borderBottom = `2px solid ${color}`;
        style.textShadow = `1px 1px 4px ${color}, 2px 2px 4px ${color}`;
      } else {
        style.borderBottom = '1px solid #fff';
      }
      break;
  }

  return style;
}
