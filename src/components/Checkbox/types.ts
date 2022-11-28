import { TouchableOpacityProps } from 'react-native';

export interface ICheckboxProps extends TouchableOpacityProps {
  type: 'square' | 'circle';
  isChecked: boolean;
}
