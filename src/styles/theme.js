const colors = {
  primary: "#EF5252",
  white: "#FFFFFF",
  black: "#251E20"
};

const baseline = 10;

const borders = {
  radius: {
    low: "5px",
    medium: "10px",
    high: "20px"
  }
};

const shadows = {
  short: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
  medium: "0 2px 8px 0 rgba(158, 170, 176, 0.4)",
  long: "0 4px 20px 0 rgba(158, 170, 176, 0.5)"
};

const grid = {
  breakpoints: {
    s: 480,
    m: 640,
    l: 960
  },
  columns: {
    s: 6,
    m: 12,
    l: 12
  },
  gutter: {
    s: 15,
    m: 40,
    l: 40
  },
  maxWidth: {
    s: 500,
    m: 860,
    l: 1280
  }
};

const font = {
  family: {
    heading: "FredokaOne-Regular, Verdana, Geneva, sans-serif",
    body: '"Nunito", Arial, Helvetica, sans-serif',
    bold: '"Nunito-Black", Arial, Helvetica, sans-serif'
  },
  baseline: "100%",
  scale: {
    // 12pt
    small: "0.75rem",
    // 14pt
    default: "0.875rem",
    // 16pt
    medium: "1rem",
    // 18pt
    large: "1.125rem",
    // 22pt
    xlarge: "1.375rem",
    // 28pt
    xxlarge: "1.75rem",
    // 34pt
    xxxlarge: "2.125rem"
  }
};

const helpers = {
  mq: (min, max) =>
    max
      ? `@media (min-width: ${grid.breakpoints[min]}px) and (max-width: ${grid.breakpoints[max]}px)`
      : `@media (min-width: ${grid.breakpoints[min]}px)`
};

export default {
  baseline,
  colors,
  borders,
  shadows,
  grid,
  font,
  helpers
};
