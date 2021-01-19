import React from 'react'
import { StyleSheet, View, Image, TextInput } from 'react-native'

const SearchFeature = () => {
    return (
        <View style={{ marginHorizontal: 17, paddingTop: 15, flexDirection: "row"}}>
            <View style={{ position: "relative", flex: 1}}>
                <TextInput placeholder="What do you want to eat?" style={styles.textInput} />
                <Image source={require("../../../assets/icons/magnifying-glass.png")} style={styles.iconInput} />
            </View>
            <View style={{ width: 35, height: 40, alignItems: "center", justifyContent: "center", paddingLeft: 18}}>
                <Image source={require("../../../assets/icons/coupon.png")} style={styles.iconBottomNav} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconBottomNav : {
      width: 26, 
      height: 26, 
    },
    textInput: {
      borderWidth: 1, 
      borderColor: "#E8E8E8", 
      borderRadius: 25, 
      height: 40, 
      fontSize: 13, 
      paddingLeft: 45, 
      paddingRight: 20  
    },
    iconInput: {
      width: 18, 
      height: 18, 
      top: 12, 
      left: 12, 
      position: "absolute"    
    }
})
  
export default SearchFeature
