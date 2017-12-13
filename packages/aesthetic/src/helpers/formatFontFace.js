/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import toArray from './toArray';

import type { StyleBlock } from '../../../types';

const FORMATS: { [ext: string]: string } = {
  '.eot': 'embedded-opentype',
  '.otf': 'opentype',
  '.svg': 'svg',
  '.svgz': 'svg',
  '.ttf': 'truetype',
  '.woff': 'woff',
  '.woff2': 'woff2',
};

export default function formatFontFace(properties: StyleBlock): StyleBlock {
  const fontFace = { ...properties };
  const src = [];

  if (fontFace.local) {
    toArray(fontFace.local).forEach((alias) => {
      src.push(`local('${String(alias)}')`);
    });

    delete fontFace.local;
  }

  if (Array.isArray(fontFace.srcPaths)) {
    fontFace.srcPaths.forEach((srcPath) => {
      const ext = srcPath.slice(srcPath.lastIndexOf('.'));

      if (FORMATS[ext]) {
        src.push(`url('${srcPath}') format('${FORMATS[ext]}')`);

      } else if (__DEV__) {
        throw new Error(`Unsupported font format "${ext}".`);
      }
    });

  } else {
    return fontFace;
  }

  fontFace.src = src.join(', ');

  return fontFace;
}
