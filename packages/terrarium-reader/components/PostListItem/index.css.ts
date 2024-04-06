import { style } from "@vanilla-extract/css";

export const titleContainer = style({
  textDecoration: "none",
  color: "var(--black)",
  paddingBottom: "1.5rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "color .1s ease-in-out",
  ":hover": {
    color: "var(--purple-color)",
  },
});

export const imageContainer = style({
  width: "180px",
  height: "180px",
  borderRadius: "100%",
  position: "relative",
  overflow: "hidden",
  margin: "1rem 0",
});

export const image = style({
  objectFit: "cover",
});

export const title = style({
  fontSize: "1.8rem",
  fontWeight: 600,
  textAlign: "center",
});

export const date = style({
  fontSize: "1.2rem",
  color: "var(--gray)",
});

export const tagsContainer = style({
  margin: "1rem 0",
  display: "flex",
});

export const tag = style({
  padding: "2px 16px",
  borderRadius: "100px",
  backgroundColor: "var(--thinner-gray)",
  color: "var(--white)",
  marginLeft: "1rem",
  ":first-child": {
    marginLeft: 0,
  },
});

export const border = style({
  width: 80,
  border: 0,
  borderTop: `2px solid var(--thinner-gray)`,
  ":first-child": {
    display: "none",
  },
});
