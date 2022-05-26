import React from "react";
import { Link } from "react-router-dom";

import { Box, Divider, Typography } from "@mui/material";

import { Item } from "../../../../models/item";
import { formatPrice } from "../../../../utils/formatPrice";

interface ProductCardProps {
  product: Item;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/items/${product.id}`}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          py: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <img src={product.picture} alt="" width={140} height={140} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ ml: "15px", fontSize: "1.3rem" }}
              >
                {formatPrice(product.price.amount)}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ mt: "5px", ml: "15px" }}
            >
              {product.title}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pr: "100px" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "0.8rem" }}
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
