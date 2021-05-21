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

const carouselStyles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  carouselContentContainer: {
    marginHorizontal: 0,
  },
  itemIconContainer: {
    height: '25%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  itemIcon: {
    backgroundColor: palette.primary,
    height: height(10),
    width: height(10),
    borderRadius: height(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitleContainer: {
    marginVertical: 10,
  },
  itemTitle: {
    fontFamily: PRIMARY.bold,
    color: palette.grey,
    fontSize: 30,
    lineHeight: 35,
  },
  itemGuide: {
    fontFamily: PRIMARY.regular,
    color: palette.grey,

    fontSize: 15,
    lineHeight: 20,
  },

  indicatorContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderWidth: 0,
    borderColor: palette.grey,
    borderRadius: 15,
    overflow: 'hidden',
  },
  indicatorContentContainer: {
    backgroundColor: palette.grey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  slideMainContainer: {
    // TODO
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    // elevation: 6,
  },
  slideContainer: {
    backgroundColor: palette.white,
    height: '100%',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },
  slideContentContainer: {
    flex: 1,
    width: '85%',
  },
});

export {carouselStyles};
export default styles;
