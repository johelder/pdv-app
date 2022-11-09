import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { useAppSelector } from '../../hooks/appSelector';

import { IDraggableButtonProps, TGestureHandlerContext } from './types';

import * as S from './styles';

export const DraggableButton = ({
  children,
  ...rest
}: IDraggableButtonProps) => {
  const products = useAppSelector(state => state.bag.products);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const { width, height } = useWindowDimensions();

  const HEADER_HEIGHT = useHeaderHeight() * -1;
  const WINDOW_HEIGHT_SIZE = -height;
  const WINDOW_WIDTH_SIZE = -width;
  const HALF_WINDOW_SIZE = -width / 2;
  const DRAGGABLE_BUTTON_SIZE = 60;
  const DRAGGABLE_BUTTON_MARGIN = 10;

  const handlePanGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    TGestureHandlerContext
  >({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      if (translateY.value < HEADER_HEIGHT + DRAGGABLE_BUTTON_SIZE) {
        translateY.value = withSpring(
          WINDOW_HEIGHT_SIZE +
            HEADER_HEIGHT +
            DRAGGABLE_BUTTON_SIZE / 2 -
            WINDOW_HEIGHT_SIZE,
        );
      }

      if (translateX.value > HALF_WINDOW_SIZE) {
        translateX.value = withSpring(0);
        return;
      }

      translateX.value = withSpring(
        WINDOW_WIDTH_SIZE + DRAGGABLE_BUTTON_SIZE + DRAGGABLE_BUTTON_MARGIN,
      );
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const draggableButtonStyles = StyleSheet.create({
    content: {
      flex: 1,
      position: 'absolute',
      top: 100,
      right: 0,
      marginHorizontal: 5,

      zIndex: 2,
      elevation: 2,
    },
  });

  return products.length ? (
    <PanGestureHandler onGestureEvent={handlePanGestureEvent}>
      <Animated.View style={[animatedStyles, draggableButtonStyles.content]}>
        <S.Container {...rest}>
          {children}

          <S.CountContainer>
            <S.CountLabel>{products.length}</S.CountLabel>
          </S.CountContainer>
        </S.Container>
      </Animated.View>
    </PanGestureHandler>
  ) : null;
};
