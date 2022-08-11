import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView,TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task,setTask]=useState();
  const [taskitems,setTaskItems]=useState([]);

  const handleTask=()=>{
    Keyboard.dismiss();
      setTaskItems([...taskitems,task]);
      setTask(null);
  }
 
  const completeTask=(index)=>{
       let itemCopy=[...taskitems];
       itemCopy.splice(index,1);
       setTaskItems(itemCopy);
  }
  return (
    <View style={styles.container}>
      {/* Todays task */}
         <View style={styles.taskWrapper}>
           <Text style={styles.sectionTitle}>Today's Task</Text>
           <View style={styles.itemsContainer}>
                {/* <Task text="this s my project on tofolist you want to add something to it"/>
                <Task text="Task 2"></Task> */}
                {
taskitems.map((item,index)=>{
  return(<TouchableOpacity onPress={()=>{completeTask(index)}}>
    <Task key={index} text={item}></Task>
     </TouchableOpacity>)
  
 

})
                }
                
           </View>
         </View>
        <KeyboardAvoidingView behavior={Platform.OS==='ios'?"padding":"height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}></TextInput>
        <TouchableOpacity onPress={()=>{handleTask()}}>
          <View style={styles.addWrapper}>
             <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
      paddingTop:80,
      paddingHorizontal:20,
  },
  sectionTitle:{
     fontSize:24,
     fontWeight:'bold',
  },
  writeTaskWrapper:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-around",
       paddingHorizontal:20,
       position:"absolute",
       bottom:60,
       width:"100%", 
  },
  input:{
    paddingHorizontal:15,
    paddingHorizontal:15,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:"#FFF",
    borderColor:"#C0C0C0",
    width:250,
    height:"100%"
  },
  addWrapper:{
    width:45,
    height:45,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:"#FFF",
    borderColor:"#C0C0C0",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }

});
