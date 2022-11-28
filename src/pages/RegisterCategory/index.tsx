import React, { useState } from 'react';
import {
  StatusBar,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Controller, useForm } from 'react-hook-form';
import { categorySchema, defaultValues } from './categorySchema';
import { yupResolver } from '@hookform/resolvers/yup';

import { category } from '../../services/category';

import { Button, TextInput } from '../../components';
import { ICategoryData, TRegisterCategoryProps } from './types';
import { TPageStatus } from '../../types/general';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisterCategory = ({
  navigation,
  route,
}: TRegisterCategoryProps) => {
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(categorySchema) });

  const theme = useTheme();

  const handleRedirect = () => {
    if (route.params.redirect === 'RegisterCategory') {
      navigation.goBack();

      return;
    }

    navigation.navigate('RegisteredCategories');
  };

  const handleRegisterCategory = async (categoryData: ICategoryData) => {
    setPageStatus('loading');
    const response = await category.create(categoryData);

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    setPageStatus('success');
    reset();
    handleRedirect();
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Content>
            <S.FormContent>
              <S.Title>
                Estamos quase lá!{'\n'}Informe os dados da categoria
              </S.Title>

              <S.InputContainer>
                <S.InputLabel>Nome da categoria:</S.InputLabel>

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
                <S.InputLabel>Código da categoria:</S.InputLabel>

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
                <S.InputLabel>Descrição da categoria:</S.InputLabel>

                <S.CategoryDescriptionInputContainer>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.CategoryDescriptionInput
                        placeholder="Digite uma descrição para a categoria"
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

            <S.FooterContainer>
              {pageStatus === 'error' && (
                <S.ErrorLabel>
                  Ocorreu um erro ao cadastrar, tente novamente mais tarde
                </S.ErrorLabel>
              )}

              <Button.Root
                type="filled"
                color={theme.colors.categories}
                onPress={handleSubmit(handleRegisterCategory)}
                disabled={pageStatus === 'loading'}
              >
                {pageStatus === 'loading' ? (
                  <ActivityIndicator />
                ) : (
                  <Button.Text color={theme.colors.light}>
                    Cadastrar categoria
                  </Button.Text>
                )}
              </Button.Root>
            </S.FooterContainer>
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </>
  );
};
