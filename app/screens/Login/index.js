import React, {useCallback} from 'react';
import {Animated, View} from 'react-native';
import {Text} from 'react-native-paper';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

import styles from './styles';
import palette from '../../styles/palette';
import {useNavigation} from '@react-navigation/core';

const _countdownColors = [
  [palette.purpleDark, 0.4],
  [palette.purplePrimary, 0.4],
  [palette.purpleDark, 0.2],
];

const _renderCountdownText = ({remainingTime, animatedColor}) => (
  <Animated.Text style={[styles.countdownText, {color: animatedColor}]}>
    {remainingTime}
  </Animated.Text>
);

const Login = () => {
  const {navigate} = useNavigation();
  const onComplete = useCallback(() => navigate('OnBoarding'), [navigate]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bigTitle}>HANG ON!</Text>
        <Text style={styles.smallTitle}>You will be redirected shortly! 🛰</Text>
      </View>
      <CountdownCircleTimer
        isPlaying
        duration={6}
        colors={_countdownColors}
        onComplete={onComplete}>
        {_renderCountdownText}
      </CountdownCircleTimer>
    </View>
  );
};

export default Login;