import React, { useEffect } from "react";

import { Box } from "@mui/material";
import { Item } from "../../models/item";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import ProductCard from "./components/ProductCard";
import { sitesApi } from "../../services/sites";
import useQueryParams from "../../hooks/useQueryParams";

// import useStyles from "./styles";

const ResultadosBusqueda = () => {
  // const classes = useStyles();

  const queryParams = useQueryParams();
  const search = queryParams.get("search") ?? undefined;

  const [fetchSearch, { data: searchResponse, isError, isLoading }] =
    sitesApi.endpoints.fetchSearch.useLazyQuery();

  useEffect(() => {
    if (search) {
      fetchSearch({ query: search });
    }
  }, [fetchSearch, search]);

  return (
    <Layout id="resultados-busqueda">
      {isLoading && <Loader />}
      {isError && "Something went wrong"}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          px: "160px",
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
