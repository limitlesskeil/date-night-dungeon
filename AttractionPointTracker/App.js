import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CalculatorScreen from './calculator';
//import LogScreen from './LogScreen';
import appStyles from './appStyles';
import Notes from './notes';
import { attraction } from './calculator';
import dnd from './assets/dnd.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>Attraction Level</Text>
      <Image source={dnd} style={appStyles.image} />
    </View>
  );
};

//removed <Tab.Screen name="Log" component={LogScreen} /> while working on logging

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="calculator" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notes"
          component={Notes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="sticky-note" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;