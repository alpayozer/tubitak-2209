import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import styles from '../../css/Button.style';

const Button = ({text, onPress, screen = 'login'}: any) => {
  return (
    <SafeAreaView style={styles[screen as keyof typeof styles].container}>
      <TouchableOpacity
        style={styles[screen as keyof typeof styles].inner_container}
        onPress={onPress}>
        <View style={styles[screen as keyof typeof styles].button_container}>
          <Text style={styles[screen as keyof typeof styles].title}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Button;
