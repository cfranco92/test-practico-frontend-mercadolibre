import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import { itemsApi } from "../../services/items";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { productId } = useParams<{ productId: string }>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [
    fetchProductAndDescription,
    { data: productAndDescriptionResponse, isError, isLoading, isSuccess },
  ] = itemsApi.endpoints.fetchProductAndDescription.useLazyQuery();

  useEffect(() => {
    if (productId) {
      fetchProductAndDescription({ productId });
    }
  }, [fetchProductAndDescription, productId]);

  useEffect(() => {
    if (productAndDescriptionResponse) {
      console.log(productAndDescriptionResponse);
    }
  }, [productAndDescriptionResponse]);

  return (
    <Layout id="detalle-producto">
      {isLoading && <Loader />}
      {isError && "Something went wrong"}
      {isSuccess && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            px: matches ? "10rem" : "3.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              mt: "3rem",
              pt: "2rem",
              px: "2rem",
            }}
          >
            <img
              src={productAndDescriptionResponse?.item?.picture}
              alt="Product"
              width={400}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "10rem",
              }}
            >
              <Typography variant="body2" color="initial">
                {productAndDescriptionResponse?.item?.condition.toUpperCase()}
              </Typography>
              <Typography variant="body2" color="initial">
                {productAndDescriptionResponse?.item?.title}
              </Typography>
              <Typography variant="body2" color="initial">
                ${productAndDescriptionResponse?.item?.price.amount}
              </Typography>
              <Button variant="contained" color="info" sx={{ mt: "2rem" }}>
                Comprar
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              p: "5rem 15rem 2rem 2rem",
              mb: "3rem",
            }}
          >
            <Typography variant="h4" color="initial">
              Descripción del producto
            </Typography>
            <Typography variant="body2" color="initial">
              {productAndDescriptionResponse?.item?.description}
            </Typography>
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export default DetalleProducto;
