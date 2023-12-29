import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from '../../css/PrescriptionBox.style';
import PrescriptionButton from '../PrescriptionButton/PrescriptionButton';

const PrescriptionBox = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/prescription.png')}
        />
        <View style={styles.inner_container}>
          <Text style={styles.text_name}>Ayşe Yıldırım</Text>
          <Text style={styles.text_hospital}>Çorlu Devlet Hastanesi</Text>
          <Text style={styles.text_date}>Veriliş Tarihi : 29.09.2022</Text>
        </View>
        <View style={styles.button_container}>
          <PrescriptionButton text="Reçete Detay" />
        </View>
      </View>
    </ScrollView>
  );
};

export default PrescriptionBox;
