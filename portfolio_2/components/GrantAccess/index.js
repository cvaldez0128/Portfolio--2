import React from 'react';
import { useState, useRef } from 'react'
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';

function TestApp () {
    return (
        <>
            <Text>This is a test</Text>
           
          
        </>
    )
}

export default function passWord() {

    let [accessIn,setAccessIn] = useState(false)
    let codeRef = useRef(null)

    handleKeyPress = (event) => {
    if (event.key == "Enter") {
      this.access()
     
    }
  }
    
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
                        <TestApp></TestApp>
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
                                    onKeyPress={(event) => this.handleKeyPress(event)}
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
});