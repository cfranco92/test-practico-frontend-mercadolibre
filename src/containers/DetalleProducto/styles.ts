import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  categoriesBox: {
    height: "3rem",
    display: "flex",
    alignItems: "center",
  },
  imageTitleBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "2rem 2rem 0rem 2rem",
  },
  productNameAmountBox: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "15rem",
  },
  productDescriptionBox: {
    backgroundColor: "white",
    padding: "3rem 20rem 2rem 2rem",
    marginBottom: "3rem",
  },
}));

export default useStyles;
