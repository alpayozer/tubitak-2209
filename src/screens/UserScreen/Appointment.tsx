import {ScrollView, View, Image, Text} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';
import styles from '../../css/Appointment.style';
import DropdownComponent from '../../components/Dropdown/Dropdown';

const Appointment = ({navigation}: any) => {
  function goToSecond() {
    navigation.navigate('AppointmentSecondScreen');
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/randevu_header.png')}
          />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio
          </Text>
          <Image
            style={styles.icon}
            source={require('../../assets/images/monster3.png')}
          />
        </View>
        <DropdownComponent />

        <View style={styles.dropdown}>
          <Text>İl</Text>
          <Text>İlçe</Text>
          <Text>Hastane</Text>
          <Text>Doktor</Text>
          <Text>Tarih</Text>
          <Text>Saat</Text>
        </View>
        <Button onPress={goToSecond} text="Ara" />
      </View>
    </ScrollView>
  );
};

export default Appointment;
