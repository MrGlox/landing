/**
 * Define breakpoints global variables
 */
const breakpoints = ['23.75em', '38em', '48em', '64em', '80em'];

// aliases
breakpoints.xsm = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const breakpoint = [];

breakpoint.xsm = `@media (min-width: ${breakpoints[0]})`;
breakpoint.sm = `@media (min-width: ${breakpoints[1]})`;
breakpoint.md = `@media (min-width: ${breakpoints[2]})`;
breakpoint.lg = `@media (min-width: ${breakpoints[3]})`;
breakpoint.xl = `@media (min-width: ${breakpoints[4]})`;

const objBreakpoints = { breakpoint, breakpoints };
export default objBreakpoints;
