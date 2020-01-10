import * as React from "react";
import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>useAuth</title>

      <link rel="icon" type="image/png" href="../src/images/Swizec2.png" />
    </Helmet>
    {children}
  </React.Fragment>
);
export default Wrapper;
