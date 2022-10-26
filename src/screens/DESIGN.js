import React from "react";
import { Image, View,StyleSheet, Text, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';



const DESIGN =({navigation})=> {

    
    return(
        <View style={styles.ViewStyle}>
            <TouchableOpacity  style={{ backgroundColor:"#008b8b",width:170,height:45,marginTop:20 ,marginLeft:170,borderRadius:100,borderWidth:3,borderColor:"green"}} 
            onPress={()=>navigation.navigate('LOGIN')}
            >
                 <Text style={{fontSize:25,textAlign:"center",justifyContent:"center",color:"white"}}>Get-Started</Text>

             </TouchableOpacity>
            <Animatable.Image 
            animation="bounceIn"
            duraton="1500"
             style={styles.ImageStyle1}
             source= {require("../../assets/logo.jpg")}  />
             <Text style={styles.textStyle} >WE ARE HERE TO {'\n'}TRACK FOR YOU</Text>

             <Animatable.View style={styles.endViewStyle}>
                 <Text >.</Text>
                 <Text style={styles.textFooter}>TRACK-IT</Text>
                 
                     
             </Animatable.View>
             
            
            
        </View>
        

    )
};
const styles =StyleSheet.create({
    ViewStyle:{
        height: "50%",
        backgroundColor: "#add8e6",
        borderBottomEndRadius:50,
        borderBottomLeftRadius:50,
    },
    ImageStyle1:{
        
        height: 190,
        width: 190,
        marginLeft:83,
        marginTop:20,
        borderRadius:80,
        borderColor:"#008b8b",
       borderWidth:8,
        //borderRadius:50,
    },
    textStyle:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        marginTop:40,
        
        color:"#696969",
        borderRadius:100,
        marginLeft:20,
        marginRight:20,
       
        paddingTop:7,
        
    },
    endViewStyle:{
        marginTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:"80%",
        backgroundColor:"#add8e6",
    },
    textFooter:{
        //width:500,
        textAlign:"center",
        color:"#696969",
        fontSize:50,

    },
   
    btnTextStyle:{
        fontSize:20,
        color:"white",

    },
    
   


});
export default DESIGN;