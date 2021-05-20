import React, {useState} from 'react';
import {Platform, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import format from 'date-fns/format';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {doChangeBirthdate} from 'store/actions/onBoardingActions';

const Complete = () => {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.boardingReducer);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    dispatch(doChangeBirthdate(currentDate));
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.bigTitle}>
            Aloha,{'\n'}
            <Text style={styles.nameText}>{name}</Text>
          </Text>
          <Text style={styles.bigTitle}>👋</Text>
        </View>
        <Text style={styles.motivationTitle}>We are here for you!</Text>
        <View style={styles.smallTitleContainer}>
          <Text style={styles.smallTitle}>
            We will assist through your thing and get your stats and data placed
            in a single bank right here on your phone.
          </Text>
        </View>
        <View style={styles.guideContainer}>
          <Text style={styles.guideText}>
            Let's get started with some simple data entry.{'\n'}What is your
            birthdate?
          </Text>
        </View>
        <TouchableOpacity style={styles.dateContainer} onPress={showMode}>
          <Text style={styles.dateText}>{format(date, 'io MMMM, yyyy')}</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Complete;
