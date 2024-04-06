import { style } from "@vanilla-extract/css";

export const container = style({
  gridArea: "3 / 1 / 3 / 4",
  display: "grid",
  placeItems: "center",
  borderTop: `1px solid var(--thinner-gray)`,
});

export const content = style({
  color: "var(--gray)",
});
