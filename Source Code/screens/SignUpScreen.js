import { useState } from "react";

import { StyleSheet, View, Text, Image, TextInput, Alert } from "react-native";

import { GlobalStyles } from "../components/constants/styles";

import { Octicons, Ionicons } from '@expo/vector-icons'; 

import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";

import { createUser } from "../util/request";

import LoadingOverlay from '../components/UI/LoadingOverlay';

import { LinearGradient } from "expo-linear-gradient";


function SingUpScreen({navigation}){


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [kayitOlduMu, setKayitOlduMu] = useState(false);

    function saveEmail(textData){

        setEmail(textData);
    }

    function savePassword(textData){

        setPassword(textData);
    }

    async function signUp(){
        setKayitOlduMu(true);
        try {
            await createUser(email,password);
            navigation.navigate('GirisEkrani',{email: email, password: password});
        } catch (error) {
            console.log(error);
            Alert.alert('Failed to register please try again');
            
        }
        setKayitOlduMu(false);
    }

    function geriDon(){
        navigation.goBack();
      }

    if(kayitOlduMu){
        return(
            <LoadingOverlay />
        );
    }

    return(
        <LinearGradient 
            style={styles.mainContaineR}
            colors={['#dadadaff','#ccd1d2','#8f9293','#626465']}
         >
            <View style={styles.backButtonContainer}>
                <IconButton 
                  icon="back"
                  color={GlobalStyles.colors.dark} 
                  size={40}
                  onPress={geriDon} 
                />
            </View>
             <Image
                style={styles.image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/2048px-Wikipedia_svg_logo.svg.png'
                }}
            />
            <View style={styles.secondContainer}>
                <Octicons name="person" size={35} color="black" />
                <TextInput 
                        style={styles.input}
                        keyboardType={"email-address"}
                        placeholder={""}
                        placeholderTextColor={GlobalStyles.colors.dark}
                        textAlign={'center'}
                        value={email}
                        onChangeText={saveEmail}      
                                    
                />
            </View>
            <View style={styles.secondContainer}>
                <Ionicons name="ios-key" size={30} color="black" />
                <TextInput 
                        style={styles.input}
                        keyboardType={"email-address"}
                        placeholder={""}
                        placeholderTextColor={GlobalStyles.colors.dark}
                        textAlign={'center'}
                        value={password}
                        onChangeText={savePassword}      
                                    
                />
            </View>

            <Button onPress={signUp}>Sign Up</Button>

        </LinearGradient>
    );

}

export default SingUpScreen;

const styles = StyleSheet.create({

    mainContaineR:{
        flex:1,
        alignItems: 'center',
        paddingTop: 15
    },
    image:{
        height: 270,
        width: 270
    },
    secondContainer:{
       flexDirection:'row',
       alignItems: 'center',
       padding: 15
    },
    input:{
        height: 40,
        width: '80%',
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.dark,
        color: GlobalStyles.colors.dark,
        fontSize: 17
    }

});