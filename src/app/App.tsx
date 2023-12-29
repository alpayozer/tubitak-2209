import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Login from '../screens/LoginScreen';
import PrescriptionScreen from '../screens/PrescriptionScrenn';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <PrescriptionScreen />
    </SafeAreaView>
  );
}

export default App;
