import React,{useState} from 'react'
import {Text, TextInput, View,StyleSheet, TouchableOpacity, Image, ScrollView,Button} from 'react-native'

import DatePicker from '@react-native-community/datetimepicker';



const ADD_VEHICLE = ({navigation}) => {
  const [vehicleNo, setVehicleNo]= useState("");
  const [vehileEngine, setVehicleEngine] = useState("");
  const [vehicleModel, setVehicleModel]= useState("");
  const [vehicleName, setVehiclename]= useState("");
  const [vehicleManu, setvehicleManu]= useState("");
  const [vehicleRegistration, setvehicleRegistration] = useState("");
  const [vehicleMeterRunning, setvehicleMeterRunning] = useState("");
  const [date, setDate] = useState('2019-5-19');


  


  const subsubmit=()=>{
    
   
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(vehicleNo==''){
      alert('Please Enter Vehicle No');
    }else if(vehileEngine=='')
    {
     alert('Please Enter Vehicle Engine No');
    }else if (vehicleModel=='')
    {
      alert('Please Enter Vehicle Model');
    }else if(vehicleName=='')
    {
      alert('Please Enter Vehicle Maker Name');
    }else if(vehicleManu=='')
    {
      alert('please Enter Manufacture Year')

    }else if(vehicleRegistration=='')
    {
      alert('please Enter Registration City')

    }
    else if(vehicleMeterRunning=='')
    {
      alert('please Enter Vehicle Meter Running')

    }else if(date=='')
    {
      alert('please Select Register Date')

    }
    else
    {
      submit();

    }

  }
  const submit=async()=>{
   // alert(vehicleNo);
  // alert(date);
  const response= await fetch("http://192.168.100.149/Tracking/api/Vehicle/AddVehicle", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
        "Accept": 'application/json'
     },
      body: JSON.stringify({

        VehicleNo:vehicleNo,
        EngineNo: vehileEngine,
        Maker:vehicleName,
        Mdel: vehicleModel,
        ManufactureYear:vehicleManu,
        RigesteredCity:vehicleRegistration,
        MeterRunning:vehicleMeterRunning,
        RegisterationDate:date,
    })
      

 })
  const json=await response.status;
  if(json===200) 
  {
    alert('Vehicle Details Stored successfully');
    navigation.navigate('MANAGE_VEHICLE');
  }

  }

  


  return (
    <View style={{backgroundColor:'#add8e6',width:'100%',height:'100%'}}>
      <ScrollView>
      
      
      
      <Text style={{textAlign:'center',fontSize:25,marginTop:5,}}>Add VEHICLE</Text>
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:15}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>VehicleNo:</Text>
      <TextInput style={{width: 250,height:40,marginLeft:3,borderColor:'green',fontSize:15,borderBottomWidth:2,}}
      placeholder={"Please Enter Vehicle No"}
       value={vehicleNo}
       onChangeText={(vehicleNo) => setVehicleNo(vehicleNo)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:15}}>
      <Text style={{fontSize: 20,marginLeft:5,}}> EngineNo:</Text>
      <TextInput style={{width: 250,borderBottomWidth:2,height:40,marginLeft:3,borderColor:'green'}}
      placeholder={"Please Enter Vehicle Engine No"}
       value={vehileEngine}
       onChangeText={(vehileEngine) => setVehicleEngine(vehileEngine)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:15}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>    Model  :</Text>
      <TextInput style={{width: 250,borderBottomWidth:2,height:40,marginLeft:10,borderColor:'green'}}
      placeholder={"Please Enter Vehicle Model"}
       value={vehicleModel}
       onChangeText={(vehicleModel) => setVehicleModel(vehicleModel)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:15}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>Maker Name:</Text>
      <TextInput style={{width: 220,borderBottomWidth:2,height:40,marginLeft:10,borderColor:'green'}}
      placeholder={"Please Enter Vehicle Name"}
       value={vehicleName}
       onChangeText={(vehicleName) => setVehiclename(vehicleName)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>Manufac year:</Text>
      <TextInput style={{width: 220,borderBottomWidth:2,height:40,marginLeft:3,borderColor:'green'}}
      placeholder={"Please Enter V_Manufacture Year"}
       value={vehicleManu}
       onChangeText={(vehicleManu) => setvehicleManu(vehicleManu)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>RegisterdCity:</Text>
      <TextInput style={{width: 220,borderBottomWidth:2,height:40,marginLeft:3,borderColor:'green'}}
      placeholder={"Please Enter V_Registraion city"}
       value={vehicleRegistration}
       onChangeText={(vehicleRegistration) => setvehicleRegistration(vehicleRegistration)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>Meter Runing:</Text>
      <TextInput style={{width: 220,borderBottomWidth:2,height:40,marginLeft:3,borderColor:'green'}}
      placeholder={"Please Enter V_Meter Running"}
       value={vehicleMeterRunning}
       onChangeText={(vehicleMeterRunning) => setvehicleMeterRunning(vehicleMeterRunning)}
      />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <Text style={{fontSize: 20,marginLeft:5,}}>Register Date:</Text>
      <TextInput style={{width: 110,borderBottomWidth:2,height:40,marginLeft:3,borderColor:'green',fontSize:17}}
       value={date}
       onChangeText={(date) => setDate(date)}
      />
    
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:60,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2}}
      
      onPress={()=>subsubmit()}
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>ADD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:50,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2, }}
      onPress={()=>navigation.navigate('MANAGE_VEHICLE')}
      
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>CANCEL</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  

})

export default ADD_VEHICLE