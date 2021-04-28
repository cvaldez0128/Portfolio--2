import React from 'react';
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
    
        
      
        return (
            <>
    
               <Card>
                   <SafeAreaView style={styles.container}>
                    
                   </SafeAreaView>
               </Card>
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