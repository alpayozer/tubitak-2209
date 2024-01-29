import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../css/AppointmentCard.style';
const AppointmentCard = ({name, date, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/doctor1.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>En erken randevu tarihi:</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;
