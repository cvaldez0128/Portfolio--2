import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';



export default function App() {
    return (
         <Card>
                   <SafeAreaView style={styles.container}>
                       <Text style={styles.header}>PLEASE ENTER THE PROVIDED INFORMATION:</Text>
                       <Card.Divider/>
                       <Text style={styles.text}>NAME: KIM NAMJOON</Text>
                       <Text style={styles.text}>AGE: 26</Text>
                       <Text style={styles.text}>TITLE: ARTIST</Text>
                       <Card.Divider/>
                   </SafeAreaView>
               </Card>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#6e202e',
    borderWidth: 15,
    alignItems: "center",
  },
  text: {
      fontFamily: "Artico Light",
      color: "white",
      textAlign: "center",
      fontSize: 20,
  },
  header: {
      fontFamily: "Artico Light",
      color: "white",
      textAlign: "center",
      fontSize: 30,
  },
  textInput: {
    height: 20,
    width: 200,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 2,
    backgroundColor: "white",
  },
});