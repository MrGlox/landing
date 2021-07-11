/**
 * ICON SIZES
 */
const sizes = ['14px', '16px', '24px', '32px', '56px', '72px', '80px', '120px'];

// aliases based on icon folders
sizes.common = sizes[0];
sizes.socials = sizes[2];
sizes.small = sizes[2];
sizes.regular = sizes[3];
sizes.medium = sizes[4];
sizes.large = sizes[5];

/**
 * RADIUS SIZES
 */
const radius = ['3px', '8px'];

// radius aliases
radius.regular = radius[0];
radius.large = radius[1];

const objSizes = {
  radius,
  sizes,
};
export default objSizes;
