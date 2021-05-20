import {StyleSheet} from 'react-native';
import palette from 'styles/palette';
import {PRIMARY} from 'styles/typography';
import {height, width} from '../../../styles/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  gradientContainer: {
    flex: 1,
    height: height(90),
  },
  lottieContainer: {
    backgroundColor: palette.white,
    height: height(40),
    width: width(100),
  },
  subContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  bigTitle: {
    fontFamily: PRIMARY.thin,
    color: palette.grey,
    fontSize: 45,
    lineHeight: 50,
  },
  smallTitle: {
    fontFamily: PRIMARY.regular,
    color: palette.grey,
    fontSize: 17,
  },
  guideContainer: {
    marginVertical: 10,
    justifyContent: 'center',
  },
  guideText: {
    fontFamily: PRIMARY.semibold,
    color: palette.grey,
    fontSize: 17,
  },
  guideTextInput: {
    backgroundColor: palette.white,
    borderWidth: 0,
    fontFamily: PRIMARY.semibold,
    color: palette.grey,
    fontSize: 17,
  },
});

export default styles;
