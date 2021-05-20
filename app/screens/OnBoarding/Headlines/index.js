import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import palette from 'styles/palette';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const _start = {x: 0.5, y: 0.5};
const _end = {x: 0.5, y: 0.9};
const _colors = [palette.white, palette.lightPrimary];

const Headlines = () => {
  return (
    <KeyboardAwareScrollView>
      <LinearGradient
        start={_start}
        end={_end}
        colors={_colors}
        style={styles.gradientContainer}>
        <View style={styles.container}>
          <View style={styles.lottieContainer}>
            <LottieView
              source={require('app/assets/violinist.json')}
              autoPlay
              loop
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.bigTitle}>Breathe!</Text>
            <Text style={styles.smallTitle}>
              We will have your back through out the entire process. No need to
              worry about anything.
            </Text>
            <TextInput label="Email" caretHidden dense />
            <TextInput />
          </View>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default Headlines;
