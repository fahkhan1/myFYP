import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native'
import React,{Component} from 'react'
import { useState,useEffect,useCallback } from 'react';
//import getDirections from 'react-native-google-maps-directions'
//import MapViewdirection from 'react-native-maps-directions';
//import { GOOGLE_MAP } from './GOOGLE_KEY';
//import GeoFencing from 'react-native-geo-fencing';
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Polygon,Polyline,} from 'react-native-maps';
import {getDistance, getPreciseDistance, getSpeed,isPointInPolygon} from 'geolib';
const latlng={
  latitude:33.6492,
  longitude: 73.0815,
  latitudeDelta: 0.20000,
  longitudeDelta: 0.0121,
}
const SHOW_FENCE = ({route,navigation}) => {
   //.............................vehicle no reciving here
   const {item}=route.params;
  //................................manage react hooks states....................................
  const [myUserData, setMyUserData]=useState([]);
  const [isLoaded,setIsLoaded]= useState(true);

  //..............................calling to show fence api///////////////////////////
  const getUserData= async()=>{
    
    try{
     const response=await fetch(`http://192.168.100.149/geoFance_API/api/getfence/SingleFence?fence=${item.VehicleNo}`,{
       method:'get',
     });
     
     
      const myData=await response.json();
      //console.log(myData);
      setMyUserData([...myData]);
      setIsLoaded(false);
     // console.log(`user data - > ${JSON.stringify(myData)}`)
      
  
       
  
    }catch(error){
      console.log(error);
  
    }
  
  }
  //console.log(myUserData);
  //console.log(array);
  
   useEffect(()=>{
     getUserData();
  
    
  
   },[])









return (
    <View>
    <View style={styles.container}>
     
     <MapView
      
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
        latitude: 33.643344,
        longitude: 73.078946,
        latitudeDelta: 0.20000,
        longitudeDelta: 0.0121,
      }}
     
       >
         
       <Polyline coordinates={myUserData} 
       fillColor="rgba(45,87,250,0.08)"
       strokeWidth={3}
      
       
       />

      { myUserData.map((cord)=>
      <Marker coordinate={cord}/>
      )}





     </MapView>
   </View>
  
  
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default SHOW_FENCE

