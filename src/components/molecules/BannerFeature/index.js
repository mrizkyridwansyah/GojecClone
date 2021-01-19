import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

const BannerFeature = (props) => {
    return (
        <View style={{ marginHorizontal: 17, marginBottom: 10 }}>
            <View style={{ marginVertical: 10 }}>
                <View style={{ position: "relative"}}>
                    <Image source={props.img} style={styles.imageNews} />
                    <View style={[styles.backImageNews, { backgroundColor: "black", position: "absolute", opacity: 0.2 }]}></View>
                    <Image source={require("../../../assets/icons/ok.png")} style={[styles.iconNews, { tintColor: "#fff"}]} />
                    <View style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: 5, flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingHorizontal: 15}}>
                        <View style={{ flex: 1, paddingBottom: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff", marginBottom: 10 }}>OK INFO</Text>
                            <Text style={{ fontSize: 12, color: "#fff" }}>{props.title}</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 12 }}>
                            <TouchableOpacity style={{ backgroundColor: "#00b894", padding: 10, borderRadius: 10, alignSelf: "stretch" }}>
                            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12, textAlign: "center" }}>GET VOUCHER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>         
            <View style={{ borderColor: "#b2bec3", borderWidth: 1 }}></View>   
      </View>
    )
}

const styles = StyleSheet.create({    
    iconNews: {
      width: 30, 
      height: 30, 
      top: 12, 
      left: 12, 
      position: "absolute"    
    },
    imageNews: {
      width: '100%', 
      height: 200, 
      borderRadius: 10
    },
    backImageNews: {
      width: '100%', 
      height: '100%', 
      borderRadius: 10
    }    
  })

export default BannerFeature
