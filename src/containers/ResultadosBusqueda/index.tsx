import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
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

  useEffect(() => {
    if (searchResponse) {
      console.log(searchResponse);
    }
  }, [searchResponse]);

  return (
    <Layout id="resultados-busqueda">
      {isLoading && <Loader />}
      {isError && "Something went wrong"}
    </Layout>
  );
};

export default ResultadosBusqueda;
