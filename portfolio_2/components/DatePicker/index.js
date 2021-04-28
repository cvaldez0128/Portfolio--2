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

                    <SafeAreaView style={[styles.container, styles.text]}>
                        <Text>This is a test</Text>
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
    color: "white",
    fontFamily: "Artico Light",
    textAlign: "center",
    fontSize: "20px",
  },
});