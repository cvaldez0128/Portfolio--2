import React from 'react';
import { useState, useRef } from 'react'
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import { Video, AVPlaybackStatus } from 'expo-av';


export function VideoPlayer () {
    const video = React.useRef(null);
    const [Status, setStatus] = React.useState({});
    const url="https://youtu.be/6MkXW9AbG_M"

    const bangtan = "https://students.cah.ucf.edu/~ch869274/dig3716c/Life%20Goes%20On%20-%20Lyrics/img/Life%20Goes%20On%20-%20Lyrics.mp4"
   return (
       <Card>

            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>LIFE GOES ON</Text>
                
                <Card.Divider/>
            <Video
                ref={video}
                style={styles.video}
                source={bangtan}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Card.Divider/>
            <Text style={styles.text}>
                Video buffering? Click the link below, or copy and paste it into a new tab.
                
            </Text>
            <Text style={styles.text} onPress={() => Linking.openURL(url)}>
                    {url}
            </Text>
            </SafeAreaView>
       </Card>
  );
}


export function UserSurvey () {

    let [userYes,setUserYes] = useState(false)
    let yesRef = useRef(null)

    let message = () => {
        if (yesRef.current.value == "Yes") {
            setUserYes(true)
        } else if (yesRef.current.value == "No") {
            setUserYes(false)
        }
    }
    return (
        <>
            
            <Card>
                <SafeAreaView style={styles.container}>
                   <Text style={styles.header}>Survey</Text>
                   <Card.Divider/>
                   <Text style={styles.text}>Did you like the video? Yes or No?</Text>
                   <TextInput
                    style={styles.textInput}
                    ref={yesRef}
                    placeholder="Tell me your answer"
                   ></TextInput>
                   <Button
                    title="Answer"
                    onPress={message}
                   ></Button>

                {userYes ?

<>
                        <Text style={styles.text}>
                            Thank you so much! I'm glad you enjoyed it!
                        </Text>
                    </>

                : undefined}

                {!userYes ?
                    <>
                        <Text style={styles.text}>
                            I'm sorry that the video wasn't your cup of tea. Thanks anyway for watching.
                        </Text>
                    </>
                : undefined}
                
                </SafeAreaView>
            </Card>

            
        </>
    );
}

export default function passWord() {

    let [accessIn,setAccessIn] = useState(false)
    let codeRef = useRef(null)

  
    let access = () => {
        if (codeRef.current.value == "vaccine") {
            setAccessIn(true)
            console.log("Code accepted")
        }
    } 
    
    let back = () => {
        setAccessIn(false)
    }
      
        return (
            <>

                {accessIn ?

                    <>
                        <VideoPlayer></VideoPlayer>
                        <Card.Divider/>
                        <UserSurvey></UserSurvey>
                        <Card.Divider/>
                        <Button
                            title="Exit"
                            onPress={back}
                        />
                    </>
                : undefined}

                {!accessIn ?
                    <>
                        <Card>
                            <SafeAreaView style={styles.container}>
                                <Text style={styles.header}>YOU WILL NEED A CODE TO ACCESS THE NEXT COMPONENTS</Text>
                                <Card.Divider/>
                                <Text style={styles.text}>
                                    Hint: 
                                    This is something that is entirely optional.
                                </Text>

                                <Text style={styles.text}>
                                    Some people are waiting to get it.
                                </Text>

                                <Text style={styles.text}>
                                    Others have already gotten it.
                                </Text>

                                <Text style={styles.text}>
                                    It will help stop the spread.
                                </Text>

                                <Text style={styles.text}>
                                    One word, all lower case.
                                </Text>

                                <Card.Divider/>
                                <TextInput
                                    style={styles.textInput}
                                    
                                    ref={codeRef}
                                    placeholder="DID YOU GUESS THE CODE?"
                                    secureTextEntry={true}
                                ></TextInput>
                                <Button
                                    onPress={access}
                                    title="Enter">
                                </Button>

                            </SafeAreaView>
                        </Card>
                    </>
                : accessIn}
            </>
        );
    
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
      fontSize: 15,
  },
  header: {
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
  video: {
      width: 1000,
  },
});