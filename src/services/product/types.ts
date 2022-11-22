export interface IProductPayload {
  name: string;
  code?: string;
  description?: string;
  image?: string;
  price: string;
  categories: number[];
}
