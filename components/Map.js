import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
const Map = () => {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >

            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title='Origin'
                description='This is the origin'
                identifier='origin'
            />


        </MapView>
    )
}

export default Map;

const styles = StyleSheet.create({});



 // <MapView
        //     style={tw`flex-1`}
        //     mapType="mutedStandard"
        //     initialRegion={{
        //         latitude: origin.location.lat,
        //         longitude: origin.location.lng,
        //         latitudeDelta: 0.005,
        //         longitudeDelta: 0.005,
        //     }}
        // />
        // This is the correct code but due to not paid api key this is not possible for me to use it.


        // {origin?.location && (
        //     <Marker
        //         coordinate={{
        //             latitude: origin.location.latitude,
        //             longitude:origin.location.lng,
        //         }}
        //     />
        // )}