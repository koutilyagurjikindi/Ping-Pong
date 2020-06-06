import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {Context} from './Store';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
  },
  ScrollView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  Player: {
    margin: 20,
  },
  PlayerText: {
    color: '#0a0a0a',
    fontSize: 20,
    marginTop: 10,
  },
  PlayerTextInput: {
    marginTop: 10,
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  Button: {
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF000',
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Home = ({navigation}) => {
  const {Playerstate, Playerdispatch} = useContext(Context);
  function HomeDispatch(data) {
    Playerdispatch({type: 'Pingpong', payload: data});
  }
  return (
    <View style={styles.MainView}>
      <StatusBar barStyle={'default'} />
      <ScrollView
        style={styles.ScrollView}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none">
        <View style={styles.Player}>
          <Text style={styles.PlayerText}>Player 1 Name</Text>
          <TextInput
            style={styles.PlayerTextInput}
            value={Playerstate.PlayerName1}
            onChangeText={(value) => {
              HomeDispatch({PlayerName1: value});
            }}
          />
        </View>
        <View style={styles.Player}>
          <Text style={styles.PlayerText}>Player 2 Name</Text>
          <TextInput
            style={styles.PlayerTextInput}
            value={Playerstate.PlayerName2}
            onChangeText={(value) => {
              HomeDispatch({PlayerName2: value});
            }}
          />
        </View>

        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.ButtonText}
            onPress={() => navigation.navigate('Game')}>
            Continue
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
