import React,{useEffect,useState} from 'react'
import { View,Text,StyleSheet,FlatList,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native'
const DELETE_VEHICLE = () => {
  const [myUserData, setMyUserData]=useState();
  const [isLoaded,setIsLoaded]= useState(true);
  const DeleteUser =async(id)=>{
     //alert(id);
    try{
    const response= await fetch(`http://192.168.100.149/Tracking/api/Vehicle/DeleteVehicle?id=${id}`,{
     method: 'Get',
   } );
   const json=await response.status;
   if(json===200){
       alert('user deleted successfully');
       getUserData();
 
   }else{
     //  alert('user not deleted');
   }
 }catch(error){
     console.log(error);
 }
     

 }
 useEffect(()=>{
     getUserData();

   },[])


 const getUserData= async()=>{
   
   try{
    const response=await fetch('http://192.168.100.149/Tracking/api/Vehicle/GetVehicle',{
      method:'get',
    });
    
    
     const myData=await response.json();
     //console.log(myData);
     setMyUserData(myData);
     setIsLoaded(false);

      

   }catch(error){
     console.log(error);

   }

 }

  return (
    <View style={{marginBottom:90}}>
     
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
   <TextInput 
   style={styles.inputStyle}
   placeholder='SearchBox'
   />
   <Image style={{position:"relative",right:50,top:5,width:29,height:29}}
   source={require("../../assets/icon1.png")} />

    </View>
   

    <FlatList style={styles.flatlistStyle}
     data={myUserData}
    renderItem={({item})=>{
         
        
      return(
        <View style={styles.textStyle} >
            <Text style={{fontSize:20,}} >VehicleId:  {item.VehicleId}</Text>
         <Text style={{fontSize:20}}>VehicleNo:  {item.VehicleNo}</Text>
          <Text style={{fontSize:20}}>EngineNo:  {item.EngineNo}</Text>
          <Text style={{fontSize:20}}>Vehicle Model:  {item.Mdel}</Text>
          <Text style={{fontSize:20}}>V_ManufactureYear:  {item.ManufactureYear}</Text>
          <Text style={{fontSize:20}}>V_RigesteredCity:  {item.RigesteredCity}</Text>
          <Text style={{fontSize:20}}>V_MeterRunning:  {item.MeterRunning}</Text>
          <Text style={{fontSize:20}}>V_RegisterationDate:  {item.RegisterationDate}</Text>
          <TouchableOpacity style={{width:'100%',height:40,borderWidth:2,alignItems:'center',justifyContent:'center',
           //marginLeft:270
           backgroundColor:'#008b8b'
          }} onPress={()=>DeleteUser(item.VehicleId)}>
              <Text style={{textAlign:'center',alignItems:'center',fontSize:20,color:'white'}}>Delete Employee</Text>
          </TouchableOpacity>
          

        </View>
        
        
      )
    }}
    
    
    />



 
  </View>
  )
}
const styles=StyleSheet.create({
  flatlistStyle:{
    marginTop:20,
   // width:'100%',
   // height:'100%',
  },
  inputStyle:{
    width:'100%',
    borderColor:'#008b8b',
    borderWidth:4,
    
    textAlign:'center',
    marginTop:8,
    marginLeft:29,
 },
 textStyle:{
  marginTop:7,
  fontSize:30,
 borderWidth:3,
 borderColor:'#5f9ea0',
 
 color:'#808080',
 

 }
   
}
);


export default DELETE_VEHICLE