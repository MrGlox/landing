import breakpoints from './breakpoints';
import fontSizes from './fonts';
import space from './space';

const objGrids = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: space[5] / fontSizes.body, // rem
    outerMargin: space[6] / fontSizes.body, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 60, // rem
      lg: 60, // rem
    },
    breakpoints,
  },
};

export default objGrids;
