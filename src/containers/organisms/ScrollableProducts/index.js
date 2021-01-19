import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import PlaceFeature from '../../../components/molecules/PlaceFeature'

const places = ["Sederhana Minang", "Padang Merdeka", "Talaga Sampireun", "Saung Kito", "Saung Rawalele", "Tes"]

export class ScrollableProducts extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 17, marginBottom: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2d3436"}}>OK Food</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5}}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2d3436" }}>Nearby Restaurant</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#00b894"}}>See All</Text>
              </View>
              <ScrollView horizontal style={{ flexDirection: "row", marginHorizontal: -17 , paddingLeft: 15 }}>         
                    {
                        places.map(place => {
                            return <PlaceFeature name={place} />
                        })
                    }       
              </ScrollView>
            </View>
        )
    }
}

export default ScrollableProducts
