import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../css/HomeAppointmentBox.style';

const HomeAppointmentBox = ({
  name,
  hospital,
  date,
  image,
  time,
  disable,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.inner_container}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hospital}>{hospital}</Text>
      </View>
      <View>
        <TouchableOpacity
          disabled={disable}
          style={[
            styles.button_container,
            disable && {backgroundColor: '#F1F1F1'},
          ]}>
          <Text style={[styles.button, disable && {color: '#A1A0A0'}]}>
            Aramaya katıl
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeAppointmentBox;
