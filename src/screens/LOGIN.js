import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';


const LOGIN = ({navigation}) => {
    const [Email, setEmail] = useState("");
    const [Pass, setPassword] = useState("");
  
   const submit=()=>{
   // navigation.navigate('HOME');
    if(Email=='')
    {
        alert('Please Enter Email');
    }
     else if (Pass=='')
    {
        alert('please Enter your Password');
    }else
    {
        login();
   }
    
  }
    
    const login=async()=> {
      
      const response= await fetch(`http://192.168.100.149/RegisterAPI/api/register/login?Email=${Email}&&Password=${Pass}`,{
        method: 'Get',
      } )
      const json=await response.status;
     //alert(json);
           if(json===200){
       alert('success');
       navigation.navigate('HOME');
      }else{
         alert('please Register First');
      }}
    

    
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
            <Image
                style={styles.ImageStyle}
                source={require("../../assets/lo2.png")} />
            <Text style={styles.mainHeader}>Login Form</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Email:</Text>
                
                <TextInput style={styles.inputStyle} placeholder={"Enter valid Email"} autoCapitalize="none" autoCorrect={false}
                    value={Email}
                    onChangeText={(Email) => setEmail(Email)}
                />
              

               
                <Text style={styles.labels}>Password:</Text>
                <TextInput style={styles.inputStyle} placeholder={"Enter Password"} autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={Pass}
                    onChangeText={(Pass) => setPassword(Pass)}
                />
            </View>

            <TouchableOpacity style={styles.buttonStyle}  //onPress={()=>submit()}
            onPress={()=>submit()}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('REGISTER')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
            
        </View>

          )}


const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 10,
        paddingTop: 2,
        backgroundColor: "#add8e6",

    },
    ImageStyle: {
        //paddingTop: 100,
        height: 200,
        width: 5,
        paddingLeft: 205,
        marginLeft: 60,
        marginTop: 10,
        //borderRadius:50,
    },
    mainHeader: {
        marginTop: 10,
        fontSize: 35,
        color: "#696969",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    labels: {
        marginTop: 4,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#696969",

    },
    inputStyle: {
        //borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        //borderRadius: 1,
        //fontFamily:"regular",
        fontSize: 18,
        borderBottomWidth:2,
    
    },
    buttonStyle: {
        marginTop: 10,
        borderColor: "#20b2aa",
        borderWidth: 1,
        backgroundColor: "#20b2aa",

        height: 50,
        borderRadius: 15,

    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        paddingTop: 9,
    },
});
export default LOGIN;