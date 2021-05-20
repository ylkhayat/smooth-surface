import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const Complete = () => {
  const {name} = useSelector(state => state.boardingReducer);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.bigTitle}>
          Aloha, <Text style={styles.nameText}>{name}</Text> 👋
        </Text>
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
      </View>
    </View>
  );
};

export default Complete;
