import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Player1 from './P1';
import Player2 from './P2';
import Result from './Result';

export default function App() {

  const [page, setPage] = useState('page1'); //useState for shuffling page
  const [choice1, setChoice1] = useState<string|undefined>(); //player1's choice owned by main file
  const [choice2, setChoice2] = useState<string|undefined>(); //player2's choice owned by main file

  return (
    <View style={styles.container}>
      {/* Pages Content */}
        {page === 'page1' && <Player1 choice1={choice1} setChoice1={setChoice1} onChoose={() => setPage('page2')} />}
        {page === 'page2' && <Player2 choice2={choice2} setChoice2={setChoice2} onChoose={() => setPage('page3')}/>}
        {page === 'page3' && <Result choice1={choice1} choice2={choice2}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,

    height: 70,

    flexDirection: 'row',

    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
  menuButton: {
    flex: 1,
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    borderLeftWidth: 1,
    borderLeftColor: '#000',

    backgroundColor: '#207820',
  },
  menuItem: {
    fontSize: 20,
    color: '#fff',
  },
});
