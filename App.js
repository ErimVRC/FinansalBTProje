import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { getEvents, getDeaths, getBirths } from './util/requests';
import LoadingOverlay from './components/UI/LoadingOverlay';
import {styles} from './components/constants/styles';

export default function App() {

const [events,setEvents] = useState([]); 
const [deaths,setDeaths] = useState([]); 
const [births,setBirths] = useState([]); 
const [isFetching , setIsFetching] = useState(true);

  useEffect(()=>{
    async function olaylariGetir(month,day){
      setIsFetching(true);
      try {
        const olaylar = await getEvents(month,day);
        setEvents(olaylar);
      } catch (error) {
        
      }
      setIsFetching(false);
    }

    async function olumleriGetir(month,day){
      setIsFetching(true);
      try {
        const olumler = await getDeaths(month,day);
        setDeaths(olumler);
      } catch (error) {
        
      }
      setIsFetching(false);
    }

    async function dogumlariGetir(month,day){
      setIsFetching(true);
      try {
        const dogumlar = await getBirths(month,day);
        setBirths(dogumlar);
      } catch (error) {
        
      }
      setIsFetching(false);
    }
    olaylariGetir(3,8);
    olumleriGetir(3,8);
    dogumlariGetir(3,8);
  },[])

  if(isFetching){  
    return(
        <LoadingOverlay />
    );
  }

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <FlatList
        data={events}
        width={50}
        keyExtractor={events.year}
        renderItem={(data)=>{
          console.log(data);
          return(
            <View style={styles.containerL}>
              <Text>Yıl: {data.item.year}</Text>
            </View>
          )
        }}
      />
      <FlatList
        data={deaths}
        width={50}
        keyExtractor={deaths.year}
        renderItem={(data)=>{
          console.log(data);
          return(
            <View style={styles.containerC}>
              <Text>Yıl: {data.item.year}</Text>
            </View>
          )
        }}
      />
      <FlatList
        width={50}
        data={births}
        keyExtractor={births.year}
        renderItem={(data)=>{
          console.log(data);
          return(
            <View style={styles.containerR}>
              <Text>Yıl: {data.item.year}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}