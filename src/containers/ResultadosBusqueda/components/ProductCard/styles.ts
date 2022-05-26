import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  rootBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "10px 0 10px 0",
  },
  productNameImageBox: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  conditionBox: {
    paddingRight: "100px",
  },
}));

export default useStyles;
