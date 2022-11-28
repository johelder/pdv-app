import { TouchableOpacityProps } from 'react-native';

export interface IButtonNavigationProps extends TouchableOpacityProps {
  type: 'new-sale' | 'register-product' | 'register-category' | 'registered';
}

export interface IButtonNavigationColors {
  color: 'primary' | 'products' | 'categories' | 'registered';
}
