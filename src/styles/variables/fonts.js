/**
 * FONT SIZES
 */
const fonts = ["'Inconsolata', Helvetica, Arial,  sans-serif"];

fonts.body = fonts[0];
fonts.display = fonts[0];

/**
 * FONT SIZES
 */
const fontSizes = [8, 12, 14, 16, 18, 24, 36];

// aliases
fontSizes.body = fontSizes[2];
fontSizes.display = fontSizes[4];

fontSizes.h1 = fontSizes[6];
fontSizes.h2 = fontSizes[5];
fontSizes.h3 = fontSizes[4];
fontSizes.h4 = fontSizes[4];
fontSizes.h5 = fontSizes[3];
fontSizes.h6 = fontSizes[3];

/**
 * LINE HEIGHTS
 */
const lineHeights = [1.22, 1.35, 1.5];

// aliases
lineHeights.body = lineHeights[2];
lineHeights.display = lineHeights[0];

const objFonts = {
  fonts,
  fontSizes,
  lineHeights,
};
export default objFonts;
