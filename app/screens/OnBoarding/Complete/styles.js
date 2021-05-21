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
    lineHeight: 55,
    flexWrap: 'wrap',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bigTitle: {
    fontFamily: PRIMARY.thin,
    color: palette.grey,
    fontSize: 40,
  },
  motivationTitle: {
    fontFamily: PRIMARY.thin,
    color: palette.grey,
    fontSize: 25,
    marginBottom: 20,
  },
  smallTitleContainer: {
    marginVertical: 10,
  },
  smallTitle: {
    fontFamily: PRIMARY.regular,
    color: palette.grey,
    fontSize: 17,
  },
  guideContainer: {
    width: '75%',
    marginTop: 40,
  },
  guideText: {
    fontFamily: PRIMARY.semibold,
    color: palette.grey,
    fontSize: 17,
  },
  dateContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  iOSDateContainer: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: PRIMARY.thin,
    color: palette.grey,
    fontSize: 30,
  },
  greetingsContainer: {flex: 1},
  greetingsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
