import {StyleSheet} from 'react-native';
import palette from 'styles/palette';
import {PRIMARY} from 'styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.lightPrimary,
    padding: 20,
  },
  bigTitle: {
    fontFamily: PRIMARY.thin,
    color: palette.grey,
    fontSize: 45,
    lineHeight: 45,
  },
  smallTitle: {
    fontFamily: PRIMARY.regular,
    color: palette.grey,
    fontSize: 17,
  },
});

export default styles;
