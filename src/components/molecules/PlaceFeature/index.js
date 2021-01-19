import React from 'react'
import { View, Image, Text } from 'react-native'

const PlaceFeature = (props) => {
    return (
        <View style={{ marginRight: 16 }}>
            <View style={{ width: 150, height: 150, marginVertical: 10 }}>
                <Image source={require("../../../assets/images/restaurant.jpg")} style={{ width: undefined, height: undefined, resizeMode: "cover", flex: 1, borderRadius: 10}} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#2d3436", alignSelf: "center"}}>{props.name}</Text>
      </View>
    )
}

export default PlaceFeature
