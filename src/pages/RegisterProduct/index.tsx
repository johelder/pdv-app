import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues, productSchema } from './productSchema';
import { SelectCategoriesContext } from '../../contexts/selectCategories';

import { Button, TextInput } from '../../components';
import { IRegisterProductData, TRegisterProductProps } from './types';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisterProduct = ({ navigation }: TRegisterProductProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(productSchema),
  });
  const { selectedCategories } = useContext(SelectCategoriesContext);

  const theme = useTheme();

  const handleRegisterProduct = async (
    registerProductData: IRegisterProductData,
  ) => {
    console.log({ registerProductData });
    console.log({ selectedCategories });
  };

  const handleRedirectToSelectCategory = () => {
    navigation.navigate('SelectCategories');
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
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <S.ProductDescriptionInput
                    placeholder="Digite uma descrição para o produto"
                    placeholderTextColor={theme.colors.gray_400}
                    autoCorrect={false}
                    autoComplete="off"
                    autoCapitalize="none"
                    multiline
                    maxLength={240}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </S.ProductDescriptionInputContainer>
          </S.InputContainer>

          <Button.Root
            type="outline"
            color={theme.colors.categories}
            onPress={handleRedirectToSelectCategory}
          >
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
