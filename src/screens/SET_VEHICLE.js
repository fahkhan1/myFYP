import { Alert, Text, View,StyleSheet,Image, TouchableOpacity} from 'react-native';

import React from 'react';

const SET_VEHICLE = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#add8e6',}}> 
    <Text style={{fontSize:35,textAlign:'center',marginTop:20,borderWidth:1,borderColor:'#e0ffff'}}>Assign Vehicle & GeoFence</Text>
  <View style={styles.containeer}> 
  
      <View style={styles.box} >
        <View style={styles.inner}>
        <Image
            style={styles.ImageStyle}
            source={require("../../assets/f1.png")} />
          <Text style={{fontSize:18,fontWeight:'bold',marginTop:6}} onPress={()=>navigation.navigate('ASSIGN_Vehicle')} >Assign Vehicle&Fence</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
        <Image
            style={styles.ImageStyle}
            source={require("../../assets/f2.png")} />
          <Text style={{fontSize:18,fontWeight:'bold',marginTop:6}} onPress={()=>navigation.navigate('VIEW_SETVEHICLE')}>View Vehicle&Fence</Text>
        </View>

      </View>
      
     
      <TouchableOpacity style={{width:100,height:50,backgroundColor:'#20b2aa',marginLeft:110,
               marginTop:40,borderRadius:15,borderWidth:2}} onPress={()=>navigation.navigate('MANAGE_VEHICLE')}>
    <Text style={{textAlign:'center',justifyContent:'center',fontSize:30,alignItems:'center'}}>Back</Text>
  </TouchableOpacity>
      
  </View>
  
  </View>

)

};
const styles=StyleSheet.create({
containeer:{

marginTop:6,
width:'100%',
height:'85%',
padding:20,
//flexDirection:'col',
flexWrap:'wrap',

},
box:{

width:'75%',
height:'35%',
padding:15,
marginLeft:35,
paddingTop:10,


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
}
   
  )


export default SET_VEHICLE