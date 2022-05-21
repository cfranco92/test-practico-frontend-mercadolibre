import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import { itemsApi } from "../../services/items";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { productId } = useParams<{ productId: string }>();

  const [
    fetchProductAndDescription,
    { data: productAndDescriptionResponse, isError, isLoading },
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

  return <Layout id="detalle-producto"></Layout>;
};

export default DetalleProducto;
