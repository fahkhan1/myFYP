import React from 'react';
import { StyleSheet, Text, View,textAlign, } from 'react-native';
import { enableLatestRenderer } from 'react-native-maps';
import DESIGN from './src/screens/DESIGN';
import LOGIN from './src/screens/LOGIN';
import REGISTER from './src/screens/REGISTER';
import HOME from './src/screens/HOME';
import MANAGE_VEHICLE from './src/screens/MANAGE_VEHICLE';
import MANAGE_EMPLOYEE from './src/screens/MANAGE_EMPLOYEE';
import ADD_VEHICLE from './src/screens/ADD_VEHICLE';
import SET_VEHICLE from './src/screens/SET_VEHICLE';
import ADD_EMPLOYEE from './src/screens/ADD_EMPLOYEE';
import ADD_GEOFANCE from './src/screens/ADD_GEOFANCE';
import VIEW_VEHICLE from './src/screens/VIEW_VEHICLE';
import VIEW_EMPLOOYEE from './src/screens/VIEW_EMPLOOYEE';
import singleEmp from './src/screens/child/singleEmp';
import DELETE_EMPLOYEE from './src/screens/DELETE_EMPLOYEE';
import SINGLE_VEHI from './src/screens/child/SINGLE_VEHI';
import DELETE_VEHICLE from './src/screens/DELETE_VEHICLE';
import MAP from './src/screens/MAP';
import ASSIGN_Vehicle from './src/screens/ASSIGN_Vehicle';
import TRACK_VEHI from './src/screens/TRACK_VEHI';
import VIEW_SETVEHICLE from './src/screens/VIEW_SETVEHICLE';
import SHOW_FENCE from './src/screens/child/SHOW_FENCE';
import SELECT_Vehi_Fence from './src/screens/SELECT_Vehi_Fence';
import Report from './src/screens/Report';

//import MAP from './src/screens/MAP';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


enableLatestRenderer();
const App =() =>{
  const Stack = createNativeStackNavigator();
  return(
    
    <NavigationContainer >
      
      
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#008b8b',
          
          
          
        },

        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name='Design' component={DESIGN} 
      options={{ title: '      Vehicle Tracking & BaseStation', 
       
      }}
      />
       <Stack.Screen name='LOGIN' component={LOGIN} 
       options={{ title: 'LOGIN', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      
      />
      <Stack.Screen name='REGISTER' component={REGISTER} 
       options={{ title: 'REGISTER', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
        <Stack.Screen name='HOME' component={HOME} 
       options={{ title: 'HOME', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='MANAGE_VEHICLE' component={MANAGE_VEHICLE} 
       options={{ title: 'MANAGE VEHICLE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='MANAGE_EMPLOYEE' component={MANAGE_EMPLOYEE}
       options={{ title: 'MANAGE EMPLOYEE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='ADD_VEHICLE' component={ADD_VEHICLE} 
       options={{ title: 'ADD VEHICLE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='SET_VEHICLE' component={SET_VEHICLE} 
       options={{ title: 'SET VEHICLE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='ADD_EMPLOYEE' component={ADD_EMPLOYEE} 
      options={{ title: 'ADD EMPLOYEE', 
      headerStyle:{
        backgroundColor:'#008b8b',
        
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
       headerTitleAlign:'center',
     }} 
      
     />
      <Stack.Screen name='ADD_GEOFANCE' component={ADD_GEOFANCE} 
       options={{ title: 'ADD GEOFANCE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='VIEW_VEHICLE' component={VIEW_VEHICLE} 
       options={{ title: 'VIEW VEHICLE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='VIEW_EMPLOYEE' component={VIEW_EMPLOOYEE} 
       options={{ title: 'VIEW EMPLOYEE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='MAP' component={MAP} 
       options={{ title: 'MAP', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='DELETE_EMPLOYEE' component={DELETE_EMPLOYEE} 
       options={{ title: 'Delete Employee', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />

<Stack.Screen name='SingleEmp' component={singleEmp} 
       options={{ title: 'Employee Details', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='SINGLE_VEHI' component={SINGLE_VEHI} 
       options={{ title: 'Vehicle Details', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='DELETE_VEHICLE' component={DELETE_VEHICLE} 
       options={{ title: 'Delete Vehicle', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
     <Stack.Screen name='ASSIGN_Vehicle' component={ASSIGN_Vehicle} 
       options={{ title: 'Assign Vehicle&Fence', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='TRACK_VEHI' component={TRACK_VEHI} 
       options={{ title: 'TRACK VEHICLE', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='VIEW_SETVEHICLE' component={VIEW_SETVEHICLE} 
       options={{ title: 'View Assign Vehicle & fence', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='SHOW_FENCE' component={SHOW_FENCE} 
       options={{ title: 'Show Fence', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
      <Stack.Screen name='SELECT_Vehi_Fence' component={SELECT_Vehi_Fence} 
       options={{ title: 'Select Vehicle Fence', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
       <Stack.Screen name='Report' component={Report} 
       options={{ title: 'View Report', 
       headerStyle:{
         backgroundColor:'#008b8b',
         
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
      }}
      />
     
      


      
    
      
      </Stack.Navigator>
    </NavigationContainer>
   

    
  );
};
export default App;
