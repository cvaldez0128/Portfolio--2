import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal } from 'react-native';

import Element from './components/imageelement';

export default class ImageGallery extends React.component {

    state = {
        modalVisible: false,
        modalImage: require('./portfolio_2/img/logo.jpg'),
        images: [
            require('./portfolio_2/img/logo.jpg'),
            require('./portfolio_2/img/fight.jpeg'),
            require('./portfolio_2/img/moon.png'),
            require('./portfolio_2/img/emma.jpg'),
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
            return (
                <>
                <TouchableWithoutFeedback key={key}
                    onPress={() => { this.setModalVisible(true, key)}}>
                    <View style={styles.imagewrap}>
                        <Element imgsource={val}></Element>
                    </View>

                </TouchableWithoutFeedback>
                </>
            );

        });

        return (
            <>
                <View style={styles.container}>
                    {images}
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#eee',
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: 200,
        width: 100,
        backgroundColor: "#fff",
    },
});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);