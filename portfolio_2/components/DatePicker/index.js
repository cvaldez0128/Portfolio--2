import React from 'react';
import { StyleSheet, View, Text, RadioButton } from 'react-native';
import { Card } from 'react-native-elements';

export default class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Card>
                    <Text>This is a test</Text>
                    <RadioButton
                        value="first"
                    ></RadioButton>
                </Card>
            </>
        );
    }
}

const styles = StyleSheet.create({

});