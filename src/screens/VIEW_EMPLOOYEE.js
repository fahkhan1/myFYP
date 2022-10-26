import React,{useEffect,useState} from 'react'
//import singleEmp from './child/singleEmp';
import { View,Text,StyleSheet,FlatList,Image,TextInput,ScrollView } from 'react-native'


const VIEW_EMPLOOYEE = ({navigation}) => {
  const [myUserData, setMyUserData]=useState();
  const [isLoaded,setIsLoaded]= useState(true);




  const getUserData= async()=>{
    
    try{
     const response=await fetch('http://192.168.100.149/Tracking/api/employee/getemployee',{
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


   useEffect(()=>{
     getUserData();

   },[])
   
  return (
    <View>
     
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
      renderItem={({item,})=>{
        return(
          <View style={styles.textStyle} >
            <Text style={{fontSize:20,textAlign:'center',}} onPress={()=>navigation.navigate('SingleEmp',
             {
              item
            }
            )}>EmployeeId:{item.EmployeeId}</Text>
            
            <Text style={{fontSize:20,textAlign:'center',}} onPress={()=>navigation.navigate('SingleEmp',{
              item
            })}>Name:  {item.Name}</Text>
            <Text style={{fontSize:20,textAlign:'center',}} onPress={()=>navigation.navigate('SingleEmp',{
              item
            })}>CNIC:  {item.Cnic}</Text>
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
   marginBottom:90,
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
export default VIEW_EMPLOOYEE