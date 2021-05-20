import React from 'react';
import {Animated, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

const _countdownColors = [
  ['#004777', 0.4],
  ['#F7B801', 0.4],
  ['#A30000', 0.2],
];

const _renderCountdownText = ({remainingTime, animatedColor}) => (
  <Animated.Text style={{color: animatedColor}}>{remainingTime}</Animated.Text>
);

const Login = () => {
  const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Poppins-Black'}}>
        You will be redirected shortly! 🛰
      </Text>
      <CountdownCircleTimer isPlaying duration={10} colors={_countdownColors}>
        {_renderCountdownText}
      </CountdownCircleTimer>
    </View>
  );
};

export default Login;
