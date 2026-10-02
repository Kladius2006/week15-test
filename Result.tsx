import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

type ResultProps = {
    choice1: string|undefined;
    choice2: string|undefined;
};

export default function Result({
    choice1,
    choice2
}:ResultProps) {

  return (
    <View style={styles.container}>

      <Text>This is Result</Text>
      <StatusBar style="auto" />

      <View style={styles.horizontalContainer}>

        <View style={styles.minorVerticalContainer}>
            <Text>
                Player1:
            </Text>
        </View>
        <View style={styles.minorVerticalContainer}>
            <Text>
                Player2:
            </Text>
        </View>

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
  minorVerticalContainer: {
    flex:1,
    width: '10%',
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'column',
  },
  horizontalContainer: {
    flex:1,
    height: '10%',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    rowGap: 20,
  },
});