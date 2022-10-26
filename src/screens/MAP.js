//import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet, Alert,TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Polyline } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';
//import Geolocation from "react-native-geolocation-service";
import Geolocation from '@react-native-community/geolocation';

const MAP = ({route,navigation}) => {
const {Next}=route.params;
  
const initialState = {
  latitude: null,
  longitude: null,
  
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,


}
  const [curentPosition, setCurentPosition] = useState(initialState);
  
  
 


  useEffect(() => {
   
   Geolocation.getCurrentPosition(
      (position) => {
  
     // alert(JSON.stringify(position))
     const {longitude,latitude}=position.coords;
     setCurentPosition({
      ...curentPosition,
      latitude,
      longitude,
    })    
    },
      error => console.log(error.message),
      {
        //enableHighAccuracy: true,
        timeout: 20000,
      }
    );

    
    
  }, [])
//console.log(curentPosition.longitude);

  
  //console.log(obj);
  const [markers,setmarkers]=useState([]);
  const myfun=async(e)=>{
   // console.log(e.nativeEvent.coordinate);

   
   const {latitude,longitude}=(e.nativeEvent.coordinate);
setmarkers([
  ...markers,{
  latitude,
  longitude,
  }
])
//console.log(latitude);
//api that store latitude and longitude into database
const response= await fetch("http://192.168.100.149/fypGeofanceAPI/api/GeoFance/addGeofance", {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
      "Accept": 'application/json'
   },
    body: JSON.stringify({
     
      Latitude:latitude,
      Longitude:longitude,
      GeoFenceName:Next,
  })
    

})
const json=await response.status;
if(json===200) 
{
  //alert('lat & Long  stored  successfully');
  console.log('latlong store success fully');
 
}else{
  alert('An error found in the network or any other issue');
}



  }
  
 


  return curentPosition.latitude ? (
    
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        cameraPosition={{auto: true, zoom: 10}}
        style={styles.map}
        showsUserLocation
        initialRegion={curentPosition}
        onPress={(event) => myfun(event)
    
        }
      >
         {
           // loop through markers array & render all markers
  markers.map((marker, i)=> (
   // console.log(marker)
      <MapView.Marker coordinate={marker} key={i} />
  ))
        }
         {
           // loop through markers array & render all markers
 
   
      <Polyline coordinates={markers}
      strokeColor="#006400"
      strokeWidth={6}
      />
  
        }
         
      </MapView>
      
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:45}}>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:5,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2}}
      onPress={()=>alert("Latlong stored successfully")}
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>ADD</Text>


      </TouchableOpacity>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:20,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2 }}
      
      onPress={()=>navigation.navigate('ADD_GEOFANCE')}
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>Back</Text>
      </TouchableOpacity>

    </View>
      
    </View>
    
   
    

  ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
});

export default MAP