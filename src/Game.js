import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import Store, {Context} from './ContextStore';

const styles = StyleSheet.create({
  SecondMainHome: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
  },
  Game: {
    flex: 1,
    justifyContent: 'space-between',
  },
  GameName: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  GameText: {
    fontSize: 16,
    fontWeight: '500',
  },
  GameButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#FFF000',
  },
  WinView: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  WinText: {
    fontSize: 16,
  },
  WinTextValue: {
    fontSize: 50,
  },
});

export default function GameWrapper() {
  return (
    <Store>
      <Game />
    </Store>
  );
}

const Game = () => {
  const {Playerstate, Playerdispatch} = useContext(Context);
  function GameDispatch(data) {
    Playerdispatch({type: 'Pingpong', payload: data});
  }
  return (
    <View style={styles.SecondMainHome}>
      <StatusBar barStyle="default" />
      <View style={styles.Game}>
        <View style={styles.GameName}>
          <View>
            <Text style={styles.GameText}>{Playerstate.PlayerName1}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.GameButton}
              onPress={() => {
                GameDispatch({Player1wongame: Playerstate.Player1wongame + 1});
              }}>
              <Text>Add Win</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Win Value is Display Here */}
        <View style={styles.WinView}>
          <View>
            <Text style={styles.WinText}>Wins:</Text>
          </View>
          <View>
            <Text style={styles.WinTextValue}>
              {Playerstate.Player1wongame}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Game}>
        <View style={styles.GameName}>
          <View>
            <Text style={styles.GameText}>{Playerstate.PlayerName2}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.GameButton}
              onPress={() => {
                GameDispatch({Player2wongame: Playerstate.Player2wongame + 1});
              }}>
              <Text>Add Win</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Win Value is Display Here */}
        <View style={styles.WinView}>
          <View>
            <Text style={styles.WinText}>Wins:</Text>
          </View>
          <View>
            <Text style={styles.WinTextValue}>
              {Playerstate.Player2wongame}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
