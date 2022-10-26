import React from 'react'
import {Text, View,TouchableOpacity,StyleSheet} from 'react-native'

const SINGLE_VEHI = ({route,navigation}) => {
    const {item}=route.params;
  return (
    <View style={styles.containerStyle}>
       <Text style={{textAlign:'center',fontSize:30,}}>Vehicle DETAILS</Text> 
        <Text style={styles.textStyle}>VehicleId:  {item.VehicleId}</Text>
        <Text style={styles.textStyle}>Vehicle-Name:  {item.Maker}</Text>
        <Text style={styles.textStyle}>VehicleNo:  {item.VehicleNo}</Text>
        <Text style={styles.textStyle}>V_EngineNo:  {item.EngineNo}</Text>
        <Text style={styles.textStyle}>Vehicle Model:  {item.Mdel}</Text>
        <Text style={styles.textStyle}>V_ManufactureYear:  {item.ManufactureYear}</Text>
        <Text style={styles.textStyle}>V_RigesteredCity: {item.RigesteredCity}</Text>
        <Text style={styles.textStyle}>V_MeterRunning: {item.MeterRunning}</Text>
        <Text style={styles.textStyle}>V_Rigestered-Date: {item.RegisterationDate}</Text>
        <View>
            <TouchableOpacity style={{width:90,height:80,backgroundColor:'#008b8b',justifyContent:'center',
         textAlign:'center',borderBottomWidth:3,borderRadius:15,marginLeft:120,marginTop:40}} onPress={()=>navigation.navigate('VIEW_VEHICLE')}>
                <Text style={{fontSize:20,justifyContent:'center',textAlign:'center',color:'white'}}>Go Back</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}
const styles=StyleSheet.create({
    containerStyle:{
        
        marginLeft:7,
        marginTop:5,
        


    },
    textStyle:{
        fontSize:20,
        marginLeft:7,
        marginTop:20,
    }

})

export default SINGLE_VEHI