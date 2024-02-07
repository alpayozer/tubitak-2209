import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../css/ProfilEditImage.style';

const ProfileEditImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profileImage.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Username</Text>
    </View>
  );
};

export default ProfileEditImage;
