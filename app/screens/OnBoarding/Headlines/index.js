import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import palette from 'styles/palette';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {PRIMARY} from '../../../styles/typography';
import {useDispatch} from 'react-redux';
import {doChangeName} from 'store/actions/onBoardingActions';

const _start = {x: 0.5, y: 0.5};
const _end = {x: 0.5, y: 1};
const _theme = {
  fonts: {regular: ''},
  colors: {primary: palette.orange},
};
const _colors = [palette.white, palette.lightPrimary];

const Headlines = () => {
  const dispatch = useDispatch();
  const onChangeText = text => {
    dispatch(doChangeName(text));
  };
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
            <View>
              <Text style={styles.bigTitle}>Breathe!</Text>
              <Text style={styles.smallTitle}>
                We will have your back through out the entire process. No need
                to worry about anything.
              </Text>
            </View>
            <View style={styles.guideContainer}>
              <Text style={styles.guideText}>
                Completely tailored and personal!{'\n'}What shall we call you?
              </Text>
              <TextInput
                label="Name"
                dense
                mode="outlined"
                underlineColor={palette.primary}
                placeholderTextColor={palette.primary}
                style={styles.guideTextInput}
                selectionColor={palette.primary}
                fontFamily={PRIMARY.light}
                theme={_theme}
                onChangeText={onChangeText}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default Headlines;
