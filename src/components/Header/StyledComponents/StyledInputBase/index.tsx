import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `1rem`,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: theme.palette.common.white,
    marginLeft: theme.spacing(2),
  },
}));

export default StyledInputBase;
