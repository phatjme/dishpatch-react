/** @jsx jsx */
import { jsx } from "@emotion/core";

import Button from "./Button";

const css = {
  container: theme => ({
    padding: `${theme.baseline}px ${theme.baseline * 1.5}px`,
    borderRadius: theme.borders.radius.medium,
    boxShadow: theme.shadows.medium,
    display: "flex",
    justifyContent: "space-between"
  }),
  name: theme => ({
    fontFamily: theme.font.family.bold,
    fontSize: theme.font.scale.medium
  })
};

const Supplier = ({ supplier: { Name, Website } }) => (
  <div css={css.container}>
    <span css={css.name}>{Name}</span>
    <Button label="Order now" href={Website} />
  </div>
);

export default Supplier;
