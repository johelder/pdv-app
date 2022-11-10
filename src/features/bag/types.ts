import { IProduct } from '../../components/Product/types';

export interface IProductBag extends IProduct {
  quantity: number;
}

export interface IBagState {
  products: IProductBag[];
}
