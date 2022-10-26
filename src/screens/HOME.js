
import { Alert, Text, View,StyleSheet,Image} from 'react-native';

import React from 'react';

const HOME = ({navigation}) => {
 
  
  return (
    <View style={{backgroundColor:'#add8e6',}}> 
      <Text style={{fontSize:40,textAlign:'center',marginTop:20,borderWidth:1,borderColor:'#e0ffff'}}>DASH BOARD</Text>
    <View style={styles.containeer}> 
    
        <View style={styles.box} >
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/s1.png")}  />
            <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('MANAGE_VEHICLE')}>Manage Vehicle</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/s2.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}}onPress={()=>navigation.navigate('MANAGE_EMPLOYEE')}>Manage Employee</Text>
          </View>

        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/s3.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('ADD_GEOFANCE')}>Add GeoFance</Text>
          </View>

        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/s4.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('SELECT_Vehi_Fence')}>Track Vehicle</Text>
          </View>

        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/s5.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}}onPress={()=>navigation.navigate('Report')}>View Report</Text>
          </View>

        </View>
    </View>
    </View>
  
)

};
const styles=StyleSheet.create({
containeer:{
  
  marginTop:15,
  width:'100%',
  height:'85%',
  padding:20,
  flexDirection:'row',
  flexWrap:'wrap',
},
box:{
 
  width:'50%',
  height:'33.33%',
  padding:10,
  paddingTop:10,
  
 

},
ImageStyle:{
  width:'49%',
  height:'45%',
  padding:30,

},
inner:{
  flex:1,
  backgroundColor:'#e0ffff',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:30,
  //borderWidth:1,
}
})


export default HOME;