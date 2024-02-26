import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../css/DoctorDetail.style';

const DoctorDetail = ({route}: any) => {
  const doctorData = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        <Text>Takvim</Text>
      </View>
      <View style={styles.name_container}>
        <Image source={{uri: doctorData.image}} style={styles.image} />
        <Text style={styles.name}>
          {doctorData.name} {doctorData.surname}
        </Text>
        <Text style={styles.hospital}>{doctorData.hospital}</Text>
      </View>
      <View style={styles.about_container}>
        <Text style={styles.about_title}>Hakkında</Text>
        <Text style={styles.about}>{doctorData.about}</Text>
        <Image
          style={styles.monster}
          source={require('../../assets/images/monster5.png')}
        />
      </View>
    </View>
  );
};

export default DoctorDetail;
