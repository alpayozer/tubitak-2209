import React from 'react';
import {SafeAreaView, Image, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import styles from '../css/Sign.style';

//components
import Input from '../components/Input/Input';
import TextButton from '../components/TextButton/TextButton';
import Button from '../components/Button/Button';
const SignScreen = ({navigation}: any) => {
  const initialFormValues = {
    name: '',
    surname: '',
    // identificationNumber: '',
    email: '',
    password: '',
    // repassword: '',
  };

  async function handleFormSubmit(formValues: any) {
    console.log(formValues);
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('surname', formValues.surname);
    formData.append('email', formValues.email);
    formData.append('password', formValues.password);
    try {
      await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
        })
        .catch(err => {
          console.log(err);
        });
      navigation.navigate('LoginPage');
    } catch (error) {
      console.log(error);
    }
  }

  const goToLogin = () => {
    navigation.navigate('LoginPage');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../assets/images/sign-image.png')}
        />
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <View style={styles.input}>
                <Input
                  value={values.name}
                  placeholder="Name"
                  onType={handleChange('name')}
                />
                <Input
                  value={values.surname}
                  placeholder="Surname"
                  onType={handleChange('surname')}
                />
                {/* <Input
                  value={values.identificationNumber}
                  placeholder="TC identification number"
                  onType={handleChange('identificationNumber')}
                /> */}
                <Input
                  value={values.email}
                  placeholder="Email"
                  onType={handleChange('email')}
                />
                <Input
                  value={values.password}
                  placeholder="Password"
                  onType={handleChange('password')}
                />
                <Button text={'Kayıt Ol'} onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
        <TextButton
          text="Zaten üye misin ?"
          buttonText="Oturum Aç"
          onPress={goToLogin}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignScreen;
