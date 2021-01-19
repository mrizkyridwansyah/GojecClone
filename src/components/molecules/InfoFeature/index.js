import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

const InfoFeature = () => {
    return (
        <View style={{ marginHorizontal: 17, marginVertical: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2d3436"}}>OK Apps</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2d3436"}}>Complete your profile</Text>

            <View style={{ flexDirection: "row",height: 50, justifyContent: "space-between", marginVertical: 10 }}>
            <View style={{ justifyContent: "space-between", flex: 1, height: "100%" }}>
                <Image source={require("../../..//assets/icons/facebook.png")} style={{ width: 50, height: 50, tintColor: "#0984e3"}} />
            </View>
            <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold"}}>Connect to Facebook</Text>
                <Text style={{ fontSize: 12 }}>Login faster without verification code</Text>
            </View>
            </View>
            <View>
                <TouchableOpacity style={{ backgroundColor: "#00b894", padding: 10, borderRadius: 10, alignSelf: "flex-end" }}>
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12, textAlign: "center" }}>CONNECT</Text>
                </TouchableOpacity>                  
            </View>
      </View>
    )
}

export default InfoFeature
