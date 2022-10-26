import React from 'react'
import {Text, View,TouchableOpacity,StyleSheet} from 'react-native'

const SingleEmp = ({route,navigation}) => {
    //alert(item);
    const {item}=route.params;
  return (
    <View style={styles.containerStyle}>
       <Text style={{textAlign:'center',fontSize:30,}}>EMPLOYEE DETAILS</Text> 
        <Text style={styles.textStyle}>EMPLOYEE-ID:  {item.EmployeeId}</Text>
        <Text style={styles.textStyle}>EMPLOYEE-NAME:  {item.Name}</Text>
        <Text style={styles.textStyle}>EMPLOYEE-CNIC:  {item.Cnic}</Text>
        <Text style={styles.textStyle}>EMPLOYEE-Phone No:  {item.PhoneNumber}</Text>
        <Text style={styles.textStyle}>EMPLOYEE-Dri-License:  {item.DrivingLicense}</Text>
        <Text style={styles.textStyle}>EMPLOYEE-ADDRESS:  {item.Address}</Text>
        <View>
            <TouchableOpacity style={{width:90,height:80,backgroundColor:'#008b8b',justifyContent:'center',
         textAlign:'center',borderBottomWidth:3,borderRadius:15,marginLeft:120,marginTop:40}} onPress={()=>navigation.navigate('VIEW_EMPLOYEE')}>
                <Text style={{fontSize:20,justifyContent:'center',textAlign:'center',color:'white'}}>Go Back</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}
const styles=StyleSheet.create({
    containerStyle:{
        
        marginLeft:7,
        marginTop:30,
        


    },
    textStyle:{
        fontSize:20,
        marginLeft:7,
        marginTop:30,
    }

})

export default SingleEmp