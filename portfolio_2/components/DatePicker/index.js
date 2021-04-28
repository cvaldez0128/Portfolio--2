import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            
                <Card style={styles.card}>
                    <Text>This is a test</Text>
                </Card>
            </>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#6e202e',
        borderWidth: 15,
        alignItems: "center",
    },

});