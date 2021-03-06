/* eslint-disable sort-keys */

import Adapter from '../packages/aesthetic/src/Adapter';

export const FONT_ROBOTO = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  local: 'Robo',
  srcPaths: ['fonts/Roboto.woff2', 'fonts/Roboto.ttf'],
};

export const FONT_ROBOTO_FLAT_SRC = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: "local('Robo'), url('fonts/Roboto.woff2') format('woff2'), url('fonts/Roboto.ttf') format('truetype')",
};

export const FONT_CIRCULAR_MULTIPLE = [
  {
    fontFamily: 'Circular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    srcPaths: ['fonts/Circular.woff2'],
  },
  {
    fontFamily: 'Circular',
    fontStyle: 'italic',
    fontWeight: 'normal',
    srcPaths: ['fonts/Circular-Italic.woff2'],
  },
  {
    fontFamily: 'Circular',
    fontStyle: 'normal',
    fontWeight: 300,
    srcPaths: ['fonts/Circular-Light.woff2'],
  },
  {
    fontFamily: 'Circular',
    fontStyle: 'normal',
    fontWeight: 700,
    srcPaths: ['fonts/Circular-Bold.woff2'],
  },
];

export const FONT_CIRCULAR_MULTIPLE_FLAT_SRC = [
  {
    fontFamily: 'Circular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: "url('fonts/Circular.woff2') format('woff2')",
  },
  {
    fontFamily: 'Circular',
    fontStyle: 'italic',
    fontWeight: 'normal',
    src: "url('fonts/Circular-Italic.woff2') format('woff2')",
  },
  {
    fontFamily: 'Circular',
    fontStyle: 'normal',
    fontWeight: 300,
    src: "url('fonts/Circular-Light.woff2') format('woff2')",
  },
  {
    fontFamily: 'Circular',
    fontStyle: 'normal',
    fontWeight: 700,
    src: "url('fonts/Circular-Bold.woff2') format('woff2')",
  },
];

export const KEYFRAME_FADE = {
  from: { opacity: 0 },
  to: { opacity: 1 },
};

export const TEST_CLASS_NAMES = {
  header: '.header',
  footer: '.footer',
};

export const SYNTAX_NATIVE_PARTIAL = {
  button: {
    margin: 0,
    padding: '6px 12px',
    border: '1px solid #2e6da4',
    borderRadius: 4,
    display: 'inline-block',
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    textAlign: 'center',
    backgroundColor: '#337ab7',
    verticalAlign: 'middle',
    color: 'rgba(0, 0, 0, 0)',
    animationName: 'fade',
    animationDuration: '.3s',
    ':hover': {
      backgroundColor: '#286090',
      borderColor: '#204d74',
    },
    '::before': {
      content: '"★"',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: 5,
    },
  },
};

export const SYNTAX_UNIFIED_FULL = {
  '@font-face': {
    Roboto: FONT_ROBOTO,
  },
  '@keyframes': {
    fade: KEYFRAME_FADE,
  },
  button: {
    ...SYNTAX_NATIVE_PARTIAL.button,
    '@media': {
      '(max-width: 600px)': {
        padding: '4px 8px',
      },
    },
  },
};

export const SYNTAX_ATTRIBUTE = {
  attr: {
    display: 'block',
    '[disabled]': {
      opacity: 0.5,
    },
  },
};

export const SYNTAX_CHARSET = {
  '@charset': 'utf8',
};

export const SYNTAX_DESCENDANT = {
  list: {
    margin: 0,
    padding: 0,
    '> li': {
      listStyle: 'bullet',
    },
  },
};

export const SYNTAX_IMPORT = {
  '@import': './some/path.css',
};

export const SYNTAX_IMPORT_MULTIPLE = {
  '@import': ['./some/path.css', './another/path.css'],
};

export const SYNTAX_FALLBACKS = {
  fallback: {
    background: 'linear-gradient(...)',
    display: 'flex',
    '@fallbacks': {
      background: 'red',
      display: ['box', 'flex-box'],
    },
  },
};

export const SYNTAX_FONT_FACE = {
  '@font-face': {
    Roboto: FONT_ROBOTO,
  },
  font: {
    fontFamily: 'Roboto',
    fontSize: 20,
  },
};

export const SYNTAX_FONT_FACE_MULTIPLE = {
  '@font-face': {
    Circular: FONT_CIRCULAR_MULTIPLE,
  },
  font: {
    fontFamily: 'Circular',
    fontSize: 20,
  },
};

export const SYNTAX_FONT_FACE_MIXED = {
  '@font-face': {
    Roboto: FONT_ROBOTO,
    Circular: FONT_CIRCULAR_MULTIPLE,
  },
};

export const SYNTAX_GLOBAL = {
  '@global': {
    body: { margin: 0 },
    html: { height: '100%' },
    a: {
      color: 'red',
      ':hover': {
        color: 'darkred',
      },
    },
  },
};

export const SYNTAX_KEYFRAMES = {
  '@keyframes': {
    fade: KEYFRAME_FADE,
  },
  animation: {
    animationName: 'fade',
    animationDuration: '3s, 1200ms',
    animationIterationCount: 'infinite',
  },
};

export const SYNTAX_MEDIA_QUERY = {
  media: {
    color: 'red',
    '@media': {
      '(min-width: 300px)': {
        color: 'blue',
      },
      '(max-width: 1000px)': {
        color: 'green',
      },
    },
  },
};

export const SYNTAX_MULTI_SELECTOR = {
  multi: {
    cursor: 'pointer',
    ':disabled, [disabled], > span': {
      cursor: 'default',
    },
  },
};

export const SYNTAX_NAMESPACE = {
  '@namespace': 'url(http://www.w3.org/1999/xhtml)',
};

export const SYNTAX_PAGE = {
  '@page': {
    margin: '1cm',
  },
};

export const SYNTAX_PROPERTIES = {
  props: {
    color: 'black',
    display: 'inline',
    margin: 10,
  },
};

export const SYNTAX_PSEUDO = {
  pseudo: {
    position: 'fixed',
    ':hover': {
      position: 'static',
    },
    '::before': {
      position: 'absolute',
    },
  },
};

export const SYNTAX_SUPPORTS = {
  sup: {
    display: 'block',
    '@supports': {
      '(display: flex)': {
        display: 'flex',
      },
      'not (display: flex)': {
        float: 'left',
      },
    },
  },
};

export const SYNTAX_VIEWPORT = {
  '@viewport': {
    width: 'device-width',
    orientation: 'landscape',
  },
};

export class TestAdapter extends Adapter {
  count = 0;

  transform(...styles) {
    const classes = [
      'foo',
      'bar',
      'baz',
      'qux',
    ];

    // eslint-disable-next-line no-return-assign
    return styles.map((row, i) => `${classes[i]}_${this.count += 1}`).join('-');
  }
}
