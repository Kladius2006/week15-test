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

  const ChooseRock = () =>{
    setChoice1("Rock");
    onChoose();
  }

  const ChoosePaper = () =>{
    setChoice1("Paper");
    onChoose();
  }

  const ChooseScissors = () =>{
    setChoice1("Scissors");
    onChoose();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.gameTitle}>ROCK PAPER SCISSORS</Text>
      <Text style={styles.playerTitle}>Player 1</Text>
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