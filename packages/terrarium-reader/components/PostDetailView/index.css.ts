import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const title = style({
  fontSize: "2rem",
  marginTop: "6rem",
  marginBottom: "1.6rem",
});

export const date = style({
  color: "var(--gray)",
  fontSize: "1.2rem",
  fontWeight: "normal",
  marginTop: 0,
  marginBottom: "2rem",
});

export const container = style({
  maxWidth: vars.width.maxWidth,
  margin: "0 auto",
  padding: "0 1.5rem",
});

export const tagsContainer = style({
  display: "flex",
});

export const content = style({
  marginTop: "6rem",
});

export const headImageContainer = style({
  width: "100%",
  height: "240px",
  position: "relative",
  overflow: "hidden",
  "@media": {
    "screen and (min-width: 768px)": {
      height: "360px",
    },
  },
});

export const headImage = style({
  objectFit: "cover",
});
