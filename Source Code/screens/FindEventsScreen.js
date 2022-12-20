import { useContext, useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, Alert } from "react-native";
import { GlobalStyles } from "../components/constants/styles";

import { LinearGradient } from "expo-linear-gradient";

import Button from "../components/UI/Button";
import ExitButton from "../components/UI/ExitButton";

import { AuthContext } from "../store/auth-context";
import { saveHistory } from "../util/request";


function FindEventsScreen({navigation}){

    const [day,setDay] = useState(0);
    const [month,setMonth] = useState(0);

    const [gunHata,setGunHata] = useState(1);
    const [ayHata,setAyHata] = useState(1);
    
    const authCtx = useContext(AuthContext);
    
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

    function searchEvents(){
        
        if(gunHata == 0 && ayHata == 0){
            saveHistory(authCtx.token,day,month,'event');
            navigation.navigate('OlaylarEkrani',{day: day, month: month});
            setDay(null);
            setMonth(null);
            setGunHata(1);
            setAyHata(1);
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
            colors={['#fff7bcf2','#ffda83','#fbbb67','#f69a3e']}
        >
            <View style={styles.exitContainer}>
                <ExitButton 
                    size={30}
                    icon="exit-outline"
                    color={GlobalStyles.colors.dark}
                    onPress={authCtx.logout}
                />  
            </View>
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
                    placeholder={"Day (1-31)"}
                    placeholderTextColor={GlobalStyles.colors.dark}
                    textAlign={'center'}
                    value={day}
                    onChangeText={saveDay}              
                />
                <TextInput 
                    style={styles.input}
                    keyboardType={"number-pad"}
                    maxLength={2}
                    placeholder={"Month (1-12)"}
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
        alignItems: 'center'
    },
    exitContainer:{
        alignItems: 'center',
        marginTop: 15,
        alignSelf: 'flex-end'
    },
    image:{
        height: 300,
        width: 300
    },
    text:{
        textAlign: 'center',
        padding: 10,
        fontSize: 25,
        fontWeight: '450',
        letterSpacing: 3,
        color: GlobalStyles.colors.dark,
        fontFamily: 'serif'
    },
    inputContainer:{
        flexDirection: 'row',
        padding: 10
    },
    input:{
        height: 40,
        width: '50%',
        margin: 4,
        borderWidth: 1,
        padding: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.dark,
        color: GlobalStyles.colors.dark,
        fontSize: 17,
        marginBottom: 14
    }
});