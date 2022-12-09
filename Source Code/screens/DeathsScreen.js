import { useState, useEffect } from "react";
import { StyleSheet, View, Linking, FlatList, Text, Image} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { getDeaths } from '../util/request';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { GlobalStyles } from '../components/constants/styles';
import IconButton from "../components/UI/IconButton";


function DeathsScreen({navigation,route}){

    const gun = route.params?.day;
    const ay = route.params?.month;
  
    const [deaths,setDeaths] = useState([]); 
    const [isFetching , setIsFetching] = useState(true);
  
  
    useEffect(()=>{
        async function dogumlariGetir(){
          setIsFetching(true);
          try {
              const olumler = await getDeaths(gun,ay);
              setDeaths(olumler);
          } catch (error) {
                
          }
          setIsFetching(false);
        }
        dogumlariGetir();
    },[])
  
      if(isFetching){  
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
          <FlatList
          data={deaths}
          keyExtractor={deaths.year}
          renderItem={(data)=>{
            //console.log(data);
            return(
              <View style={styles.listContainer}>
                <View style={styles.yilContainer}>
                  <Text style={styles.yilText}>Year {data.item.year}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionText}>{data.item.description}</Text>
                </View>
                {data.item.wikipedia.map(item => {
                  return(
                    <View key={item.title} style={styles.wikipedia}> 
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View style={styles.link}>
                      <Image 
                        style={styles.image}
                        source={{
                          uri: 'https://iconarchive.com/download/i31640/sykonist/popular-sites/Wikipedia.ico'
                        }}
                      />
                      <Text  
                        onPress={()=>Linking.openURL(item.wikipedia)}
                        style={styles.linkText}
                      >
                        {item.wikipedia}
                      </Text>
                    </View>
                  </View>                                  
                    );
                })}
              </View>
            )
          }}
        />
      </LinearGradient>
      );
}

export default DeathsScreen;

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
  listContainer:{
    flex: 1,
    marginTop: 10,
    marginHorizontal: 30,
   // backgroundColor: GlobalStyles.colors.lightOrange,
    borderBottomWidth:2,
    borderBottomColor: GlobalStyles.colors.dark,
    borderRightWidth: 2,
    borderRightColor:GlobalStyles.colors.dark,
    borderLeftWidth: 2,
    borderLeftColor:GlobalStyles.colors.dark,
    borderTopWidth: 2,
    borderTopColor:GlobalStyles.colors.dark,
    borderRadius: 60,
    padding: 10,
    marginRight:40
  },
  yilContainer:{
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  yilText:{
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    color: GlobalStyles.colors.dark
  },
  descriptionContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.dark
  },
  descriptionText:{
    fontSize: 15,
    fontFamily: 'sans-serif-medium',
    color: GlobalStyles.colors.dark
  },
  wikipedia:{
    flex: 1,
    padding: 15
  },
  titleText:{
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'sans-serif-medium',
    color: GlobalStyles.colors.dark
  },
  link:{
    flexDirection: 'row',
    padding: 7
  },
  linkText:{
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
    color: GlobalStyles.colors.link,
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  image:{
    height: 20,
    width: 20,
    marginRight: 6
  }
});