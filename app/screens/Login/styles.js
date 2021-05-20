import {Dimensions, StyleSheet} from 'react-native';
import palette from '../../styles/palette';
import PRIMARY from '../../styles/typography';

const {width, height} = Dimensions.get('window');
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

  countdownText: {
    fontFamily: PRIMARY.black,
    fontSize: 25,
  },

  backgroundImage: {
    width,
    height,
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
