
import { Alert, Text, View,StyleSheet,Image, TouchableOpacity} from 'react-native';

import React from 'react';

const MANAGE_VEHICLE= ({navigation}) => {
 
  
  return (
    <View style={{backgroundColor:'#add8e6',}}> 
      <Text style={{fontSize:40,textAlign:'center',marginTop:30,borderWidth:1,borderColor:'#e0ffff'}}>Vehicle Details</Text>
    <View style={styles.containeer}> 
    
        <View style={styles.box} >
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/s1.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('SET_VEHICLE')} >Set Vehicle</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/add.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('DELETE_VEHICLE')}>Delete Vehicle</Text>
          </View>

        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/set.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}}onPress={()=>navigation.navigate('ADD_VEHICLE')}>Add Vehicle</Text>
          </View>

        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
          <Image
              style={styles.ImageStyle}
              source={require("../../assets/view.png")} />
            <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('VIEW_VEHICLE')}>View Vehicle</Text>
          </View>

        </View>
        <TouchableOpacity style={{width:100,height:50,backgroundColor:'#20b2aa',marginLeft:110,
                 marginTop:40,borderRadius:15,borderWidth:2}} onPress={()=>navigation.navigate('HOME')}>
      <Text style={{textAlign:'center',justifyContent:'center',fontSize:30,alignItems:'center'}}>Back</Text>
    </TouchableOpacity>
        
    </View>
    
    </View>
  
)

};
const styles=StyleSheet.create({
containeer:{
  
  marginTop:20,
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
  paddingTop:20,
 

},
ImageStyle:{
  width:'49%',
  height:'45%',
  padding:30,

},
inner:{
  flex:1,
  backgroundColor:'#fff0f5',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:30,
  borderWidth:1,
}
})


export default MANAGE_VEHICLE;