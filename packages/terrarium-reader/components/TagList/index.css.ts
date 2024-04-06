import { style } from "@vanilla-extract/css";

export const tagsContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const tag = style({
  padding: "0.4rem 1.2rem",
  borderRadius: "100px",
  backgroundColor: "var(--thinner-gray)",
  textDecoration: "none",
  color: "var(--black)",
  marginLeft: "1rem",
  ":first-child": {
    marginLeft: 0,
  },
  transition: "box-shadow .2s ease-in-out",
  ":hover": {
    boxShadow: "0 2px 4px #00000040",
  },
});
