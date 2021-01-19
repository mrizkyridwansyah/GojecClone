import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const PayFeature = (props) => {
    return (
        <View>
            <Image source={props.img} style={styles.iconMenu} />
            <Text style={styles.textMenu}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   iconMenu: {
      width: 40,
      height: 40,
      tintColor: "#fff",
    },
    textMenu: {
      paddingTop: 10, 
      textAlign: "center", 
      color: "#fff", 
      fontWeight: "bold"
    },
  })
  

export default PayFeature
