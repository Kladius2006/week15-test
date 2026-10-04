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

      <Text style={styles.gameTitle}>ROCK PAPER SCISSORS</Text>
      <Text style={styles.playerTitle}>Player 2</Text>
      <Text style={styles.instruction}>Choose your weapon</Text>

      <StatusBar style="dark" />

      <View style={styles.verticalContainer}>

        <TouchableOpacity
          style={styles.buttons}
          onPress={ChooseRock}>
          <Text style={styles.emoji}>🪨</Text>
          <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={ChoosePaper}>
          <Text style={styles.emoji}>📃</Text>
          <Text style={styles.buttonText}>Paper</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={ChooseScissors}>
          <Text style={styles.emoji}>✂️</Text>
          <Text style={styles.buttonText}>Scissors</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  gameTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#172033',
    textAlign: 'center',
    marginBottom: 10,
  },
  playerTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#3A5CCC',
    marginBottom: 5,
  },
  instruction: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 20,
  },
  verticalContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 14,
  },
  buttons: {
    height: 105,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E6EF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 38,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#172033',
  },
});