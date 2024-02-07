import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from '../css/Prescription.style';
import PrescriptionButton from '../components/PrescriptionButton/PrescriptionButton';
import PrescriptionBox from '../components/PrescriptionBox/PrescriptionBox';

const PrescriptionScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/monster4.png')}
        />
        <View style={styles.inner_container}>
          <Text style={styles.title}>Lorem ipsum dolor sit amet,</Text>
          <Text style={styles.inner_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio
          </Text>
        </View>
        <View style={styles.button_view}>
          <PrescriptionButton text="Mevcut Reçeteler" />
          <PrescriptionButton text="Geçmiş Reçeteler" />
        </View>
        <View style={styles.list_view}>
          <PrescriptionBox
            onPress={() => navigation.navigate('PrescriptionDetailScreen')}
          />
          <PrescriptionBox />
          <PrescriptionBox />
          <PrescriptionBox />
        </View>
      </View>
    </ScrollView>
  );
};

export default PrescriptionScreen;
