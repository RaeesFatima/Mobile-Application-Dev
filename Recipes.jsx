import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    doc,
    query,
    where
} from 'firebase/firestore';

export default function Recipes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const recipesCollection = collection(db, 'recipes');

            onSnapshot(recipesCollection, async (querySnapshot) => {
                const newData = await Promise.all(querySnapshot.docs.map(async (recipeDoc) => {
                    const recipeData = recipeDoc.data();

                    
                    const ingredientsCollection = collection(db, `recipes/${recipeDoc.id}/ingredients`);
                    const ingredientsSnapshot = await getDocs(ingredientsCollection);
                    const ingredients = ingredientsSnapshot.docs.map(ingredientDoc => ingredientDoc.data());

                    
                    const recipePreparationCollection = collection(db, `recipes/${recipeDoc.id}/recipePreparation`);
                    const recipePreparationSnapshot = await getDocs(recipePreparationCollection);
                    const recipePreparation = recipePreparationSnapshot.docs.map(recipePreparationDoc => recipePreparationDoc.data());

                    return { ...recipeData, ingredients, recipePreparation };
                }));

                setData(newData);
            });
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.recipeContainer}>
                        <Text style={[styles.categoryName, styles.recipeTitle]}>{item.title}</Text>
                        <View style={styles.recipeDescriptionContainer}>
                        <Text style={[styles.categoryName, styles.recipeDescription]}>{item.description}</Text>
                        </View>
                        <Text style={[styles.categoryName, styles.recipe]}>Nutritions: (Per Serving)</Text>

                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <View style={{ flex: 1 }}>
                                <View style={[styles.nutritions]}>
                                    <View style={styles.calorieCountContainer}>
                                        <Text style={[styles.calorieCount]}>{item.calories}</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>Calorie</Text>
                                        <Text style={styles.text}>Kcal</Text>
                                    </View>
                                </View>

                                <View style={[styles.nutritions]}>
                                    <View style={styles.calorieCountContainer}>
                                        <Text style={[styles.calorieCount]}>{item.carbs}</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>Carbs</Text>
                                        <Text style={styles.text}>gram</Text>
                                    </View>
                                </View>

                                <View style={[styles.nutritions]}>
                                    <View style={styles.calorieCountContainer}>
                                        <Text style={[styles.calorieCount]}>{item.protein}</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>Protein</Text>
                                        <Text style={styles.text}>gram</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                                <Image style={styles.image} source={{ uri: item.img }} />
                            </View>
                        </View>

                        <Text style={[styles.categoryName, styles.recipe]}>Ingredients: (Per Serving)</Text>
                        <View style={styles.ingredientsContainer}>
                            <FlatList
                                data={item.ingredients}
                                keyExtractor={(ingredient, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <Text style={[styles.categoryName, styles.ingredientText]}>
                                         {item.name}: {item.quantity}
                                    </Text>
                                )}
                            />
                        </View>

                        <Text style={[styles.categoryName, styles.recipe]}>Recipe Preparation:</Text>
                        <View style={styles.ingredientsContainer}>
                            <FlatList
                                data={item.recipePreparation}
                                keyExtractor={(recipes, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <Text style={[styles.categoryName, styles.ingredientText]}>
                                         {item.step}
                                    </Text>
                                )}
                            />
                        </View>
                    </View>
                )}
            />
            <StatusBar style="auto" backgroundColor='#fff' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    recipeContainer: {
        marginBottom: 20,
        backgroundColor: '#f8f8f8',
        padding: 15,
        // borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
    },
    image: {
        width: 180,
        height: 175,
        borderRadius: 90,
        marginTop: 20,
    },
    categoryName: {
        fontSize: 20,
        marginBottom: 5,
    },
    recipeTitle: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    recipeDescriptionContainer:{
        backgroundColor: '#F5EBE4',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    recipeDescription: {
        fontSize: 16,
        // color: '#898c8a',
        // backgroundColor:'#fff',
        paddingLeft:10,
    },
    recipe: {
        fontWeight: '500',
    },
    recipePrepText: {
        fontWeight: '300',
        color: 'black',
    },
    nutritions: {
        backgroundColor: '#F5EBE4',
        height: 60,
        width: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 8,
        elevation: 5,
        flexDirection: 'row',
        marginBottom: 5,
    },
    calorieCountContainer: {
        backgroundColor: '#fcfcfc',
        height: 50,
        width: 55,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6,
        elevation: 5,
    },
    calorieCount: {
        color: 'black',
        textAlign: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    text: {
        color: 'black',
    },
    ingredientsContainer: {
        backgroundColor: '#F5EBE4',
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
    },
    ingredientText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 2,
        // borderBottomColor:'black',
        // borderBottomWidth:1,
        backgroundColor:'#fff',
        height:50,
        // alignItems:'center',
        paddingLeft:10,
        paddingTop:8,
        flexWrap:'wrap',
        borderRadius:10
    },
});
