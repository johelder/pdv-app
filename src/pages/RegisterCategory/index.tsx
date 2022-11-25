import React, { useCallback, useState } from 'react';
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

import { Button, TextInput, Modal } from '../../components';
import { ICategoryData, TRegisterCategoryProps } from './types';
import { TPageStatus } from '../../types/general';

import { useTheme } from 'styled-components';

import errorAnimationSource from '../../assets/animations/error-animation.json';
import successAnimationSource from '../../assets/animations/success-animation.json';
import loadingAnimationSource from '../../assets/animations/loading-animation.json';

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

  const [toggleModal, setToggleModal] = useState(false);

  const theme = useTheme();
  const feedbackModalMessages = {
    loading: {
      title: 'Quase lá!',
      description: 'Estamos cadastrando sua nova categoria',
    },

    error: {
      title: 'Algo deu errado!',
      description:
        'Não foi possível cadastrar esta categoria, tente novamente mais tarde',
    },

    success: {
      title: 'Sucesso!',
      description: 'Categoria cadastrada',
    },
  };
  const handleRedirect = () => {
    if (route.params.redirect === 'RegisterCategory') {
      navigation.goBack();

      return;
    }

    navigation.navigate('RegisteredCategories');
  };

  const handleToggleModal = useCallback(() => {
    setToggleModal(prevModalState => !prevModalState);
  }, []);

  const renderFeedbackModal = () => (
    <Modal
      isVisible={toggleModal}
      onCloseModal={handleToggleModal}
      modalPosition="center"
    >
      <S.ModalContent>
        <S.CloseModalButton onPress={handleToggleModal}>
          <S.CloseIcon name="x" />
        </S.CloseModalButton>
        {pageStatus === 'loading' && (
          <S.ModalAnimation
            source={loadingAnimationSource}
            style={{ width: 100 }}
            autoPlay
            loop
          />
        )}

        {pageStatus === 'error' && (
          <S.ModalAnimation
            source={errorAnimationSource}
            style={{ width: 100 }}
            autoPlay
            loop
          />
        )}

        {pageStatus === 'success' && (
          <S.ModalAnimation
            source={successAnimationSource}
            style={{ width: 100 }}
            autoPlay
            loop
          />
        )}
        <S.ModalTextContainer>
          <S.ModalTitle>
            {pageStatus === 'error'
              ? feedbackModalMessages.error.title
              : pageStatus === 'success'
              ? feedbackModalMessages.success.title
              : feedbackModalMessages.loading.title}
          </S.ModalTitle>
          <S.ModalMessage>
            {pageStatus === 'error'
              ? feedbackModalMessages.error.description
              : pageStatus === 'success'
              ? feedbackModalMessages.success.description
              : feedbackModalMessages.loading.description}
          </S.ModalMessage>
        </S.ModalTextContainer>
      </S.ModalContent>
    </Modal>
  );

  const handleRegisterCategory = async (categoryData: ICategoryData) => {
    setPageStatus('loading');
    const response = await category.create(categoryData);

    if (!response.ok) {
      setPageStatus('error');
      setToggleModal(true);
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
            {pageStatus != 'idle' && renderFeedbackModal()}
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
