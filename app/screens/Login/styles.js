import {StyleSheet} from 'react-native';
import {height, width} from 'styles/mixins';
import palette from 'styles/palette';
import {PRIMARY} from 'styles/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightPrimary,
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 20,
  },
  lottieContainer: {
    left: width(50),
    bottom: height(40),
    transform: [{rotateY: '-180deg'}],
  },
  bigTitle: {
    fontFamily: PRIMARY.black,
    color: palette.darkPrimary,
    fontSize: 70,
    lineHeight: 75,
  },
  smallTitle: {
    fontFamily: PRIMARY.light,
    color: palette.grey,
    fontSize: 20,
  },
  countdownContainer: {alignItems: 'center'},
  countdownText: {
    fontFamily: PRIMARY.regular,
    fontSize: 25,
  },

  backgroundImage: {
    width: width(),
    height: height(),
  },
  foregroundTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  foregroundText: {
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 0.41,
    color: 'white',
  },
});

export default styles;
