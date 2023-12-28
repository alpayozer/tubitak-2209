import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from '../../css/Input.style';

const Input = ({placeholder, value, onType, isSecure}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
