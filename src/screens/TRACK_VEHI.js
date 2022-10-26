import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native'
import React,{Component} from 'react'
import { useState,useEffect,useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Polygon,Polyline,} from 'react-native-maps';
import {getDistance, getPreciseDistance,isPointInPolygon} from 'geolib';
import * as geolib from 'geolib';
const latlng={
  latitude:33.5651,
  longitude: 73.0169,
}
const count=0;
let myTimer=0;
const TRACK_VEHI = ({route,navigation}) => {
  const {selectvehi}=route.params;
   //................................manage react hooks states....................................
   const [myUserData, setMyUserData]=useState([]);
   const [isLoaded,setIsLoaded]= useState(true);
   const [state,setstate]=useState(latlng);
  const [strtdis,setstrtdis]=useState(latlng);
   const [dist,setdist]=useState(0)
   const [tim,settim]=useState(0)
   const [sped,setsped]=useState(0)
  //.................................manage epmloyee api data..................................
  const [getVeData,setgetVeData]=useState(0);

//.................................alerts usestate............................
const[vehialerts,setvehialerts]=useState(0);
const[speedalert,setspeedalert]=useState(0);
   
// veriable for alerts

   
  //..............................calling to show fence api///////////////////////////
  const getUserData= async()=>{
    
    try{
     const response=await fetch(`http://192.168.100.149/geoFance_API/api/getfence/SingleFence?fence=${selectvehi}`,{
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
   //get employee api........................................
   const getVehiData= async()=>{
    
    try{
     const response=await fetch(`http://192.168.100.149/geoFance_API/api/getReport/GetFenceName?fence=${selectvehi}`,{
       method:'get',
     });
     
     
      const myVehiData=await response.json();
      setgetVeData(...myVehiData);

      

    }catch(error){
      console.log(error);
    }
  }

   useEffect(()=>{
     getVehiData();

   },[])
  // console.log(getVeData);
   //get speed limit of user
   
//console.log(getVeData.SpeedLimit);
   ///..................................
//drag functions
const onMarkPress = (e) => {    
  const {coordinate} = e.nativeEvent
  setstate(coordinate)
  setstrtdis(coordinate)
  
  
};


//function for time interval
const componentDidMount=()=>{
  let t=0;
  myTimer=setInterval(()=>{
    t++,
    setstate(prevstate=>({
      latitude:prevstate.latitude+0.00011,
      longitude:prevstate.longitude+0.000013,
      
    }));   
   settim(t);
  },1000); 

}
// function to stop marker
const componentDidUnmount=()=>{
 clearInterval(myTimer);
}
//obtain distance//////////////////////////////////
let dis =geolib.getDistance(
  {latitude:state.latitude,longitude:state.longitude},
  {latitude:strtdis.latitude,longitude:strtdis.longitude},
);
//formula for speed 
let sp=(dis/tim);

//compairing speed 


if(sp>getVeData.SpeedLimit)
{

  Alert.alert('               Speed Alert','you exceed the speed limit please reduce your speed',[ {
    text: 'OK', 
    onPress: () => myfunc()
  },{
    text: 'Cancel',
    //onPress: () => myfunct(),
    style: 'cancel',
  },],{cancelable:false});
 
}


///fence alert
let f=geolib.isPointInPolygon(state,myUserData);

if(f==false)
{
  
  Alert.alert('               Fence Alert','YOU ARE OUT FROM THE FENCE',[ {
    text: 'OK', 
    onPress: () => myfunc()
  },{
    text: 'stop',
    onPress: () => myfunct(),
    style: 'stop',
  },]);
  
}else{
  //console.log('you are in the fence');
}

//alert function which increments the values when click on ok of alert
const myfunc=()=>{
  setspeedalert(speedalert=>speedalert+1);
  console.log(speedalert);

}
// this function will stop the marker to move forword
const myfunct=()=>{
  clearInterval(myTimer);
}
const getDis=()=>{
  //console.log(getVeData);

  setdist(dis);
  setsped(sp);
  submit();


  }

  //sent data to server when click on cal button
  const submit=async()=>{
    // alert(vehicleNo);
   // alert(date);
   const response= await fetch("http://192.168.100.149/ReportAPI/api/Rport/ReportData", {
     method: 'POST',
     headers: {
       "Content-Type": "application/json",
         "Accept": 'application/json'
      },
       body: JSON.stringify({
        EmployeeName:getVeData.EmpName,
        GeofenceName:getVeData.GeoFence,
        alerts:speedalert,
        VehicleNo:selectvehi,
        
     })
       
 
  })
   const json=await response.status;
   if(json===200) 
   {
     alert('Report Stored successfully');
     //navigation.navigate('MANAGE_VEHICLE');
   }
 
   }


  
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
       
       />

      { myUserData.map((cord)=>
      <Marker coordinate={cord}/>
      )}
      {
         <Marker draggable
          coordinate={state} 
          onDragEnd={onMarkPress}
          title={"fahad"}   
          />
      }





     </MapView>
   </View>
   <View style={{}}>
        <Text style={{fontSize:20}}>Speed:{sped} m/h</Text>
        <Text style={{fontSize:20}}>Distance:{dist} m</Text>
      </View>
    
      <View style={{flexDirection:'row',marginBottom:-90,marginTop:10}}>
   
   <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:15,height:50,
    borderRadius:15,justifyContent:'center',borderWidth:2}} onPress={()=> componentDidMount()}>
     <Text style={{fontSize:20,textAlign:'center',justifyContent:'center',alignItems:'center'}}>Start</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:15,height:50,
    borderRadius:15,justifyContent:'center',borderWidth:2}} onPress={()=> componentDidUnmount()}>
     <Text style={{fontSize:20,textAlign:'center',justifyContent:'center',alignItems:'center'}}>Stop</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:15,height:50,
    borderRadius:15,justifyContent:'center',borderWidth:2}} onPress={()=> getDis()}>
     <Text style={{fontSize:20,textAlign:'center',justifyContent:'center',alignItems:'center'}}>calcul-Dis</Text>
   </TouchableOpacity>
 </View>
  
  
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    
    height: '88%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default TRACK_VEHI