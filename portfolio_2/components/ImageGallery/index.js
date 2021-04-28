import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal } from 'react-native';
import ImageElement from './components/ImageElement';


export default class ImageGallery extends React.component {

    state = {
        modalVisible: false,
        modalImage: require('./img/OffCentered Logo.jpg'),
        images: [
            require('./OffCentered Logo.jpg'),
            require('./img/Fight.jpeg'),
            require('./img/Holding hands.png'),
            require('./img.Tutorial 5.jpg'),
        ]
    }

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage;
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key
        });

        return (
            <>
            
            </>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);