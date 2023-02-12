import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { Props } from './types';

import {
  Container,
  TextPublicty,
  LabelPublicty,
  ButtonPublicty,
  TitleButton,
} from './styles';

export function BannerPublicity({ setVisiblePlans }: Props) {

  const positionWidth = useSharedValue(320);
  const positionHeight = useSharedValue(150);

  const doubleTap = useSharedValue(0);

  function onPressIn() {
    positionWidth.value = withSpring(350);
    positionHeight.value = withSpring(200);

  }

  function onPressOut() {
    positionWidth.value = withSpring(320);
    positionHeight.value = withSpring(150);
  }

  const animatedStyle = useAnimatedStyle(() => ({
    width: positionWidth.value,
    height: positionHeight.value,

  }));


  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{ width: '100%' }}
    >


      <Animated.View style={[stylesheet.container, animatedStyle]}>
        <TextPublicty>50% off</TextPublicty>
        <LabelPublicty>Adiquira já o plano premium!</LabelPublicty>

        <ButtonPublicty onPress={() => setVisiblePlans(true)}>
          <TitleButton>Aproveitar</TitleButton>
        </ButtonPublicty>

      </Animated.View>

    </Pressable>

  );
}

const stylesheet = StyleSheet.create({
  container: {
    padding: '5%',
    marginTop: '5%',
    borderRadius: 5,

    backgroundColor: '#43405D'
  }
})