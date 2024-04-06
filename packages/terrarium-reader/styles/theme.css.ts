import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  width: {
    maxWidth: "760px",
  },
});
