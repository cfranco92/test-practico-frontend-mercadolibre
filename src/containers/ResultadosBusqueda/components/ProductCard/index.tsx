import { Box, Divider, Typography } from "@mui/material";

import { Item } from "../../../../models/item";
import { Link } from "react-router-dom";
import React from "react";

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
          <img src={product.picture} alt="" width={120} height={120} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" color="initial">
                ${product.price.amount}
              </Typography>
            </Box>
            <Typography variant="body1" color="initial" sx={{ mt: "12px" }}>
              {product.title}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pr: "100px" }}>
          <Typography variant="body1" color="initial">
            {product.condition.toUpperCase()}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Link>
  );
};
export default ProductCard;
