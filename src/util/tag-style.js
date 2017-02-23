
export const tagColors = {
  Money: '#49b449',

  // names
  'Mister Shane': '#FF0090',
  'Carmichael Payamps': '#7544dd',
  'Dog Shadow': '#4990E2',
  'Pleasure Seeker': '#B82224',
  'TONY TONEHOLE': '#A1725E',
  "Miller's Fantasy": '#9900FF',

  // mediums
  Net: '#0000ff',
  Video: '#ff0000',
  Sound: '#ffe708',
  '3D': '#563bff',
  Game: '#d6a832',
  Text: '#B17B1E',
  Software: '#bbb',
  Object: '#18653b',
  Installation: '#2424ff',
  Sculpture: '#82392b',
  Photo: '#8cc1ff',
  Performance: '#e68a5b',
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

    case 'border':
      if (color) {
        style.borderColor = color;
      }
      break;

    case 'background':
      if (color) {
        style.backgroundColor = color;
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
