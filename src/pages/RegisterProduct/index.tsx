import React, { useCallback, useContext, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues, productSchema } from './productSchema';
import { SelectCategoriesContext } from '../../contexts/selectCategories';

import { Button, TextInput } from '../../components';
import { IProductData, TRegisterProductProps } from './types';

import { useTheme } from 'styled-components';

import * as S from './styles';

const choosePhotoMethodOptions: CameraOptions = {
  mediaType: 'photo',
};

export const RegisterProduct = ({ navigation }: TRegisterProductProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(productSchema),
  });

  const [selectedProductPhoto, setSelectedProductPhoto] =
    useState<ImagePickerResponse>({});
  const { selectedCategories } = useContext(SelectCategoriesContext);

  const theme = useTheme();

  const handleOpenCamera = async () => {
    await launchCamera(choosePhotoMethodOptions, setSelectedProductPhoto);
  };

  const handleOpenGallery = async () => {
    await launchImageLibrary(choosePhotoMethodOptions, setSelectedProductPhoto);
  };

  const handleChoosePhotoMethodDialog = () => {
    Alert.alert(
      'Foto do produto',
      'Escolha ou tire uma foto para seu produto',
      [
        {
          text: 'Tirar foto',
          onPress: () => handleOpenCamera(),
        },
        {
          text: 'Escolher a partir da galeria',
          onPress: () => handleOpenGallery(),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  const handleRegisterProduct = async (registerProductData: IProductData) => {
    if (!selectedCategories.length) {
      Alert.alert(
        'Escolha uma categoria para seu produto',
        'Você pode escolher ou cadastrar uma nova categoria para seu produto.',
        [
          {
            text: 'Escolher uma categoria',
            onPress: () => handleRedirectToSelectCategory(),
          },
        ],
      );
    }

    console.log({ registerProductData });
    console.log({ selectedCategories });
    console.log({ selectedProductPhoto });
  };

  const handleRedirectToSelectCategory = useCallback(() => {
    navigation.navigate('SelectCategories');
  }, [navigation]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
        <S.Content>
          <S.FormContent>
            <Button.Root
              type="filled"
              color={theme.colors.primary}
              onPress={handleChoosePhotoMethodDialog}
            >
              <Button.Icon>
                <S.ImageIcon name="image" />
              </Button.Icon>

              <Button.Text color={theme.colors.light}>
                Inserir imagem
              </Button.Text>
            </Button.Root>

            <S.InputContainer>
              <S.InputLabel>Nome do produto:</S.InputLabel>

              <TextInput.Root>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput.Input
                      placeholder="Digite o nome do produto"
                      placeholderTextColor={theme.colors.gray_400}
                      autoCorrect={false}
                      autoComplete="off"
                      autoCapitalize="words"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.name && <TextInput.Error error={errors.name} />}
              </TextInput.Root>
            </S.InputContainer>

            <S.InputContainer>
              <S.InputLabel>Código do produto:</S.InputLabel>

              <TextInput.Root>
                <Controller
                  name="code"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput.Input
                      placeholder="Digite um código para o produto"
                      placeholderTextColor={theme.colors.gray_400}
                      autoCorrect={false}
                      autoComplete="off"
                      autoCapitalize="none"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
              </TextInput.Root>
            </S.InputContainer>

            <S.InputContainer>
              <S.InputLabel>Valor do produto:</S.InputLabel>

              <TextInput.Root>
                <Controller
                  name="price"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput.Input
                      keyboardType="numeric"
                      placeholder="Digite um valor para o produto"
                      placeholderTextColor={theme.colors.gray_400}
                      autoCorrect={false}
                      autoComplete="off"
                      autoCapitalize="none"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
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
          </S.FormContent>

          <Button.Root
            type="filled"
            color={theme.colors.products}
            onPress={handleSubmit(handleRegisterProduct)}
          >
            <Button.Text color={theme.colors.light}>
              Cadastrar produto
            </Button.Text>
          </Button.Root>
        </S.Content>
      </S.Container>
    </>
  );
};
