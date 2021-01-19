import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

const NewsFeature = (props) => {
    return (
        <View style={{ marginHorizontal: 17 }}>
            <View style={{ marginTop: 10 }}>
                <Image source={props.img} style={styles.imageNews} />
                <View style={[styles.backImageNews, { backgroundColor: "black", position: "absolute", opacity: 0.2 }]}></View>
                <Image source={require("../../../assets/icons/ok.png")} style={[styles.iconNews, { tintColor: "#fff"}]} />
            </View>         
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2d3436" }}>OK NEWS</Text>
                <Text style={{ fontSize: 14, color: "#2d3436" }}>{props.title}</Text>
                <TouchableOpacity style={{ backgroundColor: "#00b894", padding: 10, borderRadius: 10, alignSelf: "flex-end" }} onPress={props.onPress}>
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12, textAlign: "center" }}>READ</Text>
                </TouchableOpacity>
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
  
export default NewsFeature
