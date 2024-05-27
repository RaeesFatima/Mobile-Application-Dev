import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const db = getFirestore();
    const snapshot = collection(db, 'helloworld');
    onSnapshot(snapshot, (querySnapshot) => {
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      this.setState({ data: newData });
    });
  };

  goToDetails = () => {
    this.props.navigation.navigate('CategoryDetails');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={this.goToDetails}>
                <View style={styles.category}>
                  <View style={styles.categoryText}>
                    <Text style={styles.categoryName}>{item.title}</Text>
                    <Text style={styles.categoryQuantity}>{item.quantity}</Text>
                    <View style={styles.rating}>
                      <Image style={styles.star} source={require('./star.png')} />
                      <Image style={styles.star} source={require('./star.png')} />
                      <Image style={styles.star} source={require('./star.png')} />
                      <Image style={styles.star} source={require('./star.png')} />
                      <Image style={styles.star} source={require('./star.png')} />
                      <Text style={{ color: 'grey', marginLeft: 5 }}>{item.rating}</Text>
                    </View>
                  </View>
                  <View>
                    <Image style={styles.image} source={{ uri: item.img }} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        <StatusBar style="auto" backgroundColor="#FF8329" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EBE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    backgroundColor: '#FFF5F5',
    marginBottom: 5,
    marginTop: 10,
    height: 120,
    width: 352,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#grey',
  },
  image: {
    width: 130,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  categoryText: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 30,
  },
  categoryName: {
    fontSize: 20,
  },
  categoryQuantity: {
    fontSize: 15,
    color: 'grey',
  },
  imageContainer: {
    elevation: 5,
  },
  star: {
    marginTop: 5,
    height: 10,
    width: 10,
    marginLeft: 1,
    marginRight: 3,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Categories;
