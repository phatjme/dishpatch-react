/** @jsx jsx */
import { jsx } from "@emotion/core";

import Supplier from "./Supplier";

const css = {
  container: theme => ({
    padding: theme.baseline * 2,
    "> *": {
      marginBottom: theme.baseline,
      "&:last-of-type": {
        marginBottom: 0
      }
    }
  })
};

const SupplierList = ({ suppliers }) => (
  <main css={css.container}>
    {suppliers &&
      suppliers.map(supplier => (
        <Supplier key={supplier.id} supplier={supplier} />
      ))}
  </main>
);

export default SupplierList;
