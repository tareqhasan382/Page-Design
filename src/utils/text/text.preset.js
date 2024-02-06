// import { colors } from "../../theme/colors";

import { Typography } from "../Typhography";

const BASE = {
  fontFamily: Typography.primary,
  fontSize: 16,
  // color: colors.text,
};
const BASE_BOLD = {
  fontFamily: Typography.primaryBold,
  fontSize: 16,
  // color: colors.text,
};
const BOLD = {
  fontFamily: Typography.bold,
  // color: colors.text,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
