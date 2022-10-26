import React,{useEffect, useState,Component} from 'react'
import { Button, Text, View,StyleSheet ,label, Alert,TextInput,TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';


function ASSIGN_Vehicle({navigation}) {
  const [myUserData, setMyUserData]=useState([]);
  const [isLoaded,setIsLoaded]= useState(true);
  const [Data,setData]=useState([]);
  const [vehiData,setvehiData]=useState([]);
  //for fence dropdown
  const getUserData= async()=>{
    
    try{
     const response=await fetch('http://192.168.100.149/geoFance_API/api/Default/GetFenceName',{
       method:'get',
     });
     
     
      const myData=await response.json();
      //console.log(myData);
      setMyUserData(myData);
      setIsLoaded(false);
    }
    catch(error)
    {
      console.log(error);
  
    }
  
  }

  ////for employee drop down api
  const getData= async()=>{
    
    try{
     const response=await fetch('http://192.168.100.149/geoFance_API/api/Assign_employe/GetemploeeName',{
       method:'get',
     });
     
     
      const myempData=await response.json();
      //console.log(myData);
      setData(myempData);
      setIsLoaded(false);
    }
    catch(error)
    {
      console.log(error);
  
    }
  
  }
  //for vehicle drop downlist
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

  
  //use effect calling
   useEffect(()=>{
     getUserData();
     getData();
     getvehiData();
  
   },[])
  // console.log(myUserData);
   //console.log(Data);
   //console.log(selectvehi);
  //usestate for fence value which is selected will save here.......
  const [selectedcat,setselectedcat]=useState("");
  //usestate for employee value which is selected will save here
  const[selectEmp,setselectEmp]=useState("");
  //useState for vehicle value which is selected will here.......
  const [selectvehi,setselectvehi]=useState("");
  //usestate for text field..................
  const [speed,setspeed]=useState()
  //function for fence selected 
const onValueChangeCat =(value) =>{
 
 setselectedcat(value);
 
}
//function for employee selected
const onValueChangeEmp =(value) =>{
 
  setselectEmp(value);
  
 }
 //function for vehicle select
 const onValueChangevehi =(value) =>{
 
  setselectvehi(value);
  
 }
 //console.log(selectedcat);
 //console.log(selectEmp);
 const Submit=async()=>{
  //alert(selectedcat);
  //alert(selectEmp);
  //alert(selectvehi);
  //alert(speed);
  
  const response= await fetch("http://192.168.100.149/AddDropDownAPI/api/DropDownList/AddFence", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
        "Accept": 'application/json'
     },
      body: JSON.stringify({

        EmpName:selectEmp,
        VehicleNo: selectvehi,
        GeoFence:selectedcat,
        SpeedLimit: speed,
        
    })
      

 })
  const json=await response.status;
  if(json===200) 
  {
    alert('Gefence assign success fully ');
    navigation.navigate('SET_VEHICLE');
  }

 }


return (
  <View style={styles.viewStyle}>
   
      <View style={{  flex: 0.3, fontSize: 14,flexDirection:'row',justifyContent:'space-between',}}>
      <Text style={styles.textStyle}>Select Fence</Text>
        <Picker
          itemStyle={styles.itemStyle}
          mode="dropdown"
          style={styles.pickerStyle}
          selectedValue={selectedcat}
          onValueChange={onValueChangeCat.bind(onValueChangeCat)}
        >
          {myUserData.map((item, index) => (
            <Picker.Item
              color="#0087F0"
              label={item}
              value={item}
              index={index}
            />
          ))}
        </Picker>
      </View>
      
      <View style={{  flex: 0.3,fontSize: 14,flexDirection:'row',justifyContent:'space-between',}}>
      <Text style={styles.textStyle}>Select Employee</Text>
        <Picker
          itemStyle={styles.itemStyle}
          mode="dropdown"
          style={styles.pickerStyle}
          selectedValue={selectEmp}
          onValueChange={onValueChangeEmp.bind(onValueChangeEmp)}
        >
          {Data.map((item, index) => (
            <Picker.Item
              color="#0087F0"
              label={item}
              value={item}
              index={index}
            />
          ))}
        </Picker>
      </View>
      <View style={{ flex: 0.3, fontSize: 14,flexDirection:'row',justifyContent:'space-between',}}>
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
     <View style={{  fontSize: 14,flexDirection:'row',justifyContent:'space-between',}}>
       <Text style={styles.textStyle}>Speed Limit</Text>
       <TextInput style={{width:200 ,borderWidth:2,height:50,fontSize:20,marginTop:35,marginRight:15,backgroundColor:'#008b8b',borderColor:'#008b8b'}}
    placeholder={"Enter Speed Limit"}
     value={speed}
     onChangeText={(speed) => setspeed(speed)}
    />
     </View>
     <View style={{flexDirection: 'row', alignItems: 'center',marginTop:45}}>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:60,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2}}
      onPress={()=>navigation.navigate('SET_VEHICLE')}
    
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>Back</Text>


      </TouchableOpacity>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:40,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2 }}
      
      
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}} onPress={()=>Submit()}>Submit</Text>
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
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007aff",
    marginTop:50,
    
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
    
  }})

export default ASSIGN_Vehicle