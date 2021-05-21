import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Introduction from './Introduction';
import Headlines from './Headlines';
import Complete from './Complete';
import styles from './styles';
import palette from '../../styles/palette';
import Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from 'react-redux';
import {doSkipName} from 'store/actions/onBoardingActions';

const SwiperItem = ({children}) => (
  <View style={styles.swiperItemContainer}>{children}</View>
);

const OnBoarding = () => {
  const swiperRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [proceed, setProceed] = useState(true);
  const {name} = useSelector(state => state.boardingReducer);
  const dispatch = useDispatch();
  const onContinuePress = () => {
    if (proceed) {
      if (currentPage === 1 && !name) {
        dispatch(doSkipName());
        return;
      }
      if (currentPage >= 1) {
        setProceed(false);
      }
      swiperRef.current?.scrollBy(1);
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage <= 1) {
        setProceed(true);
      }
      swiperRef.current?.scrollBy(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        showsPagination
        scrollEnabled={false}
        loop={false}
        paginationStyle={styles.swiperPaginationStyle}
        dotStyle={styles.swiperDotStyle}
        activeDotStyle={styles.swiperActiveDotStyles}>
        <SwiperItem>
          <Introduction />
        </SwiperItem>
        <Headlines />
        <SwiperItem>
          <Complete />
        </SwiperItem>
      </Swiper>
      <TouchableOpacity
        mode="contained"
        color={palette.primary}
        onPress={onContinuePress}
        style={styles.continueButton}>
        <Text style={styles.continueButtonText}>
          {proceed ? 'To Infinity 🏁 >' : '< & Beyond 🛳'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
