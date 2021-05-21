import {StyleSheet} from 'react-native';
import {height, width} from '../../styles/mixins';
import palette from '../../styles/palette';
import {PRIMARY} from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.lightPrimary,
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: 20,
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
  continueButton: {
    width: '90%',
    marginBottom: 20,
    backgroundColor: palette.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  continueButtonText: {
    fontFamily: PRIMARY.semibold,
    color: palette.grey,
    fontSize: 17,
  },
  swiperItemContainer: {
    flex: 1,
    marginTop: height(10),
  },
});

export default styles;
