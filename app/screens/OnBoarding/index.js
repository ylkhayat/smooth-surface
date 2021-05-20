import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Introduction from './Introduction';
import styles from './styles';
import palette from '../../styles/palette';
import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import {height} from '../../styles/mixins';

const SwiperItem = ({children}) => (
  <View style={styles.swiperItemContainer}>{children}</View>
);

const OnBoarding = () => {
  const id = useSelector(state => state.loginReducer.id);
  const swiperRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [proceed, setProceed] = useState(true);

  const onContinuePress = () => {
    if (proceed) {
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
        paginationStyle={{bottom: undefined, top: height(5)}}
        dotStyle={{backgroundColor: palette.slightlyDarkPrimary}}
        activeDotStyle={{backgroundColor: palette.orange}}>
        <SwiperItem>
          <Introduction />
        </SwiperItem>
        <SwiperItem>
          <Introduction />
        </SwiperItem>
        <SwiperItem>
          <Introduction />
        </SwiperItem>
      </Swiper>
      <Button
        mode="contained"
        color={palette.primary}
        onPress={onContinuePress}
        style={styles.continueButton}>
        <Text style={styles.continueButtonText}>
          {proceed ? 'To Infinity 🏁' : 'And Beyond 🛳'}
        </Text>
      </Button>
    </View>
  );
};

export default OnBoarding;
