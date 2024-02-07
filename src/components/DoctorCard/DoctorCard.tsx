import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../css/DoctorCard.style';
import Button from '../Button/Button';

const DoctorCard = ({name, hospital, onPress, image}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.text_container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hospital}>{hospital}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;
