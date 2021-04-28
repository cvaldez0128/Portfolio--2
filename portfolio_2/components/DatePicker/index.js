import React from 'react';
import { useState, useRef } from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';

function TestApp () {
    return (
        <>
            <Text>This is a test</Text>
        </>
    )
}

export default class Date extends React.Component {

    render() {
        let [accessIn, setAccessIn] = useState(false)
        let passRef = useRef(null)
    
        let access = () => {
            if (passRef.current.value == "vaccine") {
                setAccessIn(true)
                console.log("Access granted")
            }
        }
        

        return (
            <>

                {loggedIn ?
                    <>
                        <TestApp></TestApp>
                    </>
                : undefined}


            {!loggedIn ?
               <Card>
                   <SafeAreaView style={styles.container}>
                       <Text style={styles.header}>THE NEXT COMPONENT IS PASSWORD PROTECTED</Text>
                       <Card.Divider/>
                       <Text style={styles.text}>
                            Hint: Getting this is entirely optional. 
                            Some are waiting, some have already gotten it. 
                            It will prevent the spread.
                            One word, all lowercase.
                        </Text>
                        <Card.Divider/>
                        <TextInput
                            style={styles.textInput}
                            ref={passRef}
                            placeholder="Did you guess the code word?"
                            secureTextEntry={true}
                            ></TextInput>
                        <Button 
                            onPress={access}
                            title="Enter"
                            />
                   </SafeAreaView>
               </Card>
            : undefined}
            </>
        );
    }
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