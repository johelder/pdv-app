import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { useAppSelector } from '../../hooks/appSelector';
import { IProductBag } from '../../features/bag/types';

import { category } from '../../services/category';
import { product } from '../../services/product';
import { formatMoney } from '../../utils';

import {
  Button,
  DraggableButton,
  Modal,
  Product,
  TextInput,
} from '../../components';

import { IProduct } from '../../components/Product/types';
import { ICategory, TSelectProductsProps } from './types';
import { TPageStatus } from '../../types/general';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const SelectProducts = ({ navigation }: TSelectProductsProps) => {
  const [toggleAddedProductsModal, setToggleAddedProductsModal] =
    useState(false);
  const [pageStatus, setPageStatus] = useState<TPageStatus>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState({} as ICategory);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const products = useAppSelector(state => state.bag.products);

  const theme = useTheme();

  const handleToggleAddedProductsModal = useCallback(() => {
    setToggleAddedProductsModal(prevModalState => !prevModalState);
  }, []);

  const handleActiveCategory = useCallback((category: ICategory) => {
    setActiveCategory(category);
  }, []);

  const getCategories = useCallback(async () => {
    setPageStatus('loading');
    const response = await category.findAll();

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    const [firstCategory] = response.data;

    setTimeout(() => {
      setCategories(response.data);
      setActiveCategory(firstCategory);
      setPageStatus('success');
    }, 1000);
  }, []);

  const searchProducts = useCallback(async (search: string) => {
    setPageStatus('loading');

    const response = await product.search(search);

    if (!response.ok) {
      return;
    }

    setTimeout(() => {
      setFilteredProducts(response.data);
      setPageStatus('success');
    }, 1000);
  }, []);

  const handleRedirectToNewSale = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (search === '') {
      setFilteredProducts([]);

      return;
    }

    const delayInSearch = setTimeout(() => {
      searchProducts(search);
    }, 800);

    return () => clearTimeout(delayInSearch);
  }, [search, searchProducts]);

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
            placeholder="Pesquisar um produto"
            placeholderTextColor={theme.colors.dark}
            autoCorrect={false}
            autoComplete="off"
            autoCapitalize="none"
            value={search}
            onChangeText={setSearch}
          />
        </TextInput.Root>
      </S.SearchInputContainer>

      {pageStatus === 'loading' && <S.Loading />}

      {!search && (
        <S.CategoriesContainer>
          <S.Categories
            data={categories}
            renderItem={renderCategory}
            keyExtractor={category => String(category.id)}
          />
        </S.CategoriesContainer>
      )}

      <S.ProductsContainer>
        <S.Products
          data={!search ? activeCategory.products : filteredProducts}
          renderItem={renderProduct}
          keyExtractor={product => String(product.id)}
          numColumns={2}
          key={2}
        />
      </S.ProductsContainer>

      <S.BackToSaleButtonContainer>
        <Button.Root
          type="filled"
          color={theme.colors.products}
          onPress={handleRedirectToNewSale}
        >
          <Button.Text color={theme.colors.light}>
            Continuar com a compra
          </Button.Text>
        </Button.Root>
      </S.BackToSaleButtonContainer>

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
