import { ReactNode } from 'react';
import { Control, FieldError, FieldPath } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { IRegisterProductData } from '../../pages/RegisterProduct/types';

export interface ITextInputRootProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export interface ITextInputIconProps {
  children: ReactNode;
}

export interface ITextInputInputProps extends TextInputProps {
  name?: FieldPath<IRegisterProductData>;
  control?: Control<IRegisterProductData>;
}

export interface ITextInputErrorProps {
  error: FieldError;
}
