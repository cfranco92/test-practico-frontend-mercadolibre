import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  categoriesBox: {
    height: "3rem",
    display: "flex",
    alignItems: "center",
  },
  resultsBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "3rem",
  },
}));

export default useStyles;
