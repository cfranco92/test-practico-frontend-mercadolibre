import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
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
  amountText: {
    marginLeft: "15px",
    fontSize: "1.3rem",
  },
  title: {
    margin: "5px 0 0 15px",
  },
  conditionBox: {
    paddingRight: "100px",
  },
  condition: {
    fontSize: "0.8rem",
  },
}));

export default useStyles;
