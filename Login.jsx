import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image} from 'react-native';
import { auth } from "./Firebase";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const createAccount=()=>{
        navigation.navigate('Signup')
    }


    const handleLogin = async () => {
        console.log('handle sign in');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            
            navigation.navigate('Categories');
            
        } catch (error) {
            const errorMessage = error.message;
            console.log('error message == ', errorMessage);
            Alert.alert('Error', errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.containerOne}>
            <View>
            <Image style={styles.image} source={require('./login.jpg')} />
            </View>
            
            <Text style={styles.register}>Recipe App</Text>
            <Text style={styles.sehatText}>Log in to access your personalized shake recipes and create your own delicious blends</Text>
            
            <View style={styles.inputContainer}>
                    <Icon name="mail" size={24} color="#FF9244" style={styles.icon}  />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={24} color="#FF9244" style={styles.icon}  />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.loginText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.registerBtn}
                onPress={handleLogin}
                >
                <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>
            <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorText}>Or signup with</Text>
                    <View style={styles.separatorLine} />
                </View>

                <View style={styles.socialMediaContainer}>
                    <Icon name="google" size={24} color="black" style={styles.socialMediaIcon}  />
                    <Icon name="instagram" size={24} color="black" style={styles.socialMediaIcon}  />
                    <Icon name="twitter" size={24} color="black" style={styles.socialMediaIcon}  />
                </View>

            <View style={styles.accountText}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={createAccount}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>
            </View>
            
            </View>
            
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    containerOne: {
        alignItems: 'center',
        // backgroundColor: 'grey',
        flex: 1,
        borderColor:'transparent',
        borderWidth:1,
        marginBottom:50,
        // marginTop:60,
        borderRadius:10,
        padding: 20,
        marginLeft:20,
        marginRight:20,
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'85%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        color: '#FF9244',
        marginBottom:10
    },
    register: {
        fontWeight: "bold",
        fontSize: 31,
        marginBottom: 23,
        color: "#FF9244",
        // marginTop:70
    },
    sehatText: {
        fontWeight: "bold",
        fontSize: 13,
        marginBottom: 50,
        color: "black",

    },
    account: {
        marginBottom: 14,
        color: '#0000009c'
    },
    registerBtn: {
        backgroundColor: '#FF9244',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        width: 280,
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    loginText: {
        color: 'black',
        marginTop: 30,
        marginLeft:5
    },
    noAccountText: {
        color: 'black',
        // marginTop: 5,
        marginLeft:5
    },
    image: {
        width: 150,
        height: 80,
        marginTop:50
    },
    
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop:20
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },
    separatorText: {
        paddingHorizontal: 10,
        color: 'black',
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:20
        marginTop:20
    },
    socialMediaIcon: {
        marginHorizontal: 10,
    },
    accountText:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    },
    createAccountText:{
        color: '#FF9244',
        // marginTop: 5,
        marginLeft:5,
        fontWeight:"500"
    }
});

export default Login;
