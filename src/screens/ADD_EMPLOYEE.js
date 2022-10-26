import React,{useState} from 'react'
import { Text ,View,TextInput,TouchableOpacity, ScrollView} from 'react-native'

const ADD_EMPLOYEE = ({navigation}) => {
  const [EmpName, setEmpname]= useState("");
  const [EmpCNIC, setEmpCNIC] = useState("");
  const [EmpPhone, setEmpPhone]= useState("");
  const [EmpDrive, setEmpDrive] = useState("");
  const [EmpAddress, setEmpAddress] = useState("");
  //................................................submittttttt function...................
  const subSubmit=()=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(EmpName==''){
      alert('Please Enter Employee name');
    }else if(EmpCNIC=='')
    {
     alert('Please Enter Employee CNIC NO');
    }else if (EmpPhone=='')
    {
      alert('Please Enter Employee Phone NO');
    }else if(EmpDrive=='')
    {
      alert('Please Enter Employee Driving Lic NO');
    }else if(EmpAddress=='')
    {
      alert('please Enter Employee Address')

    }else
    {
      submit();

    }

  }
  const submit=async()=>{
  
    //alert(EmpName);
    //alert(EmpCNIC);
    //alert(EmpDrive);
    //alert(EmpPhone);
    //alert(EmpAddress);
    
      
       const response= await fetch("http://192.168.100.149/Tracking/api/employee/AddEmployee", {
           method: 'POST',
           headers: {
             "Content-Type": "application/json",
               "Accept": 'application/json'
            },
             body: JSON.stringify({
 
                Name:EmpName,
               Cnic: EmpCNIC,
                PhoneNumber:EmpPhone,
                DrivingLicense: EmpDrive,
                Address:EmpAddress,
           })
             
 
        })
         const json=await response.status;
         if(json===200) 
         {
           alert('Employee data entered successfully');
           navigation.navigate('MANAGE_EMPLOYEE');
         }
     
  }





  return (
    <View style={{backgroundColor:'#add8e6',width:'100%',height:'100%'}}>
      <ScrollView>
    <Text style={{textAlign:'center',fontSize:30,marginTop:20}}>ADD EMPLOYEE</Text>
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
    <Text style={{fontSize: 25,marginLeft:10,}}>Name:</Text>
    <TextInput style={{width:260 ,borderBottomWidth:2,height:40,marginLeft:5,borderColor:'green',fontSize:20}}
    placeholder={"Enter valid EmployeName"}
     value={EmpName}
     onChangeText={(EmpName) => setEmpname(EmpName)}
    />
  </View>

  <View style={{flexDirection: 'row', alignItems: 'center',marginTop:30}}>
    <Text style={{fontSize: 25,marginLeft:10,}}>CNIC: </Text>
    <TextInput style={{width: 260,borderBottomWidth:2,height:40,marginLeft:5,borderColor:'green',fontSize:20}}
    placeholder={"Enter Emplyoee CNIC"}
    value={EmpCNIC}
    onChangeText={(EmpCNIC) => setEmpCNIC(EmpCNIC)}
    />
  </View>

  <View style={{marginTop:20}}>
    <Text style={{fontSize: 25,marginLeft:10,}}>Phone NO:</Text>
    <TextInput style={{width: 260,borderBottomWidth:2,height:40,marginLeft:90,borderColor:'green',fontSize:20}}
    placeholder={"Enter Employee Phone No"}
    value={EmpPhone}
    onChangeText={(EmpPhone) => setEmpPhone(EmpPhone)}
    />
  </View>

  <View style={{marginTop:20}}>
    <Text style={{fontSize: 25,marginLeft:10,}}>Driving License:</Text>
    <TextInput style={{width: 260,borderBottomWidth:2,height:40,marginLeft:90,borderColor:'green',fontSize:20}}
    placeholder={"Enter Employee DrivingLic"}
    value={EmpDrive}
    onChangeText={(EmpDrive) => setEmpDrive(EmpDrive)}
    />
  </View>
  <View style={{marginTop:20}}>
    <Text style={{fontSize: 25,marginLeft:10,}}>ADDRESS:</Text>
    <TextInput style={{width: 260,borderBottomWidth:2,height:40,marginLeft:90,borderColor:'green',fontSize:20}}
    placeholder={"Enter Employee Address"}
    value={EmpAddress}
    onChangeText={(EmpAddress) => setEmpAddress(EmpAddress)}
    />
  </View>
  <View style={{flexDirection: 'row', alignItems: 'center',marginTop:45}}>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:60,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2}}
      onPress={()=> subSubmit()} 
    
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>ADD</Text>


      </TouchableOpacity>
      <TouchableOpacity style={{width:100,backgroundColor:'#20b2aa',marginLeft:40,height:50,
      borderRadius:15,justifyContent:'center',borderWidth:2 }}
      onPress={()=>alert('helo')}
      
      >
        <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>CANCEL</Text>
      </TouchableOpacity>

    </View>

    </ScrollView>
  </View>
  )
}

export default ADD_EMPLOYEE