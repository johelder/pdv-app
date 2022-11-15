import React from 'react';
import { Button, TextInput } from '../../components';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisterCategory = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.FormContent>
          <S.Title>
            Estamos quase lá!{'\n'}Informe os dados da categoria
          </S.Title>

          <S.InputContainer>
            <S.InputLabel>Nome do categoria:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                name="name"
                placeholder="Digite um nome para a categoria"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="words"
              />
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Código do categoria:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                name="code"
                placeholder="Digite um código para a categoria"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
              />
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Descrição do produto:</S.InputLabel>

            <S.CategoryDescriptionInputContainer>
              <S.CategoryDescriptionInput
                placeholder="Digite uma descrição para o produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
                multiline
                maxLength={240}
              />
            </S.CategoryDescriptionInputContainer>
          </S.InputContainer>
        </S.FormContent>

        <Button.Root type="filled" color={theme.colors.categories}>
          <Button.Text color={theme.colors.light}>
            Cadastrar categoria
          </Button.Text>
        </Button.Root>
      </S.Content>
    </S.Container>
  );
};
