import breakpoints from './breakpoints';
import colors from './colors';
import fonts from './fonts';
import grids from './grids';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';

const main = { name: 'main' }; // theme name

/**
 * THEME MAIN OBJECT
 */
const theme = {
  ...main,
  ...breakpoints,
  ...colors,
  ...fonts,
  ...grids,
  ...shadows,
  ...sizes,
  ...space,
};

/**
 * EXPORT SEPARATLY
 */
export { breakpoints, colors, fonts, grids, shadows, sizes, space };

/**
 * BUILD THEME OBJECT AND EXPOSE
 */
export default theme;
