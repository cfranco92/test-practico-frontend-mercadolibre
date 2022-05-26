import React, { useEffect, useState } from 'react';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';

import Layout from 'components/Layout';
import Loader from 'components/Loader';
import { formatPrice } from 'utils/formatPrice';
import { itemsApi } from 'services/items';
import { sitesApi } from 'services/sites';
import { useParams } from 'react-router-dom';
import useStyles from './styles';

const DetalleProducto = () => {
  const classes = useStyles();
  const { productId } = useParams<{ productId: string }>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [categories, setCategories] = useState<string | undefined>(undefined);

  const [fetchProductAndDescription, { data: productAndDescriptionResponse, isError, isLoading }] =
    itemsApi.endpoints.fetchProductAndDescription.useLazyQuery();

  const [
    fetchSearch,
    {
      data: searchResponse,
      isError: isErrorFeatchSearch,
      isLoading: isLoadingFetchSearch,
      isSuccess: isFetchSearchSuccess,
    },
  ] = sitesApi.endpoints.fetchSearchByCategory.useLazyQuery();

  useEffect(() => {
    if (productId) {
      fetchProductAndDescription({ productId });
    }
  }, [fetchProductAndDescription, productId]);

  useEffect(() => {
    if (productAndDescriptionResponse) {
      fetchSearch({
        categoryId: productAndDescriptionResponse.categoryId,
      });
    }
  }, [fetchSearch, productAndDescriptionResponse]);

  useEffect(() => {
    if (searchResponse) setCategories(searchResponse.join(' | '));
  }, [searchResponse]);

  if (isError || isErrorFeatchSearch) {
    return <div>Something went wrong</div>;
  }

  if (isLoading || isLoadingFetchSearch) {
    return <Loader />;
  }

  return (
    <Layout id="detalle-producto">
      {isFetchSearchSuccess && productAndDescriptionResponse && (
        <Box
          sx={{
            px: matches ? '10rem' : '3.5rem',
          }}
          className={classes.rootBox}
        >
          <Box className={classes.categoriesBox}>
            <Typography variant="body1" color="initial">
              {categories ? categories : 'N/A'}
            </Typography>
          </Box>
          <Box className={classes.imageTitleBox}>
            <img src={productAndDescriptionResponse.item.picture} alt="Product" width={400} />
            <Box className={classes.productNameAmountBox}>
              <Typography variant="subtitle2" color="initial">
                {productAndDescriptionResponse.item.condition.toUpperCase()}
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                {productAndDescriptionResponse.item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ marginTop: '1rem', fontSize: '2rem' }}
              >
                {formatPrice(productAndDescriptionResponse.item.price.amount)}
              </Typography>
              <Button
                variant="contained"
                color="info"
                sx={{ marginTop: '2rem', height: '3rem', minWidth: '200px' }}
              >
                Comprar
              </Button>
            </Box>
          </Box>
          <Box className={classes.productDescriptionBox}>
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ fontSize: '2rem', marginBottom: '1rem' }}
            >
              Descripción del producto
            </Typography>
            <Typography variant="body1" color="GrayText">
              {productAndDescriptionResponse.item.description}
            </Typography>
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export default DetalleProducto;
