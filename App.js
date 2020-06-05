import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {FlatList} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Toast({message}) {
  return (
    <View>
      <Text
        style={styles.groceryItem}
        onPress={() => {
          ToastAndroid.show(message, ToastAndroid.SHORT);
        }}>
        {message}
      </Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Groceries');
  };

  return (
    <View style={styles.homeScreen}>
      <View style={styles.buttonContainer}>
        <Button title="Show the list" onPress={pressHandler} />
      </View>
    </View>
  );
}

function GroceryScreen() {
  const [grocery] = useState([
    {name: 'Rice', key: '1'},
    {name: 'Bread', key: '2'},
    {name: 'Meat', key: '3'},
    {name: 'Milk', key: '4'},
    {name: 'Cereal', key: '5'},
    {name: 'Sugar', key: '6'},
    {name: 'Pulses', key: '7'},
    {name: 'Refined Oil', key: '8'},
    {name: 'Ghee', key: '9'},
    {name: 'Wheat', key: '10'},
    {name: 'Spices', key: '11'},
    {name: 'Eggs', key: '12'},
    {name: 'Yougurt', key: '13'},
    {name: 'Table Salt', key: '14'},
    {name: 'Coffee', key: '15'},
    {name: 'Green Tea', key: '16'},
  ]);

  return (
    <View style={styles.groceryScreen}>
      <FlatList
        data={grocery}
        renderItem={({item}) => <Toast message={item.name} />}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Groceries" component={GroceryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 20,
    alignSelf: 'flex-end',
  },
  homeText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  groceryScreen: {
    padding: 24,
  },
  groceryItem: {
    marginTop: 24,
    padding: 15,
    backgroundColor: 'pink',
    fontSize: 22,
    textAlign: 'center',
  },
});
