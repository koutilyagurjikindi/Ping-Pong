import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import Game from './src/Game';
import {PlayerStore, InitialState, Context} from './src/Store';

const Stack = createStackNavigator();

const App = () => {
  const [Playerstate, Playerdispatch] = React.useReducer(
    PlayerStore,
    InitialState,
  );
  return (
    <Context.Provider
      value={{
        Playerstate,
        Playerdispatch,
      }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={Home}
          />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
