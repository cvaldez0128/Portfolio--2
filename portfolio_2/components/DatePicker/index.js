import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';



export default class Date extends React.Component {
  
    render() {
        return (
            <>
    
               <Card>
                   <SafeAreaView style={styles.container}>
                       <Text style={styles.header}>SURVEY</Text>
                       <Card.Divider/>
                       <Text style={styles.text}>
                            <div class="survey">
                                <fieldset>
                                    <legend>Settle the debate of which film is better</legend>
                                    <div>
                                        <label for="home_alone_id">Home Alone</label>
                                        <input
                                        id="home_alone_id"
                                        type="radio"
                                        name="survey_choice"
                                        value="Home Alone"
                                        />
                                    </div>
                                    <div>
                                        <label for="home_alone_2_id">Home Alone 2</label>
                                        <input
                                        id="home_alone_2_id"
                                        type="radio"
                                        name="survey_choice"
                                        value="Home Alone 2"
                                        />
                                    </div>
                                </fieldset>
                            </div>
                       </Text>
                       <Card.Divider/>
                       <Text style={styles.text}>
                            <div class="survey">
                                <fieldset>
                                    <legend>Choose a festive beverage</legend>
                                <div>
                                    <label for="hot_coco_id">Hot Chocolate</label>
                                    <input
                                    id="hot_coco_id"
                                    type="radio"
                                    name="drink_choice"
                                    value="Hot Chocolate"
                                    />
                                </div>
                                <div>
                                    <label for="mulled_wine">Mulled Wine</label>
                                    <input
                                    id="mulled_wine_id"
                                    type="radio"
                                    name="drink_choice"
                                    value="Mulled Wine"
                                    />
                                </div>
                                <div>
                                    <label for="eggnogg_id">Eggnog</label>
                                    <input
                                    id="eggnog_id"
                                    type="radio"
                                    name="drink_choice"
                                    value="Eggnog"
                                    />
                                </div>
                                <div>
                                    <label for="hot_toddy_id">Hot Toddy</label>
                                    <input
                                    id="hot_toddy_id"
                                    type="radio"
                                    name="drink_choice"
                                    value="Hot Toddy"
                                    />
                                </div>
                                </fieldset>
                            </div>

                       </Text>

                       
                       
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