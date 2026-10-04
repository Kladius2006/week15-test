import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

type ResultProps = {
    choice1: string | undefined;
    choice2: string | undefined;
    winner: string | undefined;
    setWinner: React.Dispatch<React.SetStateAction<string | undefined>>;
    onChoose() : void;
};

export default function Result({
    choice1,
    choice2,
    winner,
    setWinner,
    onChoose
}:ResultProps) {

  if (choice1 === "Rock"){
    if(choice2 === "Rock"){
      setWinner("Draw");
    }
    else if(choice2 === "Paper"){
      setWinner("Player2");
    }
    else{
      setWinner("Player1");
    }
  }
  else if(choice1 === "Paper"){
    if(choice2 === "Paper"){
      setWinner("Draw");
    }
    else if(choice2 === "Scissors"){
      setWinner("Player2");
    }
    else{
      setWinner("Player1");
    }
  }
  else if(choice1 === "Scissors"){
    if(choice2 === "Scissors"){
      setWinner("Draw");
    }
    else if(choice2 === "Rock"){
      setWinner("Player2");
    }
    else{
      setWinner("Player1");
    }
  }

  return (
    <View style={styles.container}>

      <StatusBar style="dark" />

      <Text style={styles.gameTitle}>ROCK PAPER SCISSORS</Text>
      <Text style={styles.resultTitle}>Result</Text>

      <View style={styles.horizontalContainer}>

        <View style={styles.playerCard}>
          <Text style={styles.playerName}>PLAYER 1</Text>

          <Text style={styles.choiceEmoji}>
            {choice1 === "Rock" ? "🪨" :
             choice1 === "Paper" ? "📃" : "✂️"}
          </Text>

          <Text style={styles.choiceText}>
            {choice1}
          </Text>
        </View>

        <Text style={styles.vsText}>VS</Text>

        <View style={styles.playerCard}>
          <Text style={styles.playerName}>PLAYER 2</Text>

          <Text style={styles.choiceEmoji}>
            {choice2 === "Rock" ? "🪨" :
             choice2 === "Paper" ? "📃" : "✂️"}
          </Text>

          <Text style={styles.choiceText}>
            {choice2}
          </Text>
        </View>

      </View>

      <View style={styles.winnerCard}>
        <Text style={styles.winnerLabel}>WINNER</Text>
        <Text style={styles.winnerText}>{winner}</Text>
      </View>

      <TouchableOpacity
        style={styles.retryButton}
        onPress={onChoose}>
        <Text style={styles.retryText}>
          Play Again
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  gameTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#172033',
    textAlign: 'center',
    marginBottom: 8,
  },
  resultTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#3A5CCC',
    marginBottom: 25,
  },
  horizontalContainer: {
    width: '100%',
    maxWidth: 450,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playerCard: {
    width: '40%',
    minHeight: 170,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: 15,
  },
  playerName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 12,
  },
  choiceEmoji: {
    fontSize: 42,
    marginBottom: 8,
  },
  choiceText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172033',
  },
  vsText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#9CA3AF',
  },
  winnerCard: {
    width: '85%',
    maxWidth: 380,
    backgroundColor: '#3A5CCC',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  winnerLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DCE4FF',
    marginBottom: 5,
  },
  winnerText: {
    fontSize: 27,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  retryButton: {
    width: '70%',
    maxWidth: 300,
    backgroundColor: '#172033',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  retryText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});