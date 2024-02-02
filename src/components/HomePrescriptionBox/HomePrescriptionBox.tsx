import {View, Text} from 'react-native';
import React from 'react';

const HomePrescriptionBox = ({name, hospital, date, image, time}: any) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{hospital}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
    </View>
  );
};

export default HomePrescriptionBox;
