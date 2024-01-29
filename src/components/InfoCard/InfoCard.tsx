import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../css/InfoCard.style';

const InfoCard = ({text, title}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoCard;
