import React, { useState, useCallback } from 'react';
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

import { Button, TextInput, Modal} from '../../components';
import { ICategoryData, TRegisterCategoryProps } from './types';
import { TPageStatus } from '../../types/general';

import { useTheme } from 'styled-components';

import errorAnimationSource from '../../assets/animations/error-animation.json';


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
  } = useForm({ defaultValues, resolver: yupResolver(categorySchema) });

  const [toggleErrorModal, setToggleErrorModal] = useState(false);

  const theme = useTheme();

  const handleRedirect = () => {
    if (route.params.redirect === 'RegisterCategory') {
      navigation.goBack();

      return;
    }

    navigation.navigate('RegisteredCategories');
  };


  const handleToggleErrorModal = useCallback(() => {
    setToggleErrorModal(prevModalState => !prevModalState);

  }, []);

  const handleRegisterCategory = async (categoryData: ICategoryData) => {
    setPageStatus('loading');
    const response = await category.create(categoryData);

    if (!response.ok) {
      setPageStatus('error');
      setToggleErrorModal(true);
      return;
    }

    handleRedirect();
    setPageStatus('success');
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

            {pageStatus === 'error' && (
               <Modal
                 isVisible={toggleErrorModal}
                 onCloseModal={handleToggleErrorModal}
                 swipeDirection="down"
                 modalPosition="center"
                 >
                   <S.ModalContent>
                   <S.CloseModalButton onPress={handleToggleErrorModal}>
                <S.CloseIcon name="x" />
              </S.CloseModalButton>
                    <S.ErrorAnimation
                      source={errorAnimationSource}
                      style={{ width: 100 }}
                      autoPlay
                      loop
                    />
                    <S.ModalTextContainer>
                      <S.ModalTitle>Algo deu errado!</S.ModalTitle>
                      <S.ModalMessage>Não foi possível cadastrar seu produto, tente novamente mais tarde</S.ModalMessage>
                    </S.ModalTextContainer>

                   </S.ModalContent>
                </Modal>
              )}


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
