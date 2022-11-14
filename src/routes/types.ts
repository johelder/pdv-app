import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TRootStackParamList = {
  Home: undefined;
  NewSale: undefined;
  SelectProducts: undefined;
  RegisterProduct: undefined;
  SelectCategories: undefined;
};

export type TNavigationProps<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>;
