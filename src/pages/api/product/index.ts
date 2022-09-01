import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../types/Product";
import MOCKED_PRODUCTS from '../../../utils/MOCKED_PRODUCTS.json';

const ProductApi = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    
    if (request.query.special === 'sale') {
      return await fetchProductsInSale(request, response);
    }
    if (request.query.special === 'highlight') {
      return await fetchProductsInSale(request, response);
    }
    if (request.query.special === 'wanted') {
      return await fetchProductsInSale(request, response);
    }
  }
}

const fetchProductsInSale = async (request: NextApiRequest, response: NextApiResponse) => {
  let products: Product[] = [];

  for (let i = 0; i < 5; i++) {
    products = [...products, ...MOCKED_PRODUCTS];
  }

  return response.status(201).json(products);
}

export default ProductApi;