import Category from "./category"
import Picture from "./Picture"

type Product = {
  id: string,
  name: string,
  price: number,
  finalPrice: number,
  rating: number,
  ratingCount: number,
  inventory: number,
  description: string,
  category: Category,
  categoryId: number,
  pictures: Picture[],
  createdAt?: Date,
  updatedAt?: Date
}

export default Product