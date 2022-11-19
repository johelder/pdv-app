import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface ITextInputRootProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export interface ITextInputIconProps {
  children: ReactNode;
}

export interface ITextInputInputProps extends TextInputProps {}

export interface ITextInputErrorProps {
  error: FieldError;
}
