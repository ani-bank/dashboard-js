import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';



export default function App() {
  const [pin, setPin] = React.useState({
    latitude: 41.05677200534168,
    longitude: 29.05261133879479
  })
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}

        initialRegion={{
          latitude: 41.05677200534168,
          longitude: 29.05261133879479,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
        customMapStyle={[
          {
            "featureType": "all",
            "stylers": [
              { "saturation": -100 },
              { "lightness": 0 }
            ]
          }
        ]}>
        <Marker
          coordinate={pin}
          title="AniBank"
          description="Anibank"
          pinColor='black'
          draggable={true}
          onDragStart={(e) => {
            console.log("drag start")
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
          >
            <Callout>
              <Text>Ramiz Dayinin Öldüğü Bank</Text>
            </Callout>
          </Marker>
          <Marker 
          coordinate ={{
            latitude: 41.017711,
            longitude: 28.974577
          }}
          title="AniBank"
          description="Anilarla Dolu Bank Eskiden Gelmiyordun Gavat"
          pinColor='black'
          draggable={true}
          onDragStart={(e) => {
            console.log("drag start")
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
          >
            <Callout>
              <Text>Elif ve Polat Banki</Text>
            </Callout>
          </Marker>
          <Marker 
          coordinate ={{
            latitude: 41.176587,
            longitude: 29.065019
          }}
          title="AniBank"
          description="Anilar"
          pinColor='black'
          draggable={true}
          onDragStart={(e) => {
            console.log("drag start")
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
          >
            <Callout>
              <Text>İsmail Abinin Banki</Text>
            </Callout>
          </Marker>
          <Circle 
          center ={{pin}}
          radius={1000} ></Circle>
      </MapView>
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
  map: {
    width: '100%',
    height: '100%',
  },
});
