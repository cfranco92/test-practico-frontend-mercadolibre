import React, { useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { Item } from 'models/item';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import ProductCard from './components/ProductCard';
import { sitesApi } from 'services/sites';
import useQueryParams from 'hooks/useQueryParams';
import useStyles from './styles';

const ResultadosBusqueda = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const queryParams = useQueryParams();
  const search = queryParams.get('search') ?? undefined;
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
      setCategories(searchResponse?.categories?.join(' | '));
    }
  }, [searchResponse]);

  return (
    <Layout id="resultados-busqueda">
      {isLoading && <Loader />}
      {isError && 'Something went wrong'}
      {searchResponse && (
        <>
          <Box
            sx={{
              px: matches ? '10rem' : '3.5rem',
            }}
            className={classes.categoriesBox}
          >
            <Typography variant="body1" color="initial">
              {categories ? categories : 'N/A'}
            </Typography>
          </Box>
          <Box
            sx={{
              px: matches ? '10rem' : '3.5rem',
            }}
            className={classes.resultsBox}
          >
            {searchResponse &&
              Object(searchResponse).items.map((item: Item) => (
                <ProductCard product={item} key={item.id} />
              ))}
          </Box>
        </>
      )}
    </Layout>
  );
};

export default ResultadosBusqueda;
