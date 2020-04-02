/** @jsx jsx */
import { jsx } from "@emotion/core";

const css = {
  container: theme => ({
    padding: `${theme.baseline}px ${theme.baseline * 1.5}px`,
    borderRadius: theme.borders.radius.medium,
    backgroundColor: theme.colors.primary,
    color: "white",
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.scale.medium
  })
};

const Button = ({ label, href }) => (
  <a css={css.container} href={href} target="_blank" rel="noopener noreferrer">
    {label}
  </a>
);

export default Button;
