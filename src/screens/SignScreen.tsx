import React from 'react';
import {SafeAreaView, Image, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import styles from '../css/Sign.style';

//components
import Input from '../components/Input/Input';
import TextButton from '../components/TextButton/TextButton';
import Button from '../components/Button/Button';
import {signup} from '../auth/api/signup';
import {useAuth} from '../lib/hooks/useAuth';
const SignScreen = ({navigation}: any) => {
  const {setAuthenticatedUser} = useAuth();

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

    try {
      const data = await signup(formValues);
      setAuthenticatedUser(data.user);
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
