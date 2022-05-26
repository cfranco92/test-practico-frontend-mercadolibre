import React from "react";
import { Link } from "react-router-dom";

import { Box, Divider, Typography } from "@mui/material";

import { Item } from "../../../../models/item";
import { formatPrice } from "../../../../utils/formatPrice";
import useStyles from "./styles";

interface ProductCardProps {
  product: Item;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const classes = useStyles();

  return (
    <Link to={`/items/${product.id}`}>
      <Box className={classes.rootBox}>
        <Box className={classes.productNameImageBox}>
          <img src={product.picture} alt="Product" width={140} height={140} />
          <Box className={classes.flexColumn}>
            <Box className={classes.flexColumn}>
              <Typography
                variant="subtitle1"
                color="initial"
                className={classes.amountText}
              >
                {formatPrice(product.price.amount)}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              className={classes.title}
            >
              {product.title}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.conditionBox}>
          <Typography
            variant="body1"
            color="initial"
            className={classes.condition}
          >
            {product.condition}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Link>
  );
};
export default ProductCard;
