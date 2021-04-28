import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';



export default class Date extends React.Component {
  
    render() {
        return (
            <>
    
               <Card>
                   <SafeAreaView style={styles.container}>
                       <Text style={styles.header}>PLEASE ENTER THE PROVIDED INFORMATION:</Text>
                       <Card.Divider/>
                       <Text style={styles.text}>NAME: KIM NAMJOON</Text>
                       <Text style={styles.text}>AGE: 26</Text>
                       <Text style={styles.text}>TITLE: ARTIST</Text>
                       <div class="survey">
            <fieldset>
                <legend>Choose a festive beverage</legend>
            <div>
                <label for="hot_coco_id">Hot Chocolate</label>
                <input
                id="hot_coco_id"
                type="radio"
                name="drink_choice"
                value="Hot Chocolate">
            </div>
            <div>
                <label for="mulled_wine">Mulled Wine</label>
                <input
                id="mulled_wine_id"
                type="radio"
                name="drink_choice"
                value="Mulled Wine">
            </div>
            <div>
                <label for="eggnogg_id">Eggnog</label>
                <input
                id="eggnog_id"
                type="radio"
                name="drink_choice"
                value="Eggnog">
            </div>
            <div>
                <label for="hot_toddy_id">Hot Toddy</label>
                <input
                id="hot_toddy_id"
                type="radio"
                name="drink_choice"
                value="Hot Toddy">
            </div>
            <div id="submit_button">
                <input name="submit" type="submit" class="button" id="submit" value="Click to Submit" />
            </div>
            </fieldset>
        </div>
                       <Card.Divider/>
                   </SafeAreaView>
               </Card>
              
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
      fontSize: 20,
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