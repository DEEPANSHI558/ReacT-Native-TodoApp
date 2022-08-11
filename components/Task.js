import React from "react";
import { StyleSheet, Text, View, ViewBase } from 'react-native';


const Task= (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.itemLeft}>
                <Text style={styles.box}></Text>
                <Text style={styles.textBox}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles=StyleSheet.create({
      container:{
         flexDirection:'row',
         backgroundColor:"#fff",
         padding:20,
         borderRadius:20,
         marginTop:15,
         alignItems:"center",
         justifyContent:"space-between"

      },
      itemLeft:{
         flexDirection:"row",
         alignItems:"center",
         flexWrap:"wrap"
      },
      textBox:{
          maxWidth:"80%"
      },
      box:{
         width:20,
         height:20,
         backgroundColor:'#55BCF6',
         opacity:0.4,
         marginRight:20,
         borderRadius:2
      },
      circular:{
         width:12,
         height:12,
         borderColor:'#55BCF6',
         borderWidth:2,
         borderRadius:50
      }
})
export default  Task;