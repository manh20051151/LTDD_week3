import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native'; 

import FirstScreen from './screen/FirstScreen'
import a_1 from './screen/1_a'
import b_1 from './screen/1_b'
import c_1 from './screen/1_c'
import d_1 from './screen/1_d'
import e_1 from './screen/1_e'
import b_2 from './screen/2_b'

const  Stack = createStackNavigator();

const Home = ({navigation}) => {
  return(
    <View>
        <Button title='FirstScreen' 
          onPress={()=>{
            navigation.navigate('FirstScreen');
          }}
        />
        <Button title='a_1' 
          onPress={()=>{
            navigation.navigate('a_1');
          }}
        />
          <Button title='b_1' 
          onPress={()=>{
            navigation.navigate('b_1');
          }}
        />
          <Button title='c_1' 
          onPress={()=>{
            navigation.navigate('c_1');
          }}
        />
            <Button title='d_1' 
          onPress={()=>{
            navigation.navigate('d_1');
          }}
        />
          <Button title='e_1' 
          onPress={()=>{
            navigation.navigate('e_1');
          }}
        />
            <Button title='b_2' 
          onPress={()=>{
            navigation.navigate('b_2');
          }}
        />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        
        <Stack.Screen name="FirstScreen" component={FirstScreen}></Stack.Screen>
        <Stack.Screen name="a_1" component={a_1}></Stack.Screen>
        <Stack.Screen name="b_1" component={b_1}></Stack.Screen>
        <Stack.Screen name="c_1" component={c_1}></Stack.Screen>
        <Stack.Screen name="d_1" component={d_1}></Stack.Screen>
        <Stack.Screen name="e_1" component={e_1}></Stack.Screen>
        <Stack.Screen name="b_2" component={b_2}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
