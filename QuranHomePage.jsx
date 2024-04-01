import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import { Verses, Details } from './QuranData'; 

export default function QuranHomePage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [mode, setMode] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleVerses, setVisibleVerses] = useState(true);
  const [filteredVerses, setFilteredVerses] = useState(Verses);
  const [visibleJuz, setVisibleJuz] = useState(false);
  const [filteredJuz, setFilteredJuz] = useState(Details);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setMode(isEnabled ? 'dark' : 'light');
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = Verses.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredVerses(filtered);
  };

  const toggleVisibleVerses = () => {
    setVisibleVerses(true);
    setVisibleJuz(false);
    setSearchQuery('');
    setFilteredVerses(Verses);
    setFilteredJuz(Details);
  };

  const toggleVisibleJuz = () => {
    setVisibleJuz(true);
    setVisibleVerses(false);
    setSearchQuery('');
    setFilteredVerses(Verses);
    setFilteredJuz(Details);
  };

  const renderVerseItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );

  const renderJuzItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.juz}</Text>
    </View>
  );

  return (
    <View style={mode === 'dark' ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.header}>
        <Switch
          style={styles.toggleSwitch}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TextInput
          style={styles.searchBar}
          onChangeText={handleSearch}
          value={searchQuery}
          placeholder="Search Verses"
          placeholderTextColor={mode === 'dark' ? '#fff' : '#000'}
        />
        <TouchableOpacity onPress={toggleVisibleVerses} style={[styles.button, visibleVerses && styles.activeButton]}>
          <Text style={styles.buttonText}>Show Verses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleVisibleJuz} style={[styles.button, visibleJuz && styles.activeButton]}>
          <Text style={styles.buttonText}>Show Juz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {(visibleVerses && filteredVerses.length > 0) && (
          <FlatList
            data={filteredVerses}
            renderItem={renderVerseItem}
            keyExtractor={(item) => item.id}
          />
        )}

        {(visibleJuz && filteredJuz.length > 0) && (
          <FlatList
            data={filteredJuz}
            renderItem={renderJuzItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
  },
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  toggleSwitch: {
    height: 40,
    width: 50,
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginLeft: 1,

  },
  activeButton: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  desc: {
    color: '#666',
  },
});
