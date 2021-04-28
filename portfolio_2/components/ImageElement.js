import React from 'react';
import { AppRegistry, StyleSheet, Image } from 'react-native';

export default class ImageElement extends React.component {
    render() {
        return (
            <>
                <Image source={this.props.imgsource} style={styles.image}></Image>
            </>
        );
    }
}

const styles = StyleSheet.create({

});

