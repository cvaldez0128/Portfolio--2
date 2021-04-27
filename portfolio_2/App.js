import * as React from 'react';
import { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';
import TodoList from './components/Todo'
import Modal from 'modal-react-native-web';

function HomeScreen({ navigation }) {
  const [showLogin, setShowLogin] = useState(false)
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.body}>
      {!login ?
        <>

          <Text style={styles.text}>Welcome! Please Log In Below</Text>
    
          <Button
            style={styles.buttonStyle}
            onPress={() => setShowLogin(true)}
            title="Log In"
          />
        </>
        : 
        <>
            <Text style={styles.text}>Welcome {username}</Text>
            <Button 
              style={styles.buttonStyle}
              onPress={() => setLogin(false)}
              title="Log Out"
            />
        </>

      }

      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.openDrawer()}
        title="Open Left Drawer"
      />

      <Overlay isVisible={showLogin} ModalComponent={Modal}>
        <Text style={styles.Logintext}>Please Log In Below</Text>
        <Input title="Username" value={username} onChangeText={(un => setUsername(un))}></Input>
        <Input title="Password" value={password} secureTextEntry={true} onChangeText={(pw) => setPassword(pw)}></Input>
        <Button title="Log In" onPress={() => { setLogin(true); setShowLogin(false)}}></Button>
      </Overlay>

    </View>
  );
}

HomeScreen.propTypes = {
    navigation: PropTypes.any
}


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

NotificationsScreen.propTypes = {
    navigation: PropTypes.any
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}
        
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontFamily: "Artico Light",
    fontSize: 20,
    color: "white",
  },
  Logintext: {
    textAlign: "center",
    fontFamily: "Artico Light",
    
  },
  body: {
    backgroundColor: "#213479",
    border: "15px solid black",
    flex: 1,
    alignItems: "center",
    
  },
    buttonStyle: {
    flex: 1,
    padding: 2
  },
});