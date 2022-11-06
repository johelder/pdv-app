import React, { useCallback, useState } from 'react';

import { Button, DraggableButton, TextInput } from '../../components';
import { categories } from './data';

import { useTheme } from 'styled-components';

import * as S from './styles';
import { ListRenderItemInfo } from 'react-native';
import { ICategory } from './types';

export const SelectProducts = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const theme = useTheme();

  const handleActiveCategory = useCallback((categoryId: number) => {
    setActiveCategory(categoryId);
  }, []);

  const renderCategory = useCallback(
    ({ item: category }: ListRenderItemInfo<ICategory>) => {
      return (
        <S.CategoryContainer>
          <Button.Root
            type={activeCategory === category.id ? 'filled' : 'outline'}
            color={theme.colors.categories}
            onPress={() => handleActiveCategory(category.id)}
          >
            <Button.Text
              color={
                activeCategory === category.id
                  ? theme.colors.light
                  : theme.colors.dark
              }
            >
              {category.name}
            </Button.Text>
          </Button.Root>
        </S.CategoryContainer>
      );
    },
    [
      activeCategory,
      handleActiveCategory,
      theme.colors.categories,
      theme.colors.dark,
      theme.colors.light,
    ],
  );

  return (
    <S.Container>
      <DraggableButton color={theme.colors.products}>
        <S.BagIcon name="shopping-bag" />
      </DraggableButton>

      <S.SearchInputContainer>
        <TextInput.Root>
          <TextInput.Icon>
            <S.SearchIcon name="search" />
          </TextInput.Icon>

          <TextInput.Input
            placeholder="Pesquisar um produto"
            placeholderTextColor={theme.colors.dark}
            autoCorrect={false}
            autoComplete="off"
            autoCapitalize="none"
          />
        </TextInput.Root>
      </S.SearchInputContainer>

      <S.CategoriesContainer>
        <S.Categories
          data={categories}
          renderItem={renderCategory}
          keyExtractor={category => String(category.id)}
        />
      </S.CategoriesContainer>
    </S.Container>
  );
};
