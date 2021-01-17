/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{ flex: 1}}>
        <View style={{ flex: 1 }}>
          {/* Search Content */}
          <View style={{ marginHorizontal: 17, paddingTop: 15, flexDirection: "row"}}>
            <View style={{ position: "relative", flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={styles.textInput} />
              <Image source={require("./icons/magnifying-glass.png")} style={styles.iconInput} />
            </View>
            <View style={{ width: 35, height: 40, alignItems: "center", justifyContent: "center", paddingLeft: 18}}>
              <Image source={require("./icons/coupon.png")} style={styles.iconBottomNav} />
            </View>
          </View>
          {/* Wallet Content */}
          <View style={{ flex: 1, marginHorizontal: 17, paddingTop: 15, maxHeight: 180 }}>
            {/* Info Balance */}
            <View style={{ backgroundColor: "#0984e3", borderTopStartRadius: 5, borderTopEndRadius: 5, padding: 15, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>OK Pay</Text>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Rp. 50.000</Text>
            </View>
            {/* Menu */}
            <View style={{ backgroundColor: "#74b9ff", padding: 15, flexDirection: "row", justifyContent: "space-between", borderBottomEndRadius: 5, borderBottomStartRadius: 5 }}>
              <View>
                <Image source={require("./icons/upload-1.png")} style={styles.iconMenu} />
                <Text style={styles.textMenu}>Pay</Text>
              </View>
              <View>
                <Image source={require("./icons/placeholder.png")} style={styles.iconMenu} />
                <Text style={styles.textMenu}>Nearby</Text>
              </View>
              <View>
                <Image source={require("./icons/add.png")} style={styles.iconMenu} />
                <Text style={styles.textMenu}>Top Up</Text>
              </View>
              <View>
                <Image source={require("./icons/meat.png")} style={styles.iconMenu} />
                <Text style={styles.textMenu}>More</Text>
              </View>
            </View>
          </View>
          {/* Service Content */}
          <View style={{ flex: 1, marginHorizontal: 17 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
              <View style={{ flex: 1, padding: 10}}>
                <View style={styles.boxService}>
                  <Image source={require("./icons/motorcycle.png")} style={[styles.iconService, { tintColor: "#0984e3"}]} />
                </View>
                <Text style={styles.textService}>OK RIDE</Text>
              </View>
              <View style={{ flex: 1, padding: 10}}>
                <View style={styles.boxService}>
                  <Image source={require("./icons/car.png")} style={[styles.iconService, { tintColor: "#00cec9"}]} />
                </View>
                <Text style={styles.textService}>OK CAR</Text>
              </View>
              <View style={{ flex: 1, padding: 10}}>
                <View style={styles.boxService}>
                  <Image source={require("./icons/taxi.png")} style={[styles.iconService, { tintColor: "#6c5ce7"}]} />
                </View>
                <Text style={styles.textService}>OK TAXI</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
              <View style={{ flex: 1, padding: 10}}>
                <View style={styles.boxService}>
                  <Image source={require("./icons/box.png")} style={[styles.iconService, { tintColor: "#fdcb6e"}]} />
                </View>
                <Text style={styles.textService}>OK SEND</Text>
              </View>
              <View style={{ flex: 1, padding: 10}}>
                <View style={styles.boxService}>
                  <Image source={require("./icons/dish.png")} style={[styles.iconService, { tintColor: "#e17055"}]} />
                </View>
                <Text style={styles.textService}>OK FOOD</Text>
              </View>
              <View style={{ flex: 1, padding: 10}}>
                <View style={styles.boxService}>
                  <Image source={require("./icons/massage.png")} style={[styles.iconService, { tintColor: "#e84393"}]} />
                </View>
                <Text style={styles.textService}>OK MASSAGE</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 54, backgroundColor: "white", flexDirection: "row"}}>
          <View style={[styles.menuBottomNav, styles.menuActiveBottomNav]}>            
            <Image source={require('./icons/house.png')} style={styles.iconBottomNav} />
            <Text style={styles.textBottomNav}>Home</Text>
          </View>
          <View style={styles.menuBottomNav}>            
            <Image source={require('./icons/shopping-bag.png')} style={styles.iconBottomNav} />
            <Text style={styles.textBottomNav}>Orders</Text>
          </View>
          <View style={styles.menuBottomNav}>            
            <Image source={require('./icons/information.png')} style={styles.iconBottomNav} />
            <Text style={styles.textBottomNav}>Help</Text>
          </View>
          <View style={styles.menuBottomNav}>          
            <Image source={require('./icons/download.png')} style={styles.iconBottomNav} />
            <Text style={styles.textBottomNav}>Inbox</Text>
          </View>
          <View style={styles.menuBottomNav}>
            <Image source={require('./icons/book.png')} style={styles.iconBottomNav} />
            <Text style={styles.textBottomNav}>Account</Text>
          </View>
        </View>
      </View>
    </>
  );
};

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
  },
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

export default App;
