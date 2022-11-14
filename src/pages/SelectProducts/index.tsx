import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { useAppSelector } from '../../hooks/appSelector';

import {
  Button,
  DraggableButton,
  Modal,
  Product,
  TextInput,
} from '../../components';
import { IProduct } from '../../components/Product/types';
import { ICategory } from './types';
import { categories } from './data';

import { useTheme } from 'styled-components';

import * as S from './styles';
import { IProductBag } from '../../features/bag/types';
import { formatMoney } from '../../utils';

export const SelectProducts = () => {
  const [activeCategory, setActiveCategory] = useState({} as ICategory);
  const [toggleAddedProductsModal, setToggleAddedProductsModal] =
    useState(false);
  const products = useAppSelector(state => state.bag.products);

  const theme = useTheme();

  const handleToggleAddedProductsModal = useCallback(() => {
    setToggleAddedProductsModal(prevModalState => !prevModalState);
  }, []);

  const handleActiveCategory = useCallback((category: ICategory) => {
    setActiveCategory(category);
  }, []);

  const renderCategory = useCallback(
    ({ item: category }: ListRenderItemInfo<ICategory>) => {
      return (
        <S.CategoryContainer>
          <Button.Root
            type={activeCategory.id === category.id ? 'filled' : 'outline'}
            color={theme.colors.categories}
            onPress={() => handleActiveCategory(category)}
          >
            <Button.Text
              color={
                activeCategory.id === category.id
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

  const renderProduct = useCallback(
    ({ item: product }: ListRenderItemInfo<IProduct>) => {
      return (
        <S.ProductContainer>
          <Product product={product} />
        </S.ProductContainer>
      );
    },
    [],
  );

  const renderAddedProducts = useCallback(
    ({ item: addedProduct }: ListRenderItemInfo<IProductBag>) => {
      const formattedPrice = formatMoney(
        (addedProduct.price * addedProduct.quantity) / 100,
      );

      return (
        <S.AddedProductContainer>
          <S.AddedProduct>
            {addedProduct.quantity}x {addedProduct.name}
          </S.AddedProduct>
          <S.AddedProductPrice>{formattedPrice}</S.AddedProductPrice>
        </S.AddedProductContainer>
      );
    },
    [],
  );

  return (
    <S.Container>
      <DraggableButton onPress={handleToggleAddedProductsModal}>
        <S.BagIcon name="shopping-bag" />
      </DraggableButton>

      <S.SearchInputContainer>
        <TextInput.Root>
          <TextInput.Icon>
            <S.SearchIcon name="search" />
          </TextInput.Icon>

          <TextInput.Input
            name="searchProduct"
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

      <S.ProductsContainer>
        <S.Products
          data={activeCategory.products}
          renderItem={renderProduct}
          keyExtractor={product => String(product.id)}
          numColumns={2}
          key={2}
        />
      </S.ProductsContainer>

      <Modal
        isVisible={toggleAddedProductsModal}
        onCloseModal={handleToggleAddedProductsModal}
      >
        <S.ModalContainer>
          <S.ModalContent>
            <S.ModalHeader>
              <S.Title>Produtos Selecionados</S.Title>

              <S.CloseModalButton onPress={handleToggleAddedProductsModal}>
                <S.CloseIcon name="x" />
              </S.CloseModalButton>
            </S.ModalHeader>

            <S.AddedProducts
              data={products}
              renderItem={renderAddedProducts}
              keyExtractor={addedProduct => String(addedProduct.id)}
            />
          </S.ModalContent>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
};
