import React from 'react';
import { useState, useRef } from 'react'
import { StyleSheet, View, Text, TextInput, Button, RadioButton } from 'react-native';
import { Card } from 'react-native-elements';
import Todo from './components/todo';
import Date from './components/DatePicker';


const USER = "cvaldez2218"


function Quiz () {
  var favFruit = prompt("What is your favorite fruit?", "");

  var favMovie = prompt("What is your favorite movie?", "");

  var strInput = prompt("Please enter 8, 9, or 10");
  var intInput = parseInt(strInput);

  switch (intInput) {
    case 8:
      alert("You entered 8!");
      break;
    case 9:
      alert("You entered 9!");
      break;
    case 10:
      alert("You entered 10!");
      break;
    default:
      alert("I said a number between 8 and 10");
  }
  intInput = String(intInput);
  alert(
    "You said your favorite fruit is: " +
      favFruit +
      ". Your favorite movie is: " +
      favMovie +
      " and you chose: " +
      intInput
);
}


function LoginApp () {

        return (
            <>
                <Text 
                    style={styles.welcome}>
                    Welcome, {USER}!
                </Text>
              
                <Todo></Todo>
                
                <Card.Divider/>
                <Date></Date>
                <Quiz></Quiz>
            </>
                
                
          
        )

}
    

         
  
  
  
  

export default function doLogin() {



  let [loggedIn,setLoggedIn] = useState(false)
  let passRef = useRef(null)
  let userRef = useRef(null)
  
  
  let login = () => {
    if (passRef.current.value == "c") {
      setLoggedIn(true)
      console.log("Password accecpted")
    } else {
      console.log("Password is incorrect")
      document.getElementById("error").innerHTML = ("WRONG PASSWORD! TRY AGAIN.")
    }
  }
  
  let logout = () => {
      setLoggedIn(false)
    }


  return (
    <>

       

          <View style={[styles.container, styles.body]}>
              
                {loggedIn ?
              
                <>
                  <LoginApp></LoginApp>
                  <Card.Divider/>
                  <Button
                    onPress={logout}
                    title="Log Out"
                  ></Button>
                  <Card.Divider/> 
                  
                </>
               : undefined}
              
              
              {

                !loggedIn ?
                <>
               
                    <Text style={styles.welcome}>
                      WELCOME, PLEASE LOG IN BELOW
                    </Text>
                    <Card.Divider/>
                    <TextInput
                    style={styles.textInput}
                    ref={userRef}
                    placeholder="Username"
                    ></TextInput>
                    
                   
                        <TextInput
                        style={styles.textInput}
                        ref={passRef}
                        placeholder="Password"
                        secureTextEntry={true}
                        ></TextInput>
                      <Button 
                        onPress={login}
                        title="Login">
                      </Button>
                      
                      <br></br>
                     
                      <Text 
                      style={styles.errorMessage}>
                      <p id="error"></p>
                      </Text>

                      

                      </> : undefined}

            </View>
          </>
    )
    
  }
        
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
    alignItems: 'center',
    
  },
  text: {
    fontFamily: "Artico Light",
    textAlign: "center",
  },
  body: {
    backgroundColor: "aquamarine",
    borderWidth: 15,
  },
  textInput: {
    height: 40,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
  },
  errorMessage: {
    height: 15,
    paddingLeft: 12,
    color: "red",
    fontSize: ".75rem",
    fontFamily: "Artico Light",
  },
  error: {
    fontFamily: "Artico Light",
  },
  welcome: {
    fontFamily: "Artico Light",
    fontSize: 30,
  },
});