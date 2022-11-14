import React from 'react';

import { Controller } from 'react-hook-form';

import {
  ITextInputRootProps,
  ITextInputIconProps,
  ITextInputInputProps,
  ITextInputErrorProps,
} from './types';

import * as S from './styles';

const TextInputRoot = ({ isDisabled, children }: ITextInputRootProps) => {
  return (
    <S.TextInputRootContainer>
      <S.TextInputRootContent isDisabled={isDisabled}>
        {children}
      </S.TextInputRootContent>
    </S.TextInputRootContainer>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

const TextInputIcon = ({ children }: ITextInputIconProps) => {
  return <S.TextInputIconContainer>{children}</S.TextInputIconContainer>;
};

TextInputIcon.displayName = 'TextInput.Icon';

const TextInputInput = ({ name, control, ...rest }: ITextInputInputProps) => {
  if (control && name) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <S.TextInputContainer
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />
    );
  }

  return <S.TextInputContainer {...rest} />;
};

const TextInputError = ({ error }: ITextInputErrorProps) => {
  return (
    <>
      <S.TextInputErrorContainer>
        <S.WarningIcon name="exclamation" />
      </S.TextInputErrorContainer>

      <S.TextInputErrorMessageContainer>
        <S.TextInputErrorMessage>{error.message}</S.TextInputErrorMessage>
      </S.TextInputErrorMessageContainer>
    </>
  );
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
  Error: TextInputError,
};
