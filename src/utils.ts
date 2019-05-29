import styleVars from "./styling/variables.scss";

export const checkIfMobile = () =>
  window.innerWidth <= +styleVars.mobileBreakpoint.slice(0, -2);