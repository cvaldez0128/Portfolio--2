import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal } from 'react-native';
import ImageElement from './components/ImageElement';


export default class ImageGallery extends React.component {

    state = {
        modalVisible: false,
        modalImage: require('./img/')
    }

    render() {
        return (
            <>
            
            </>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);