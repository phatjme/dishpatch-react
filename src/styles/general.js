export default theme => ({
  html: {
    fontSize: theme.font.baseline
  },
  body: {
    margin: 0,
    padding: 0,
    color: theme.colors.black,
    fontFamily: theme.font.family.body,
    fontSize: theme.font.scale.default,
    fontSmoothing: "antialiased"
  },
  img: {
    maxWidth: "100%",
    height: "auto"
  },
  a: {
    color: "inherit",
    textDecoration: "none"
  },
  ul: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  button: {
    border: "none",
    padding: 0,
    background: "inherit",
    fontFamily: theme.font.family.body
  },
  input: {
    lineHeight: "normal"
  },
  "@page": {
    size: "auto",
    margin: "5%"
  }
});
