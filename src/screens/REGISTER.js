import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert, ScrollViewComponent, ScrollView } from 'react-native';

const REGISTER=({navigation})=> {
  const [UserName, setUsername]= useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress]= useState("");
  const [Pass, setPassword] = useState("");


  //...........................subsubmit function..................
  const subSubmit=()=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(UserName==''){
      alert('Please Enter your user name');
    }else if(Email=='')
    {
     alert('Please Enter your Email');
    }else if (Address=='')
    {
      alert('Please Enter your address');
    }else if(Pass=='')
    {
      alert('Please Enter your password');
    }else
    {
      submit();

    }

  }

  
 
  
  const submit=async()=>{
   // Alert.alert(UserName);
   // Alert.alert(Email);
   // Alert.alert(Address);
   // Alert.alert(Pass);
   
     
      const response= await fetch("http://192.168.100.149/RegisterAPI/api/register/register", {
           method: 'POST',
          headers: {
             "Content-Type": "application/json",
              "Accept": 'application/json'
           },
            body: JSON.stringify({

                UserName:UserName,
                Email: Email,
                Address:Address,
                Password: Pass,
           })
            

        })
        const json=await response.status;
        if(json===200) 
        {
          alert('you are registered successfully');
          navigation.navigate('HOME');
        }
    
 }
  return (
    
    <View style={styles.container}>
      <ScrollView>
     
      <Text style={styles.mainHeader}>REGISTRATION FORM</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter UserName:</Text>
        <TextInput style={styles.inputStyle} placeholder={"Enter valid username"} autoCapitalize="none" autoCorrect={false}
        value={UserName}
        onChangeText={(UserName) => setUsername(UserName)}
        />

        <Text style={styles.labels}>Enter Email:</Text>
        <TextInput style={styles.inputStyle} placeholder={"Enter Email"} autoCapitalize="none" autoCorrect={false}
        value={Email}
        onChangeText={(Email) => setEmail(Email)}
        
        />
        <Text style={styles.labels}>Enter your Address:</Text>
        <TextInput style={styles.inputStyle} placeholder={"Enter Your Address"} autoCapitalize="none" autoCorrect={false}
        value={Address}
        onChangeText={(Address) => setAddress(Address)}
        
        />

        <Text style={styles.labels}>Enter Password:</Text>
        <TextInput style={styles.inputStyle} placeholder={"Enter valid Password"} autoCapitalize="none" autoCorrect={false}
        value={Pass}
        onChangeText={(Pass) => setPassword(Pass)}
        
        secureTextEntry={true}/>

    </View>
    <TouchableOpacity style={styles.buttonStyle} 
        onPress={()=> subSubmit()} >
            <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        </ScrollView>
        
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#add8e6',
    height:'100%',

  },
  mainHeader:{
    marginTop:20,
    fontSize:30,
    color:"#2f4f4f",
    textAlign:'center',
    fontWeight:'bold',
    //backgroundColor:'#00ffff'
},
labels:{
  marginTop:10,
  fontSize:23,
  fontWeight:'bold',
  color:"#696969",
  marginLeft:20,

},

inputStyle:{
 // borderWidth:2,
  borderColor: "#008b8b",
  //paddingHorizontal: 15,
 // paddingVertical: 7,
  //borderRadius:1,
  //fontFamily:"regular",
  fontSize:17,
  width:310,
  marginLeft:10,
  fontWeight:"bold",
  marginTop:5,
  borderBottomWidth:2,
  //borderLeftWidth:1,
  //borderRightWidth:1,

  },
  buttonStyle:{
    marginTop:30,
    borderColor:"#fff",
    borderWidth:1,
    backgroundColor:"#2f4f4f",
    
    height:50,
    borderRadius:500,
    marginLeft:70,
    width:230,

},
buttonText:{
  fontSize:20,
  color:"white",
  textAlign:'center',
  paddingTop:9,
  fontWeight:"bold",
  },
});
export default REGISTER;
