import React from 'react';
import { StatusBar } from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues, productSchema } from './productSchema';

import { Button, TextInput } from '../../components';
import { IRegisterProductData } from './types';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisterProduct = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProductData>({
    defaultValues,
    resolver: yupResolver(productSchema),
  });

  const theme = useTheme();

  const handleRegisterProduct = async (
    registerProductData: IRegisterProductData,
  ) => {
    console.log(errors);
    console.log(registerProductData);
  };

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
                name="name"
                placeholder="Digite o nome do produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="words"
                control={control}
              />
              {errors.name && <TextInput.Error error={errors.name} />}
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Código do produto:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                name="code"
                placeholder="Digite um código para o produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
                control={control}
              />
            </TextInput.Root>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Valor do produto:</S.InputLabel>

            <TextInput.Root>
              <TextInput.Input
                name="price"
                placeholder="Digite um valor para o produto"
                placeholderTextColor={theme.colors.gray_400}
                autoCorrect={false}
                autoComplete="off"
                autoCapitalize="none"
                control={control}
              />

              {errors.price && <TextInput.Error error={errors.price} />}
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
            <Button.Text color={theme.colors.categories}>
              Escolha uma categoria para o produto
            </Button.Text>

            <Button.Icon>
              <S.CategoryIcon name="chevron-right" />
            </Button.Icon>
          </Button.Root>

          <S.RegisterProductButtonContainer>
            <Button.Root
              type="filled"
              color={theme.colors.products}
              onPress={handleSubmit(handleRegisterProduct)}
            >
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
