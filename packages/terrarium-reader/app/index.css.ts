import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { vars } from "../styles/theme.css";

export const main = style({
  gridArea: "2 / 1 / 2 / 4",
  minHeight: calc.subtract(calc.subtract("100vh", "60px"), "80px"),
  paddingBottom: "8rem",
  selectors: {
    "&.--with-max-width": {
      gridArea: "2 / 2",
      maxWidth: `min(${vars.width.maxWidth}, 100vw)`,
      margin: "0 auto",
    },
  },
});

export const layoutContainer = style({
  display: "grid",
  gridTemplate: "80px 1fr 60px / auto 1fr auto",
});
