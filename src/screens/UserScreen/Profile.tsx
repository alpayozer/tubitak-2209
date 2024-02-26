import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import InfoCard from '../../components/InfoCard/InfoCard';
import ExercisesCard from '../../components/ExercisesCard/ExercisesCard';
import styles from '../../css/Profile.style';
import userData from '../../assets/data/user.json';
import ProfileImage from '../../components/ProfileImage/ProfileImage';

const Profile = ({navigation}: any) => {
  const user = userData[0];
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileImage />
        <View style={styles.profile_edit}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProfileEditScreen')}>
            <Image
              style={styles.text_icon}
              source={require('../../assets/images/monster.png')}
            />
            <Text style={styles.text}>Profili düzenle</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoCard}>
          <InfoCard title="Yaş" text={user.age} />
          <InfoCard title="Boy" text={user.height} />
          <InfoCard title="Kilo" text={user.weight} />
        </View>
        <View style={styles.daily_exercises}>
          <Image
            style={styles.daily_icon}
            source={require('../../assets/images/morning-routine.png')}
          />
          <Text style={styles.exercisesCard_text}>Daily Exercises</Text>
        </View>

        <View style={styles.exercisesCard}>
          <ExercisesCard color="orange" text="Kol Hareketleri" />
          <ExercisesCard text="Kol Hareketleri" />
          <ExercisesCard color="orange" text="Kol Hareketleri" />
          <ExercisesCard text="Kol Hareketleri" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
