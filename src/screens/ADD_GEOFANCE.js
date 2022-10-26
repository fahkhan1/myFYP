import React,{useState} from 'react'
import {Text,View,ul,li, TextInput,StyleSheet, TouchableOpacity} from 'react-native'

const ADD_GEOFANCE = ({navigation}) => {
  const myfun=()=>{
    if(Next=='')
    {
      alert("please select Fence Name");
    }else
    {
    navigation.navigate('MAP',
         {Next})
    }

  }
  const [Next, setNext]= useState("");
 
  return (
    <View style={{backgroundColor:'#add8e6',width:'100%',height:'100%'}}>
    <Text style={{textAlign:'center',fontSize:29,marginTop:30}}>GEO FANCE SHAPE</Text>

    <Text style={styles.labels}>Enter FANCE:</Text>

    <TextInput style={styles.inputStyle} placeholder={"Enter Fance Name"} autoCapitalize="none" autoCorrect={false}
        value={Next} 
        onChangeText={(Next) => setNext(Next)}           
        />
         <TouchableOpacity style={styles.buttonStyle}  onPress={()=>myfun()}
         
            >
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>   
    
    </View>
  )
};
const styles = StyleSheet.create({
  inputStyle:{
    //borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    //fontFamily:"regular",
    fontSize: 28,
    borderBottomWidth:2,
    marginTop:20,
    backgroundColor:'white',
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
    height:70
  },
  labels: {
    marginTop: 50,
    fontSize: 29,
    fontWeight: 'bold',
    color: "#696969",

},
buttonStyle: {
  marginTop: 25,
  
  backgroundColor: "#20b2aa",
  height: 50,
  borderRadius: 15,
  width:75,
  alignItems:'center',
  justifyContent:'center',
   marginLeft:150,
   borderWidth:2,
   
  

},
buttonText: {
  fontSize: 19,
  color: "white",

  
 
},

})

export default ADD_GEOFANCE