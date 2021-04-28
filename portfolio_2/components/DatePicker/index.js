import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

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
  },
  quiz: {
      fontFamily: "Artico Light",
      color: "white",
      textAlign: "center",
      fontSize: 30,
  },
});