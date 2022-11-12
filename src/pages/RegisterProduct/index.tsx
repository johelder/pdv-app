import React from 'react';
import { StatusBar } from 'react-native';
import { Button, TextInput } from '../../components';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisterProduct = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Container>
        <S.Content>
          <Button.Root type="filled" color={theme.colors.primary}>
            <Button.Icon>
              <S.ImageIcon name="image" />
            </Button.Icon>

            <Button.Text color={theme.colors.light}>Inserir imagem</Button.Text>
          </Button.Root>

          <S.InputContainer>
            <S.InputLabel>Nome do produto:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                placeholder="Digite o nome do produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="words"
              />
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Código do produto:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                placeholder="Digite um código para o produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
              />
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Valor do produto:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                placeholder="Digite um valor para o produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
              />
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Descrição do produto:</S.InputLabel>

            <S.ProductDescriptionInputContainer>
              <S.ProductDescriptionInput
                placeholder="Digite uma descrição para o produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
                multiline
                maxLength={240}
              />
            </S.ProductDescriptionInputContainer>
          </S.InputContainer>

          <Button.Root type="outline" color={theme.colors.categories}>
            <Button.Text color={theme.colors.dark}>
              Escolha uma categoria para o produto
            </Button.Text>

            <Button.Icon>
              <S.CategoryIcon name="chevron-right" />
            </Button.Icon>
          </Button.Root>

          <S.RegisterProductButtonContainer>
            <Button.Root type="filled" color={theme.colors.products}>
              <Button.Text color={theme.colors.light}>
                Cadastrar produto
              </Button.Text>
            </Button.Root>
          </S.RegisterProductButtonContainer>
        </S.Content>
      </S.Container>
    </>
  );
};
