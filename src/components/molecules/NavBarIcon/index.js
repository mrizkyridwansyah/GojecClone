import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const NavBarIcon = (props) => {
    return (
        <View style={props.active ? [styles.menuBottomNav, styles.menuActiveBottomNav] : styles.menuBottomNav }>            
            <Image source={props.img} style={styles.iconBottomNav} />
            <Text style={styles.textBottomNav}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menuBottomNav: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center"    
    },
    menuActiveBottomNav: {
      backgroundColor: "#dfe6e9"
    },
    iconBottomNav : {
      width: 26, 
      height: 26, 
    },
    textBottomNav: {
      fontSize: 10,
      fontWeight: "bold",
      color: "#000",
      marginTop: 4
    }
  })
  
export default NavBarIcon
