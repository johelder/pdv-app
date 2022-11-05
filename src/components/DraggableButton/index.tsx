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

import { IDraggableButtonProps, TGestureHandlerContext } from './types';

import * as S from './styles';

export const DraggableButton = ({ color, children }: IDraggableButtonProps) => {
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
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <S.Container>
      <PanGestureHandler onGestureEvent={handlePanGestureEvent}>
        <Animated.View style={[animatedStyles, draggableButtonStyles.content]}>
          {children}

          <S.CountContainer>
            <S.CountLabel>2</S.CountLabel>
          </S.CountContainer>
        </Animated.View>
      </PanGestureHandler>
    </S.Container>
  );
};
