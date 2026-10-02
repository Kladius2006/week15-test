import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Player1 from './P1';
import Player2 from './P2';
import Result from './Result';

export default function App() {

  const [page, setPage] = useState('page1'); //useState for shuffling page

  return (
    <View style={styles.container}>
      {/* Pages Content */}
        {page === 'page1' && <Player1 />}
        {page === 'page2' && <Player2 />}
        {page === 'page3' && <Result />}

      {/* BOTTOM MENU */}
      <View style={styles.bottomMenu}>

        {/* PAGE 1 */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setPage('page1')}
        >
          <Text style={styles.menuItem}>P1</Text>
        </TouchableOpacity>


        {/* PAGE 2 */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setPage('page2')}
        >
          <Text style={styles.menuItem}>P2</Text>
        </TouchableOpacity>


        {/* PAGE3 */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setPage('page3')}
        >
          <Text style={styles.menuItem}>Result</Text>
        </TouchableOpacity>

      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
