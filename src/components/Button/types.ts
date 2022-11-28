import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface IButtonRootProps extends TouchableOpacityProps {
  children: ReactNode;
  type: 'filled' | 'unfilled' | 'outline';
  color?: string;
  align?: 'start' | 'center' | 'end';
}

export interface IButtonIconProps {
  children: ReactNode;
}

export interface IButtonTextProps {
  children: string;
  color: string;
}
