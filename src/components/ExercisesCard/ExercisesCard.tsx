import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../css/ExercisesCard.style';

const ExercisesCard = ({text, onPress, color = 'blue'}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles[color as keyof typeof styles].container}>
        <Text style={styles[color as keyof typeof styles].text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExercisesCard;
