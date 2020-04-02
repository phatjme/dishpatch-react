/** @jsx jsx */
import { jsx } from "@emotion/core";

const css = {
  container: theme => ({
    padding: theme.baseline * 2,
    backgroundImage: 'url("/header.png")',
    backgroundSize: "cover",
    borderBottomLeftRadius: theme.borders.radius.high,
    borderBottomRightRadius: theme.borders.radius.high
  }),
  nav: {
    display: "flex",
    justifyContent: "space-between",
    color: "white"
  },
  logoTitle: theme => ({
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.scale.xxxlarge,
    letterSpacing: 1.2,
    marginTop: 0,
    marginBottom: theme.baseline / 2
  }),
  logoSubtitle: theme => ({
    fontSize: theme.font.scale.small
  })
};

const Header = () => (
  <header css={css.container}>
    <nav css={css.nav}>
      <div css={css.logo}>
        <h1 css={css.logoTitle}>dishpatch</h1>
        <span css={css.logoSubtitle}>
          Great independents delivering groceries
        </span>
      </div>
    </nav>
  </header>
);

export default Header;
