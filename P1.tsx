import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

type Player1Props = {
  choice1: string | undefined;
  setChoice1: React.Dispatch<React.SetStateAction<string | undefined>>;
  onChoose: () => void;
};

export default function Player1({
    choice1,
    setChoice1,
    onChoose,
}: Player1Props) {
  
  return (
    <View style={styles.container}>
        
      <Text>This is Player1</Text>
      <StatusBar style="auto" />

      {/*Buttons*/}
      <View style={styles.verticalContainer}>
        <TouchableOpacity 
        style={styles.buttons}
        onPress={() => setChoice1("Rock")}>
        onPress={onChoose}
            <Text>Rock</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttons}
        onPress={() => setChoice1("Paper")}>
            <Text>Paper</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttons}
        onPress={() => setChoice1("Scissors")}>
            <Text>Scissors</Text>
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
  verticalContainer: {
    flex:1,
    width: '50%',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  buttons: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3abad7',
    paddingTop: 20,
    paddingBottom: 20,
  }
});