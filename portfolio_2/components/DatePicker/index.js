import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';

let fruits = () => {
    if (fruit.value == "Banana") {
        document.getElementById('fruit').innerHTML = "You chose Bananas!";
    }
}
export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <>
                <Card>

                    <SafeAreaView style={styles.container}>
                        <Text style={styles.quiz}>SHORT QUIZ</Text>
                        <Card.Divider/>
                        <Text style={styles.text}>Pick a fruit: Banana, Strawberry, Blueberry, Apple</Text>
                        <TextInput style={styles.textInput} type="text" id="fruit"></TextInput>
                        <Button type="submit" title="Submit" onPress={fruits}></Button>
                        <Text><p id="fruit"></p></Text>
                    </SafeAreaView>
                </Card>

            </>
                    
                  
        );
    }
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
  quiz: {
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