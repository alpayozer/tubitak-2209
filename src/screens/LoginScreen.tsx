import React from 'react';
import {SafeAreaView, Text, Image, View, ScrollView} from 'react-native';
import styles from '../css/Login.style';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextButton from '../components/TextButton/TextButton';

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={require('../assets/login-page.png')}
        />
        <>
          <View style={styles.input}>
            <Input
              //onType={handleChange("email")}
              //value={values.email}
              placeholder="Email"
            />
            <Input
              //onType={handleChange("password")}
              //value={values.password}
              placeholder="Password"
              isSecure={true}
            />
          </View>
          <Button
            text={'Giriş Yap'}
            //onPress={handleSubmit}
          />
          <TextButton text="Henüz hesabın yok mu?" buttonText="Kayıt Ol" />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
