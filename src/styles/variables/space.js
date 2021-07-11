const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 160];

space.none = space[0]; // 0
space.xxxs = space[1] + 'px'; // 4
space.xxs = space[2] + 'px'; // 8
space.xs = space[3] + 'px'; // 12
space.s = space[4] + 'px'; // 16
space.r = space[5] + 'px'; // 24
space.m = space[6] + 'px'; // 32
space.l = space[7] + 'px'; // 48
space.xl = space[8] + 'px'; // 64
space.xxl = space[9] + 'px'; // 80
space.xxxl = space[10] + 'px'; // 160

const objSpaces = {
  space,
};
export default objSpaces;
