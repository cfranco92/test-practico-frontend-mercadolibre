import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { LOGO_MERCADO_LIBRE } from "../../constants";
import Search from "./StyledComponents/Search";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconWrapper from "./StyledComponents/SearchIconWrapper";
import StyledInputBase from "./StyledComponents/StyledInputBase";
import Toolbar from "@mui/material/Toolbar";

function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    navigate(`/items?search=${query}`);
  };

  return (
    <Box>
      <AppBar sx={{ px: matches ? "8.5rem" : "2rem", m: 0 }}>
        <Toolbar sx={{}}>
          <Link to="/">
            <img src={LOGO_MERCADO_LIBRE} alt="Mercadolibre" />
          </Link>
          <Search>
            <StyledInputBase
              placeholder="Nunca dejes de buscar"
              inputProps={{ "aria-label": "search", value: query }}
              onChange={handleOnChange}
            />
            <SearchIconWrapper>
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </SearchIconWrapper>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
