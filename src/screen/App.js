import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpalshScreen from './splashScreen';
import Home from './home';
import Bmi from './bmi';
import Broca from './broca';

const App = () => {
  const Amar = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Amar.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Amar.Screen name="splashScreen" component={SpalshScreen} />
        <Amar.Screen name="Home" component={Home} />
        <Amar.Screen name="Bmi" component={Bmi} />
        <Amar.Screen name="Broca" component={Broca} />
      </Amar.Navigator>
    </NavigationContainer>
  );
};

export default App;
