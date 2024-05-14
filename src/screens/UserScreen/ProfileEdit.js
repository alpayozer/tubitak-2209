import React, {useContext} from 'react';
import {View, Alert} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../css/ProfileEdit.style';

//components
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ProfileEditImage from '../../components/ProfilEditImage/ProfilEditImage';
import {AuthContext} from '../../contexts/AuthContext';

const ProfieEdit = ({navigation}) => {
  const initialFormValues = {
    name: 'deneme',
    surname: '',
    identificationNumber: '',
    email: '',
    password: '',
    age: '',
    height: '',
    weight: '',
  };
  const authContext = useContext(AuthContext);

  async function signOut() {
    try {
      Alert.alert('Oturumu Kapat', 'Oturumunuzu kapatmak istiyor musunuz ?', [
        {
          text: 'Hayır',
          onPress: () => console.log('Hayır'),
        },
        {
          text: 'Evet',
          onPress: async () => {
            await authContext.logout();
            console.log('Evet');
            // navigation.navigate('LoginPage');
          },
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleFormSave(formValues) {
    try {
      console.log(formValues);
    } catch (e) {
      console.log(e);
    }
  }

  const back = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Icon
        onPress={signOut}
        style={styles.icon_logout}
        name="logout"
        size={30}
        color="black"
      />
      <Icon
        onPress={back}
        style={styles.icon_back}
        name="arrow-left"
        size={30}
        color="black"
      />

      <ProfileEditImage />
      <Formik initialValues={initialFormValues} onSubmit={handleFormSave}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={styles.input_container}>
              <Input
                onType={handleChange('name')}
                value={values.name}
                placeholder="Name"
              />
              <Input
                onType={handleChange('surname')}
                value={values.surname}
                placeholder="Surname"
              />
              <Input
                onType={handleChange('identificationNumber')}
                value={values.identificationNumber}
                placeholder="identificationNumber"
              />
              <Input
                onType={handleChange('email')}
                value={values.email}
                placeholder="email"
              />
              <Input
                onType={handleChange('password')}
                value={values.password}
                placeholder="password"
              />
              <View style={styles.input_group}>
                <Input
                  onType={handleChange('age')}
                  value={values.age}
                  placeholder="age"
                />
                <Input
                  onType={handleChange('height')}
                  value={values.height}
                  placeholder="height"
                />
                <Input
                  onType={handleChange('weight')}
                  value={values.weight}
                  placeholder="weight"
                />
              </View>

              <Button onPress={handleSubmit} text="Save" />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ProfieEdit;
