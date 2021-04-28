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
    
    let access = () => {
        if (codeRef.current.value == "vaccine") {
            setAccessIn(true)
            console.log("Code accepted")
        }
    }   
      
        return (
            <>

                {accessIn ?

                    <>
                        <TestApp></TestApp>
                    </>
                : undefined}

                {!accessIn ?
                    <>
                        <Card>
                            <SafeAreaView style={styles.container}>
                                <Text style={styles.header}>YOU WILL NEED A CODE TO ACCESS THE NEXT COMPONENT</Text>
                                <Card.Divider/>
                                <Text style={styles.text}>
                                    Hint: 
                                    This is something that is entirely optional.

                                </Text>
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