import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export interface ITextInputRootProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export interface ITextInputIconProps {
  children: ReactNode;
}

export interface ITextInputInputProps extends TextInputProps {}
