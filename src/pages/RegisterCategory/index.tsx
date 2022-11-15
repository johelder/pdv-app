import React from 'react';
import { StatusBar } from 'react-native';

import { Controller, useForm } from 'react-hook-form';
import { categorySchema, defaultValues } from './categorySchema';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, TextInput } from '../../components';
import { ICategoryData, TRegisterCategoryProps } from './types';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisterCategory = ({
  navigation,
  route,
}: TRegisterCategoryProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(categorySchema) });

  const theme = useTheme();

  const handleRedirect = () => {
    if (route.params.redirect === 'RegisterCategory') {
      navigation.goBack();
    }
  };

  const handleRegisterCategory = (categoryData: ICategoryData) => {
    console.log(categoryData);

    handleRedirect();
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
          <S.FormContent>
            <S.Title>
              Estamos quase lá!{'\n'}Informe os dados da categoria
            </S.Title>

            <S.InputContainer>
              <S.InputLabel>Nome do categoria:</S.InputLabel>

              <TextInput.Root>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput.Input
                      placeholder="Digite um nome para a categoria"
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
              <S.InputLabel>Código do categoria:</S.InputLabel>

              <TextInput.Root>
                <Controller
                  name="code"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput.Input
                      placeholder="Digite um código para a categoria"
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
              <S.InputLabel>Descrição do produto:</S.InputLabel>

              <S.CategoryDescriptionInputContainer>
                <Controller
                  name="description"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <S.CategoryDescriptionInput
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
              </S.CategoryDescriptionInputContainer>
            </S.InputContainer>
          </S.FormContent>

          <Button.Root
            type="filled"
            color={theme.colors.categories}
            onPress={handleSubmit(handleRegisterCategory)}
          >
            <Button.Text color={theme.colors.light}>
              Cadastrar categoria
            </Button.Text>
          </Button.Root>
        </S.Content>
      </S.Container>
    </>
  );
};
