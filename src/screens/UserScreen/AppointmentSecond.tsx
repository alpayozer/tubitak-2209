import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import styles from '../../css/AppointmentSecond.style';

const data = [
  {
    id: '1',
    name: 'Ayşe Yıldırım',
    date: '28 Eylül Çarşamba',
  },
  {
    id: '2',
    name: 'Pınar İnemek',
    date: '29 Eylül Çarşamba',
  },
  {
    id: '3',
    name: 'Alpay Özer',
    date: '25 Eylül Çarşamba',
  },
];

const AppointmentSecond = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/images/monster3.png')}
        />
      </View>
      <View style={styles.card}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <AppointmentCard
              onPress={() =>
                navigation.navigate('AppointmentThirdScreen', item)
              }
              name={item.name}
              date={item.date}
            />
          )}
          keyExtractor={item => item.id}
        />
        {/* <AppointmentCard
          onPress={goToNext}
          name="Ayşe Yıldırım"
          date="28 Eylül Çarşamba"
        />
        <AppointmentCard
          onPress={goToNext}
          name="Ayşe Yıldırım"
          date="28 Eylül Çarşamba"
        />
        <AppointmentCard
          onPress={goToNext}
          name="Ayşe Yıldırım"
          date="28 Eylül Çarşamba"
        />
        <AppointmentCard
          onPress={goToNext}
          name="Ayşe Yıldırım"
          date="28 Eylül Çarşamba"
        /> */}
      </View>
    </View>
  );
};

export default AppointmentSecond;
