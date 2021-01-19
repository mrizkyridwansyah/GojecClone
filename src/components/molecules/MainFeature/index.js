import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const MainFeature = (props) => {
    return (
        <View style={{ flex: 1, padding: 10}}>
            <View style={styles.boxService}>
                <Image source={props.img} style={[styles.iconService, { tintColor: props.colorImg}]} />
            </View>
            <Text style={styles.textService}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconService: {
      width: 45,
      height: 45,
    },
    textService: {
      paddingTop: 10, 
      textAlign: "center", 
      color: "#636e72", 
      fontWeight: "bold"
    },
    boxService: {
      borderWidth: 1, 
      paddingHorizontal: 10, 
      paddingVertical: 10,
      alignItems: "center",
      borderRadius: 10,    
      borderColor: "#b2bec3"
    }
  })
  

export default MainFeature
