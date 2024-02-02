import React from 'react';
import {Image, Text, View} from 'react-native';
import userData from '../assets/data/user.json';
import styles from '../css/Home.style';
import HomePrescriptionBox from '../components/HomePrescriptionBox/HomePrescriptionBox';
import prescriptionData from '../assets/data/prescription.json';

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
      <View>
        <Text>Takvim</Text>
      </View>
      <View>
        <Text>Randevularım</Text>
        <View>
          {prescriptionData.map(item => (
            <HomePrescriptionBox
              key={item.id}
              name={item.doctor_name}
              hospital={item.doctor_hospital}
              date={item.prescription_date}
              time={item.prescription_hour}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
