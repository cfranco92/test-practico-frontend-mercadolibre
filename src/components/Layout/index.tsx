import React, { ReactNode } from "react";

import useStyles from "./styles";

interface LayoutProps {
  children?: ReactNode;
  id: string;
}

const Layout = ({ children, id }: LayoutProps) => {
  const classes = useStyles();
  return (
    <section id={id} className={classes.root}>
      {children}
    </section>
  );
};

const defaultProps = {
  children: "",
};

Layout.defaultProps = defaultProps;

export default Layout;
