import React from 'react';
import {Image, Text, View} from 'react-native';
import userData from '../assets/data/user.json';
import styles from '../css/Home.style';
import HomeAppointmentBox from '../components/HomeAppointmentBox/HomeAppointmentBox';
import prescriptionData from '../assets/data/appointment.json';

const HomeScreen = () => {
  const user = userData[0];

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.welcome}>Welcome {user.name}</Text>
        <Text style={styles.prescription}>Bugün randevun yok</Text>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: user.image}} />
        </View>
      </View>
      <View style={styles.calendar_box}>
        <Image
          source={require('../assets/images/calendar.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Takvim</Text>
      </View>
      <View>
        <View style={styles.appointment_box}>
          <Image
            source={require('../assets/images/appointment.png')}
            style={styles.icon}
          />
          <Text style={styles.title}>Randevularım</Text>
        </View>
        <View style={styles.appointment_list}>
          {prescriptionData.map(item => (
            <HomeAppointmentBox
              key={item.id}
              name={item.doctor_name}
              hospital={item.doctor_hospital}
              date={item.prescription_date}
              time={item.prescription_hour}
              image={item.doctor_image}
              disable={item.disable}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
