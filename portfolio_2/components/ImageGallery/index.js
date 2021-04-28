import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal } from 'react-native';
import ImageElement from './components/ImageElement';


export default class ImageGallery extends Component {

    state = {
        modalVisible: false,
        modalImage: require('./img/OffCentered Logo.jpg'),
        images: [
            require('./img/OffCentered Logo.jpg'),
            require('./img/Fight.jpeg'),
            require('./img/Holding hands.png'),
            require('./img/Tutorial 5.jpg'),
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
                        <ImageElement imgsource={val}></ImageElement>
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