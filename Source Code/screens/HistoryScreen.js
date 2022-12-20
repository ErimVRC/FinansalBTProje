import { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/UI/IconButton";

import { LinearGradient } from "expo-linear-gradient";

import { GlobalStyles } from "../components/constants/styles";

import { getHistory } from "../util/request";
import LoadingOverlay from "../components/UI/LoadingOverlay";

import { AuthContext } from "../store/auth-context";

function HistoryScreen({navigation}){

    const [kayitGetirdiMi, setKayitGetirdiMi] = useState(false);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function getHistorys(){
            setKayitGetirdiMi(true);
            try {
                const history = await getHistory();
                console.log(history);
                /*const filteredHistory = history.filter((data)=>{
                    return data.userToken == authCtx.token
                });
                console.log(filteredHistory);*/
            } catch (error) {
                Alert.alert('Fail');
            }
            setKayitGetirdiMi(false);     
        }
        getHistorys();
    },[]);


    if(kayitGetirdiMi){  
        return(
            <LoadingOverlay />
        );
    }

    function geriDon(){
        navigation.goBack();
      }

    return(
        <LinearGradient 
            style={styles.container}
            colors={['#d2f8fff2','#9df2ff','#93d9f8','#4db7f5']}
          >
             <View style={styles.backButtonContainer}>
                <IconButton 
                  icon="back"
                  color={GlobalStyles.colors.dark} 
                  size={40}
                  onPress={geriDon} 
                />
            </View>
        </LinearGradient>
    );
}

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyles.colors.primary200
      },
      backButtonContainer:{
        marginTop: 30
      },
});

