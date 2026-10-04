import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
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

      <Text>This is Result</Text>
      <StatusBar style="auto" />

      <View style={styles.horizontalContainer}>

        <View style={styles.minorVerticalContainer}>
            <Text>
                Player1: {choice1}
            </Text>
        </View>
        <View style={styles.minorVerticalContainer}>
            <Text>
                Player2: {choice2}
            </Text>
        </View>

      </View>
      <Text>
        Winner: {winner};
      </Text>

      <TouchableOpacity onPress={onChoose}>
        <Text>
            Retry
        </Text>
      </TouchableOpacity>

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
  minorVerticalContainer: {
    flex:1,
    width: '10%',
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'column',
  },
  horizontalContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});