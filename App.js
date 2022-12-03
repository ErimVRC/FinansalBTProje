import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { getEvents } from './util/events';
import LoadingOverlay from './components/UI/LoadingOverlay';

export default function App() {

const [events,setEvents] = useState([]); 
const [isFetching , setIsFetching] = useState(true);

  useEffect(()=>{
    async function olaylarıGetir(){
      setIsFetching(true);
      try {
        const olaylar = await getEvents();
        setEvents(olaylar);
      } catch (error) {
        
      }
      setIsFetching(false);
    }
    olaylarıGetir();
  },[])

  if(isFetching){  
    return(
        <LoadingOverlay />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={events}
        keyExtractor={events.year}
        renderItem={(data)=>{
          console.log(data);
          return(
            <View>
              <Text>Yıl {data.item.year}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 /*useEffect(() =>{
    const anan = axios.get("https://byabbe.se/on-this-day/1/23/events.json").then(response => {
    setEvents(response.data.events);
  })
  },[])*/
 
  //console.log(events[6]);
