import {StyleSheet} from 'react-native';
import palette from 'styles/palette';
import {PRIMARY} from 'styles/typography';
import {height, width} from '../../../styles/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: palette.white,
    paddingTop: 40,
  },
  gradientContainer: {flex: 1},
  lottieContainer: {
    backgroundColor: palette.white,
    top: 0,
    height: height(40),
    width: width(100),
  },
  subContainer: {
    padding: 20,
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
});

export default styles;
