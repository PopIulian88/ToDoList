import React from "react";
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from "@rneui/themed";


const text_color = '#03DAC5';
const bar_color = '#3700B3';
const button_color = '#BB86FC';

const Spacer = ({heigth = 15}) => {
  return(
      <View style={{marginTop: heigth}}/>
  )
}

function Task({TaskName = "Undefine Task"}) {
  return(
      <View style={styles.taskContainer}>
        <View style={styles.leftBox}>
          <Text style={{fontSize: 20, color: text_color}}>{TaskName}</Text>
        </View>
          <Icon
            reverse
            name={'done-outline'}
            size={20}
            color={button_color}
            onPress={() => alert("Bravo tati")}
        />
      </View>
  )
}


export default function App() {

  const [text, onChangeText] = React.useState("Useless Text");
  let variabila;



  return (


    <View style={{flex: 1}}>
      <View style={styles.upBox}>
        <Text style={{fontWeight: 'bold', fontSize: 32, color: text_color}}>My Task</Text>
        <Text style={{color: '#fff'}}>Everyone has a Lambo or a Ferrari, it’s easy.</Text>
      </View>

      <View style={styles.midBox}>
        <TextInput
            style={styles.textBox}
            onChangeText={(text) => {variabila = text}}
            placeholder='New Task'
        />
        <Icon
            reverse
            name={'done-all'}
            color={button_color}
            size={25}
            onPress={() => {onChangeText(variabila)}}
        />
      </View>

      <View style={styles.downBox}>
        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}} style={styles.scrollView}>
            <Task TaskName={text}/>
            <Task/>
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  upBox: {
    flex: 1,
    padding: 5,
    backgroundColor: bar_color,
    justifyContent: 'center',
    borderRadius: 20,
  },

  midBox: {
    flex: 0.5,
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-evenly',
  },

  textBox: {
    borderWidth: 1,
    backgroundColor: '#C0C0C0',
    height: 50,
    width: '70%',
    margin: 12,
    padding: 10,
    borderRadius: 20,
  },

  downBox: {
    flex: 4,
    alignItems: 'center',
  },

  scrollView: {
    width: '100%',
  },

  taskContainer: {
    flexDirection: 'row',
    height: 100,
    width: '90%',
    alignItems: 'center',
    justifyContent: "space-between",
  },

  leftBox: {
    flex: 1,
    padding: 5,
    backgroundColor: '#F0F4C3',
    borderRadius: 25,
  },

});
