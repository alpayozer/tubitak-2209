import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../../css/TextButton.style';

const TextButton = ({text, buttonText, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.inner_container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.button_text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;
