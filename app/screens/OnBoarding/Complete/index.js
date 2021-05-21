import React, {useState} from 'react';
import {Platform, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import format from 'date-fns/format';
import {doChangeBirthdate} from 'store/actions/onBoardingActions';

const Complete = () => {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.boardingReducer);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (_, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    dispatch(doChangeBirthdate(currentDate));
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };
  console.log(date);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.greetingsContainer}>
            <View style={styles.greetingsSubContainer}>
              <Text style={styles.bigTitle}>Aloha,</Text>
              <Text style={styles.bigTitle}>👋</Text>
            </View>
            <Text style={styles.nameText}>{name}</Text>
          </View>
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

        {Platform.OS === 'ios' ? (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
            style={styles.iOSDateContainer}
          />
        ) : (
          <TouchableOpacity style={styles.dateContainer} onPress={showMode}>
            <Text style={styles.dateText}>{format(date, 'dd MMMM, yyyy')}</Text>
          </TouchableOpacity>
        )}
      </View>
      {Platform.OS === 'android' && show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()}
          style={styles.dateText}
        />
      )}
    </View>
  );
};

export default Complete;
