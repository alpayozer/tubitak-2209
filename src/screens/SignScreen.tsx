import React from 'react';
import {SafeAreaView, Image, View, ScrollView} from 'react-native';
import {Formik} from 'formik';

import styles from '../css/Sign.style';

//components
import Input from '../components/Input/Input';
import TextButton from '../components/TextButton/TextButton';
import Button from '../components/Button/Button';
import {signup} from '../auth/api/signup';
import {useAuth} from '../lib/hooks/useAuth';
import {SignupRequest} from '../models/User/signupRequest';

const SignScreen = ({navigation}: any) => {
  const {setAuthenticatedUser} = useAuth();

  const initialFormValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
    //role gelicek
  };

  async function handleFormSubmit(formValues: SignupRequest) {
    console.log(formValues);

    try {
      const data = await signup(formValues);
      setAuthenticatedUser(data.user);
      navigation.navigate('LoginPage');
    } catch (error) {
      console.log(error);
    }
  }

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
          onPress={() => navigation.navigate('LoginPage')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignScreen;
