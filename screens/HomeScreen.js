import { SafeAreaView, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white`}>
            <View style={tw`p-5`}>
                <Image
                    style={
                        {
                            width: 100,
                            height: 100,
                            resizeMode: "contain"
                        }
                    }
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
            </View>
            <GooglePlacesAutocomplete
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                minLength={2}
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }));
                    dispatch(setDestination(null));
                }}
                fetchDetails={true}
                placeholder='Where from?'
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <NavOptions />
        </SafeAreaView >
    )
}

export default HomeScreen;

const styles = StyleSheet.create({});