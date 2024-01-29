import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from '../../css/ProfileImage.style';

const ProfileImage = () => {
  return (
    <View>
      <View>
        <View style={styles.description}>
          <View style={styles.inner_description}>
            <Text style={styles.description_title}>Title</Text>
            <Text style={styles.description_subtitle}>Subtitle</Text>
            <Image
              style={styles.description_icon}
              source={require('../../assets/images/monster.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={require('../../assets/images/profileImage.png')}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.text}>Username</Text>
    </View>
  );
};

export default ProfileImage;
