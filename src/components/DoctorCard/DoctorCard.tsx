import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../css/DoctorCard.style';
const DoctorCard = ({name, hospital, onPress, image}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.text_container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hospital}>{hospital}</Text>
      </View>
      {/* <Button onPress={onPress} text='Randevu al' screen='randevu_al'></Button> */}
    </View>
  );
};

export default DoctorCard;
