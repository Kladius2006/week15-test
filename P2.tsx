import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

type Player2Props = {
  choice2: string | undefined;
  setChoice2: React.Dispatch<React.SetStateAction<string | undefined>>;
  onChoose: () => void;
};

export default function Player2({
    choice2,
    setChoice2,
    onChoose
}: Player2Props) {

  const ChooseRock = () =>{
    setChoice2("Rock");
    onChoose();
  }
  const ChoosePaper = () => {
    setChoice2("Paper");
    onChoose();
  }
  const ChooseScissors = () =>{
    setChoice2("Scissors");
    onChoose();
  }

  return (
    <View style={styles.container}>
      <Text>This is Player2</Text>
      <StatusBar style="auto" />

      {/*Buttons*/}
            <View style={styles.verticalContainer}>
              <TouchableOpacity 
              style={styles.buttons}
              onPress={ChooseRock}>
                  <Text>🪨</Text>
              </TouchableOpacity>
      
              <TouchableOpacity 
              style={styles.buttons}
              onPress={ChoosePaper}>
                  <Text>📃</Text>
              </TouchableOpacity>
      
              <TouchableOpacity 
              style={styles.buttons}
              onPress={ChooseScissors}>
                  <Text>✂️</Text>
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