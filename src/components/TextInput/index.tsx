import React from 'react';
import {
  ITextInputRootProps,
  ITextInputIconProps,
  ITextInputInputProps,
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

const TextInputInput = ({ ...rest }: ITextInputInputProps) => {
  return <S.TextInputContainer {...rest} />;
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
