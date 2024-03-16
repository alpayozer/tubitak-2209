import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import userData from '../../assets/data/user.json';
import styles from '../../css/Home.style';
import HomeAppointmentBox from '../../components/HomeAppointmentBox/HomeAppointmentBox';
import prescriptionData from '../../assets/data/appointment.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const user = userData[0];
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const at = await AsyncStorage.getItem('accessToken');
        setAccessToken(at);
        console.log(at);
      } catch (e) {}
    };

    getData();
  }, []);
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
          source={require('../../assets/images/calendar.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Takvim</Text>
        <Text>{accessToken}</Text>
      </View>
      <View>
        <View style={styles.appointment_box}>
          <Image
            source={require('../../assets/images/appointment.png')}
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
