import { TNavigationProps } from '../../routes/types';

export type TRegisterCategoryProps = TNavigationProps<'RegisterCategory'>;

export interface ICategoryData {
  name: string;
  code: string;
  description: string;
}
