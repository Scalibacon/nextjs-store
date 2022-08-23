import { NextApiRequest, NextApiResponse } from "next";
import Category from "../../../types/category";

const CategoryApi = (request: NextApiRequest, response: NextApiResponse) => {
  const categories = [
    { id: 1, name: 'Alimentos'},
    { id: 2, name: 'Tecnologia'},
    { id: 3, name: 'Automóveis'},
    { id: 4, name: 'Eletrodomésticos'},
    { id: 5, name: 'Mobília'},
    { id: 6, name: 'Equipamentos Bélicos'},
    { id: 7, name: 'Brinquedos'},
    { id: 8, name: 'Cama, Mesa e Banho'},
    { id: 9, name: 'Outras Categorias'}
  ] as Category[];

  return response.status(200).json({ categories });
}

export default CategoryApi;