import React from 'react';
import {SafeAreaView, Text, Image, View, ScrollView} from 'react-native';
import {Formik} from 'formik';

import styles from '../css/Login.style';

//components
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextButton from '../components/TextButton/TextButton';
import {signin} from '../auth/api/signin';
import {useAuth} from '../lib/hooks/useAuth';
import {SigninRequest} from '../models/User/signinRequest';

const LoginScreen = ({navigation}: any) => {
  const {setAuthenticatedUser} = useAuth();

  const initialFormValues = {
    email: '',
    password: '',
  };

  async function handleFormSubmit(formValues: SigninRequest) {
    console.log(formValues);

    try {
      const data = await signin(formValues);
      setAuthenticatedUser(data.user);

      navigation.navigate('TabPage');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../assets/images/login-page.png')}
        />
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <View style={styles.input}>
                <Input
                  onType={handleChange('email')}
                  value={values.email}
                  placeholder="Email"
                />
                <Input
                  onType={handleChange('password')}
                  value={values.password}
                  placeholder="Password"
                  isSecure={true}
                />
              </View>
              <Button text={'Giriş Yap'} onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <TextButton
          onPress={() => navigation.navigate('SignPage')}
          text="Henüz hesabın yok mu?"
          buttonText="Kayıt Ol"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
