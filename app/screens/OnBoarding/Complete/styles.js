import {StyleSheet} from 'react-native';
import palette from 'styles/palette';
import {PRIMARY} from 'styles/typography';
import {height} from '../../../styles/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.lightPrimary,
    padding: 20,
  },
  subContainer: {
    flex: 1,
  },
  nameText: {
    fontFamily: PRIMARY.bold,
    color: palette.grey,
    fontSize: 45,
  },
  bigTitle: {
    fontFamily: PRIMARY.thin,
    color: palette.grey,
    fontSize: 45,
    lineHeight: 55,
  },
  motivationTitle: {
    fontFamily: PRIMARY.semibold,
    color: palette.grey,
    fontSize: 30,
    lineHeight: 40,
  },
  smallTitleContainer: {
    marginVertical: 20,
  },
  smallTitle: {
    fontFamily: PRIMARY.regular,
    color: palette.grey,
    fontSize: 17,
  },
  guideContainer: {width: '75%'},
  guideText: {
    fontFamily: PRIMARY.semibold,
    color: palette.grey,
    fontSize: 17,
  },
});

export default styles;
