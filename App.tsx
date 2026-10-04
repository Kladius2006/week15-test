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
  const [winner, setWinner] = useState<string|undefined>(); //winner for result page

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {page === 'page1' && <Player1 choice1={choice1} setChoice1={setChoice1} onChoose={() => setPage('page2')} />}
      {page === 'page2' && <Player2 choice2={choice2} setChoice2={setChoice2} onChoose={() => setPage('page3')}/>}
      {page === 'page3' && <Result choice1={choice1} choice2={choice2} onChoose={() => setPage('page1')} winner={winner} setWinner={setWinner}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
});