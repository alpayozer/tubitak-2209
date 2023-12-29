import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import styles from '../../css/PrescriptionButton.style';

const PrescriptionButton = ({text, onPress}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.inner_container} onPress={onPress}>
        <View style={styles.button_container}>
          <Text style={styles.title}>{text}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PrescriptionButton;
