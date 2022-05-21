import { Box, CircularProgress } from "@mui/material";

import React from "react";
import useStyles from "./styles";

const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress color="inherit" />
    </Box>
  );
};
export default Loader;
