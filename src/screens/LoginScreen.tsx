import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import styles from '../css/Login.style';

import React, {useContext, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {AxiosContext} from '../contexts/AxiosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SigninRequest} from '../models/User/signinRequest';
import {Formik} from 'formik';
import Input from '../components/Input/Input';
import TextButton from '../components/TextButton/TextButton';
import Button from '../components/Button/Button';
import {signin} from '../auth/api/signin';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const {publicAxios} = useContext(AxiosContext);
  const initialFormValues = {
    email: '',
    password: '',
  };
  async function handleFormSubmit(formValues: SigninRequest) {
    try {
      // const response = await publicAxios.post('/auth/signin', {
      //   formValues,
      // });
      const response = await signin(formValues);

      const {access_token, refresh_token} = response.tokens;
      const user = response.user;
      console.log('LOGİNa', response);

      authContext?.setAuthState({
        access_token,
        refresh_token,
        authenticated: true,
      });

      await AsyncStorage.setItem('user', JSON.stringify(user));
      // await AsyncStorage.setItem('rule', name);

      await AsyncStorage.setItem(
        'token',
        JSON.stringify({
          access_token,
          refresh_token,
        }),
      );
    } catch (error: any) {
      Alert.alert('Login Failed', error.response.data.message);
    }
  }

  return (
    //
    //   <View style={styles.form}>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Email"
    //       placeholderTextColor="#fefefe"
    //       keyboardType="email-address"
    //       autoCapitalize="none"
    //       onChangeText={text => setEmail(text)}
    //       value={email}
    //     />

    //     <TextInput
    //       style={styles.input}
    //       placeholder="Password"
    //       placeholderTextColor="#fefefe"
    //       secureTextEntry
    //       onChangeText={text => setPassword(text)}
    //       value={password}
    //     />
    //   </View>
    //   <Button title="Login" style={styles.button} onPress={() => onLogin()} />
    // </SafeAreaView>
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
