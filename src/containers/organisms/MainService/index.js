import React, { Component } from 'react'
import { View } from 'react-native'
import MainFeature from '../../../components/molecules/MainFeature'

export class MainService extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 17 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
                <MainFeature img={require("../../../assets/icons/motorcycle.png")} title="OK RIDE" colorImg="#0984e3" />                
                <MainFeature img={require("../../../assets/icons/car.png")} title="OK CAR" colorImg="#00cec9" />                
                <MainFeature img={require("../../../assets/icons/taxi.png")} title="OK TAXI" colorImg="#6c5ce7" />                                
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10}}>
                <MainFeature img={require("../../../assets/icons/box.png")} title="OK SEND" colorImg="#fdcb6e" />                
                <MainFeature img={require("../../../assets/icons/dish.png")} title="OK FOOD" colorImg="#e17055" />                
                <MainFeature img={require("../../../assets/icons/massage.png")} title="OK MASSAGE" colorImg="#e84393" />                                
              </View>
            </View>
        )
    }
}

export default MainService
