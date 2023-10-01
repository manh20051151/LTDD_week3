import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native'; 

import FirstScreen from './screen/FirstScreen'
import a_1 from './screen/1_a'

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
