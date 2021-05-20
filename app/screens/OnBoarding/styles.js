import {StyleSheet} from 'react-native';
import {height, width} from '../../styles/mixins';
import palette from '../../styles/palette';
import PRIMARY from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightPrimary,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bigTitle: {
    fontFamily: PRIMARY.black,
    color: palette.darkPrimary,
    fontSize: 40,
  },
  smallTitle: {
    fontFamily: PRIMARY.light,
    color: palette.grey,

    fontSize: 17,
  },
  slide: {
    backgroundColor: palette.white,
  },
  backgroundImage: {
    width: width(),
    height: height(),
  },
  countdownText: {
    fontFamily: PRIMARY.black,
    fontSize: 25,
  },
});

export default styles;
