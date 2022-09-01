import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../types/Product";
import MOCKED_PRODUCTS from '../../../utils/MOCKED_PRODUCTS.json';

const ProductApi = async (request: NextApiRequest, response: NextApiResponse) => {
  const productId = request.query.id;

  if (!productId || Array.isArray(productId)) return response.status(404).send('No valid product ID provided!');

  if (request.method === 'GET') {
    await fetchProductData(productId, request, response);
  }
}

const fetchProductData = async (productId: string, request: NextApiRequest, response: NextApiResponse) => {
  const product = MOCKED_PRODUCTS.find(product => product.id === productId);

  return response.status(200).json({ product: product });
}

export default ProductApi;