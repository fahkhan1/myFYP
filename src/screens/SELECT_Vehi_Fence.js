import React,{useEffect, useState,Component} from 'react'
import { Button, Text, View,StyleSheet ,label, Alert,TextInput,TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';

const SELECT_Vehi_Fence = ({navigation}) => {
  const [vehiData,setvehiData]=useState([]);


  const getvehiData= async()=>{
    
    try{
     const response=await fetch('http://192.168.100.149/geoFance_API/api/Assign_vehicle/Getvehicleno',{
       method:'get',
     });
     
     
      const myvehiData=await response.json();
      //console.log(myData);
      setvehiData(myvehiData);
      setIsLoaded(false);
    }
    catch(error)
    {
      console.log(error);
  
    }
  
  }


  useEffect(()=>{
    
    getvehiData();
 
  },[])



   //useState for vehicle value which is selected will here.......
   const [selectvehi,setselectvehi]=useState("");

   const onValueChangevehi =(value) =>{
 
    setselectvehi(value);
    
   }
  return (
    <View style={styles.viewStyle}>
      <Text style={{fontSize:30,marginTop:90,marginLeft:40}}>Select Vehicle number {'\n'}                 TO </Text>
      <Text style={{fontSize:30,justifyContent:'center',textAlign:'center'}}>Track Vehicle</Text>
      <View style={{ flex: 0.3, fontSize: 14,flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
      <Text style={styles.textStyle}>Select Vehicle</Text>
        <Picker
          itemStyle={styles.itemStyle}
          mode="dropdown"
          style={styles.pickerStyle}
          selectedValue={selectvehi}
          onValueChange={onValueChangevehi.bind(onValueChangevehi)}
        >
          {vehiData.map((item, index) => (
            <Picker.Item
              color="#0087F0"
              label={item}
              value={item}
              index={index}
            />
          ))}
        </Picker>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:120}}>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:60,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2}}
      onPress={()=>navigation.navigate('HOME')}
     
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>BACK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:50,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2, }}
      onPress={()=>navigation.navigate('TRACK_VEHI',{selectvehi})}
      
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>NEXT</Text>
      </TouchableOpacity>

    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: "center",
   // flexDirection: "row",
    width: "100%",
    //justifyContent: "space-between",
   // alignItems: "center"
  // backgroundColor:'blue',
   
   
  },
  pickerStyle: {
    width: "55%",
    height: 20,
    color: "white",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    marginTop:33,
    marginRight:15,
    backgroundColor:'#008b8b'
   
  },
  textStyle: {
    marginTop:45,
    marginLeft:10,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007aff",
    marginTop:50,
    
  },

})

export default SELECT_Vehi_Fence