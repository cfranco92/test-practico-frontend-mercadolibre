import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Search from "./StyledComponents/Search";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconWrapper from "./StyledComponents/SearchIconWrapper";
import StyledInputBase from "./StyledComponents/StyledInputBase";
import Toolbar from "@mui/material/Toolbar";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0",
          }}
        >
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small.png"
            alt="Mercadolibre"
          />
          <Search>
            <StyledInputBase
              placeholder="Nunca dejes de buscar"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
