import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, Alert } from "react-native";
import { GlobalStyles } from "../components/constants/styles";

import { LinearGradient } from "expo-linear-gradient";

import Button from "../components/UI/Button";


function FindEventsScreen({navigation}){

    const [day,setDay] = useState(0);
    const [month,setMonth] = useState(0);

    const [gunHata,setGunHata] = useState(1);
    const [ayHata,setAyHata] = useState(1);

    function saveDay(day){
        setDay(day);
        if(!day.startsWith(0)){
            // Şubat ayı(max 29 gün)
            if(month == 2){
                if(day>0 && day<=29){
                    setGunHata(0);
                }
                else{
                    setGunHata(1);    
                }
            }
            // 30 günlük aylar
            else if(month == 4 || month == 6 || month == 9 || month == 11){
                if(day>0 && day<=30){
                    setGunHata(0);
                }
                else{
                    setGunHata(1);    
                }   
            }
            // Geri kalan aylar(31 gün)
            else{
                if(day>0 && day<=31){
                    setGunHata(0);  
                }
                else{
                    setGunHata(1);    
                } 
            }
        }
        else {
            setGunHata(1);
        }
    }

    function saveMonth(month){
        setMonth(month);
        if(month>0 && month<=12 && !month.startsWith(0)){
            // Şubat ayı(max 29 gün)
            if(month == 2){
                if(day>0 && day<=29 && !day.startsWith(0)){
                    setGunHata(0);
                }
                else{
                    setGunHata(1);    
                }
            }
            // 30 günlük aylar
            else if(month == 4 || month == 6 || month == 9 || month == 11){
                if(day>0 && day<=30 && !day.startsWith(0)){
                    setGunHata(0);
                }
                else{
                    setGunHata(1);    
                }   
            }
            // Geri kalan aylar(31 gün)
            else{
                if(day>0 && day<=31 && !day.startsWith(0)){
                    setGunHata(0);  
                }
                else{
                    setGunHata(1);    
                } 
            }
            setAyHata(0);
        }
        else{
            setAyHata(1);
        }
    }

    function searchEvents(){
        
        if(gunHata == 0 && ayHata == 0){
            navigation.navigate('OlaylarEkrani',{day: day, month: month});
            setDay(null);
            setMonth(null);
        }
        else{
            Alert.alert(
                "Wrong Input",
                "Please check the day and month value.\nThe day and month value can't start with 0.\nThe day represented with a value between 1 and 31.\nThe month represented with a value between 1 and 12.\n1,3,5,7,8,10 and 12. months are lasts 31 days.\n4,6,9 and 11. months are lasts 30 days while 2. month lasts max 29 days.",
                [
                    { text: "OK", onPress: () => {} }
                ]
            );
            setDay(null);
            setMonth(null);
        }
    }
    
    return(
        <LinearGradient 
            style={styles.mainContainer} 
            colors={['#fff7bcf2','#ffda83','#fbbb67','#f69a3e']}
        >
            <Text style={styles.text}>Wikipedia Find Events</Text>
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
            <Button onPress={searchEvents}>Search</Button>
        </LinearGradient>
    );
}

export default FindEventsScreen;

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