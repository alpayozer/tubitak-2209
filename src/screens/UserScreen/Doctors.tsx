import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from '../../css/Doctors.style';
import data from '../../assets/data/doctor.json';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import {getAllDoctor} from '../../doctor/api/getAll';
import {PaginationDto} from '../../shared/pagination/pagination.dto';
import {Doctor} from '../../models/User/doctor';

const Doctors = ({navigation}: any) => {
  const [data, setData] = useState<PaginationDto<Doctor>>();
  const doctors = async () => {
    const doctor = await getAllDoctor();
    setData(doctor);
    // console.log(data.items[0].user, 'data');
    console.log(data, 'dataaaaaaaaaa');
  };

  useEffect(() => {
    doctors();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header_card}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/monster2.png')}
          />
          <Text style={styles.header_card_title}>
            Lorem ipsum dolor sit amet,
          </Text>
          <Text style={styles.header_card_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio
          </Text>
        </View>
        <View style={styles.dropdown}>
          <Text>İl</Text>
          <Text>İlçe</Text>
          <Text>Hastane</Text>
        </View>
        <View style={styles.doctorCard}>
          {/* {data.items.map(doctor => {
            return (
              <DoctorCard
                onPress={() =>
                  navigation.navigate('DoctorDetailScreen', doctor)
                }
                key={doctor.id}
                name={doctor.name + ' ' + doctor.surname}
                hospital={doctor.hospital}
                image={doctor.image}
              />
            );
          })} */}
          {data ? <Text>datavar</Text> : <Text>Yükleniyor</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

export default Doctors;
