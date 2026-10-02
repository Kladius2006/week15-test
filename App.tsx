import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Player1 from './P1';
import Player2 from './P2';
import Result from './Result';

type Player1Props = {
  choice1: string | undefined;
  setChoice1: React.Dispatch<React.SetStateAction<string | undefined>>;
};


export default function App() {

  const [page, setPage] = useState('page1'); //useState for shuffling page

  return (
    <View style={styles.container}>
      {/* Pages Content */}
        {page === 'page1' && <Player1 />}
        {page === 'page2' && <Player2 />}
        {page === 'page3' && <Result />}
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
