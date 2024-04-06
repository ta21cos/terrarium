import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  gridArea: "1 / 1 / 1 / 4",
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "center",
  padding: "0 1.5rem",
  borderBottom: `1px solid var(--thinner-gray)`,
  backgroundColor: "var(--white)",
  zIndex: 10,
});

export const content = style({
  width: "100%",
  maxWidth: vars.width.maxWidth,
  display: "flex",
  alignItems: "center",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: 200,
  color: "var(--black)",
  fontFamily: "var(--font-nunito), sans-serif",
  textDecoration: "none",
});

export const contactsContainer = style({
  marginLeft: "auto",
  display: "flex",
  gap: "1rem",
});

export const icon = style({
  fontSize: "1.5rem",
});

export const link = style({
  color: "var(--black)",
  transition: "color .2s ease-in-out",
  padding: "0.4rem",
  ":hover": {
    color: "var(--purple-color)",
  },
});
