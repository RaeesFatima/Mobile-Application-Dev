import { View, Text, StyleSheet, FlatList, ListRenderItem, Image, Button ,TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';


type RootStackParamList = {
  Home: undefined;
  Recipes: undefined;
};

type RecipesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Recipes'>;
type RecipesScreenRouteProp = RouteProp<RootStackParamList, 'Recipes'>;

type Props = {
  navigation: RecipesScreenNavigationProp;
  route: RecipesScreenRouteProp;
};

interface Item {
  id: string;
  title: string;
  image:any
}


const data: Item[] = [
  { id: '1', title: 'Strawberry Banana Dream' ,image: require('./Strawberry Banana Dream.jpg')},
  { id: '2', title: 'Berry Bliss' ,image:require('./Berry Bliss.jpg')},
  { id: '3', title: 'Green Goddess' ,image:require('./Green Goddess.jpg')},
  { id: '4', title: 'Mango Tango' ,image:require('./Mango Tango.jpg')},
  { id: '5', title: 'Peanut Butter Power' ,image:require('./Peanut Butter Power.jpg')},
  { id: '6', title: 'Tropical Sunrise' ,image:require('./Tropical Sunrise.jpg')},
  { id: '7', title: 'Blueberry Burst' ,image:require('./Blueberry Burst.jpg')},
  { id: '8', title: 'Pineapple Paradise' ,image:require('./Pineapple Paradise.jpg')},
  { id: '9', title: 'Coconut Delight' ,image:require('./Coconut Delight.jpg')},
  { id: '10', title: 'Avocado Energizer' ,image:require('./Avocado Energizer.jpg')},
  { id: '11', title: 'Chocolate Mint Magic' ,image:require('./Chocolate Mint Magic.jpg')},
  { id: '12', title: 'Orange Creamsicle' ,image:require('./Orange Creamsicle.jpg')},
];


const CategoryDetails:React.FC = ({ navigation }) => {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Recipes')}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {/* <Icon name="arrow-right" size={30} color="#e8944f" /> */}
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      
      <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2} 
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
    backgroundColor: 'white',
  },
  item: {
    // padding: 20,
    // borderBottomWidth: 1,
    width:160,
    height:160,
    // borderBottomColor: '#ccc',
    // backgroundColor:'#dbdbdb',
    borderRadius:10,
    margin:10,
    justifyContent: 'space-evenly',
    marginBottom:25
  },
  title: {
    fontSize: 17,
    textAlign:'center',
    marginTop:7,
    // marginBottom:10,
    fontWeight:'400',
    backgroundColor:'#F5EBE4',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    height:50,
    padding:5,
    alignItems:'center'
    },
  image: {
    marginTop:10,
    width: 160,
    height: 130,
    marginBottom: 8,
    // borderRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
});

export default CategoryDetails;
