import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, Alert } from "react-native";
import { GlobalStyles } from "../components/constants/styles";

import { LinearGradient } from "expo-linear-gradient";

import Button from "../components/UI/Button";

function FindDeathsScreen({navigation}){
    
    const [day,setDay] = useState(0);
    const [month,setMonth] = useState(0);

    const [gunHata,setGunHata] = useState(1);
    const [ayHata,setAyHata] = useState(1);

    function saveDay(day){
        setDay(day);
        if(day>0 && day<=31){
            setGunHata(0);  
        }
        else{
            setGunHata(1);    
        }
    }
    function saveMonth(month){
        setMonth(month);
        if(month>0 && month<=12){
            setAyHata(0);
        }
        else{
            setAyHata(1);
        }
    }

    function searchDeaths(){
        if(gunHata == 0 && ayHata == 0){
            navigation.navigate('OlumlerEkrani',{day: day, month: month});
        }
        else{
            Alert.alert(
                "Wrong Input",
                "Please check the day and month value",
                [
                    { text: "OK", onPress: () => {} }
                ]
            );
        }
    }
    
    return(
        <LinearGradient 
            style={styles.mainContainer}
            colors={['#dadadaff','#ccd1d2','#8f9293','#626465']}
        >
            <Text style={styles.text}>Wikipedia Find Deaths</Text>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/2048px-Wikipedia_svg_logo.svg.png'
                }}
            />
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    keyboardType={"number-pad"}
                    maxLength={2}
                    placeholder={"Day"}
                    placeholderTextColor={GlobalStyles.colors.dark}
                    textAlign={'center'}
                    value={day}
                    onChangeText={saveDay}              
                />
                <TextInput 
                    style={styles.input}
                    keyboardType={"number-pad"}
                    maxLength={2}
                    placeholder={"Month"}
                    placeholderTextColor={GlobalStyles.colors.dark}
                    textAlign={'center'}
                    value={month}
                    onChangeText={saveMonth}    
                />
            </View>
            <Button onPress={searchDeaths}>Search</Button>
        </LinearGradient>
    );
}

export default FindDeathsScreen;


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    image:{
        height: 300,
        width: 300
    },
    text:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25,
        fontWeight: '450',
        letterSpacing: 3,
        color: GlobalStyles.colors.dark,
        fontFamily: 'serif'
    },
    inputContainer:{
        flexDirection: 'row'
    },
    input:{
        height: 40,
        width: '50%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        color: GlobalStyles.colors.dark,
        borderColor: GlobalStyles.colors.dark,
        fontSize: 17,
        marginBottom: 30
    }
});