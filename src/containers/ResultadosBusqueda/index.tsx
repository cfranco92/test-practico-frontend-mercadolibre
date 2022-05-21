import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Item } from "../../models/item";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import ProductCard from "./components/ProductCard";
import { sitesApi } from "../../services/sites";
import useQueryParams from "../../hooks/useQueryParams";

// import useStyles from "./styles";

const ResultadosBusqueda = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const queryParams = useQueryParams();
  const search = queryParams.get("search") ?? undefined;
  const [categories, setCategories] = useState<string | undefined>(undefined);

  const [fetchSearch, { data: searchResponse, isError, isLoading }] =
    sitesApi.endpoints.fetchSearch.useLazyQuery();

  useEffect(() => {
    if (search) {
      fetchSearch({ query: search });
    }
  }, [fetchSearch, search]);

  useEffect(() => {
    if (searchResponse) {
      setCategories(searchResponse?.categories?.join(" | "));
    }
  }, [searchResponse]);

  console.log(searchResponse);

  return (
    <Layout id="resultados-busqueda">
      {isLoading && <Loader />}
      {isError && "Something went wrong"}
      <Box
        sx={{
          px: matches ? "10rem" : "3.5rem",
          height: "3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="initial">
          {categories}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          px: matches ? "10rem" : "3.5rem",
          mb: "3rem",
        }}
      >
        {searchResponse &&
          Object(searchResponse).items.map((item: Item) => (
            <ProductCard product={item} key={item.id} />
          ))}
      </Box>
    </Layout>
  );
};

export default ResultadosBusqueda;
