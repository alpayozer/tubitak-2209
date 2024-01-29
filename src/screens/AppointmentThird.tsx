import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../css/AppointmentThird.style';
import AppointmentCard from '../components/AppointmentCard/AppointmentCard';

const AppointmentThird = ({route}: any) => {
  const appointmentData: any = route.params;
  console.log(appointmentData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio
        </Text>
        <Image
          style={styles.image}
          source={require('../assets/images/monster3.png')}
        />
      </View>
      <View style={styles.card}>
        <AppointmentCard
          name={appointmentData.name}
          date={appointmentData.date}
        />
      </View>
      <View>
        <Text>{appointmentData.name} doktorunun takvimi</Text>
      </View>
    </View>
  );
};

export default AppointmentThird;
