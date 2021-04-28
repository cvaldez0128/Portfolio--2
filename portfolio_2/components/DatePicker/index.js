import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';

function Quiz () {
    var favFruit = prompt("What is your favorite fruit?", "");

    var favMovie = prompt("What is your favorite movie?", "");

    var strInput = prompt("Please enter 8, 9, or 10");
    var intInput = parseInt(strInput);

    switch (intInput) {
    case 8:
        alert("You entered 8!");
        break;
    case 9:
        alert("You entered 9!");
        break;
    case 10:
        alert("You entered 10!");
        break;
    default:
        alert("I said a number between 8 and 10");
    }
    intInput = String(intInput);
    alert(
    "You said your favorite fruit is: " +
        favFruit +
        ". Your favorite movie is: " +
        favMovie +
        " and you chose: " +
        intInput
    );
}

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <>
               
                <Quiz></Quiz>
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