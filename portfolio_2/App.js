import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

let todoList = [
  {
    key: "1",
    description: "Volunteer in an important political compaign",
    completed: true
  },
  {
    key: "2",
    description: "Study all the works of William Shakespeare",
    completed: true
  },
  {
    key: "3",
    description: "Learn to play piano",
    completed: true
  },
  {
    key: "4",
    description: "Speak fluent French",
    completed: true
  },
  {
    key: "5",
    description: "Visit the Sistine Chapal with Abby",
    completed: true
  },
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    let inputRef = React.createRef()
    let checkRef = React.createRef()
    this.state = {todoList,curKey:6,inputRef, checkRef}
  }



  completeItem = (itemKey) => {
    this.setState((prevState) => {
      let prevList = prevState.todoList
      let itemIndex = prevList.findIndex((item) => item.key == itemKey)
      prevList[itemIndex].completed = !prevList[itemIndex].completed
      return {todoList:prevList}
    })
  }

  handleKeyPress = (event) => {
    if (event.key == "Enter") {
      this.addTodoItem()
     
    }
  }

  
  addTodoItem = () => {
    let prevValue = this.state.inputRef.current.value
    this.setState(prevState => ({
      todoList: [...prevState.todoList,
      { completed: false, description: prevValue, key: prevState.curKey }],
      curKey: prevState.curKey+1
    }))
    this.state.inputRef.current.value = ""
  }  
  
  render() {
    return (
      <>
        <View style={styles.container}>
            <Card>
                <SafeAreaView style={[styles.container, styles.text]}>
                    <Text style={styles.hText}>TO-DO LIST{"\n"}</Text>
                    <Card.Divider></Card.Divider>
                    
                    {this.state.todoList.map((item) => (
                      <View style={styles.label}>
                        
                          <Text style={styles.numbers}>{item.key}</Text>
                          
                          <input 
                              ref={this.state.checkRef} 
                              type="checkbox" 
                              onChange={() => this.completeItem(item.key)} 
                              defaultChecked={item.completed}>
                          </input>
                            
                          <Text style={[styles.text, item.completed ? {textDecoration: "line-through"} : undefined]}>{item.description}</Text>
                        
                      </View>
                    ))}
                        
                      
                      
                    <TextInput style={styles.textInput} onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef}></TextInput>
                    <Button onPress={() => this.addTodoItem()} title="Add new item"></Button>
                </SafeAreaView>
            </Card>

            <NavigationContainer>
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
              </Drawer.Navigator>
            </NavigationContainer>
            <Text>Hello</Text>
        </View>                                                 
       
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
  card: {
    backgroundColor: '#6e202e',
  },
  text: {
    color: "white",
    fontFamily: "Artico Light",
    textAlign: "center",
    fontSize: "20px",
  },
  numbers: {
    fontFamily: "Artico Light",
    color: "white",
    fontSize: 20,
  },
  hText: {
    color: "white",
    fontFamily: "Artico Light",
    textAlign: "center",
    fontSize: 30,
  },
  button: {
    textAlign: "center",
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
  label: {
    flexDirection: "row",
    alignSelf: "center",
  },
  
});