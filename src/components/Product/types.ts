export interface IProduct {
  id: number;
  name: string;
  code: string;
  description: string;
  status: string;
  image: string;
  price: number;
}

export interface IProductProps {
  product: IProduct;
}
