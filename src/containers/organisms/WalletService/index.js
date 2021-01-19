import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PayFeature from '../../../components/molecules/PayFeature'

export class WalletService extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 17, paddingTop: 15 }}>
              {/* Info Balance */}
              <View style={{ backgroundColor: "#0984e3", borderTopStartRadius: 5, borderTopEndRadius: 5, padding: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>OK Pay</Text>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Rp. 50.000</Text>
              </View>
              {/* Menu */}
              <View style={{ backgroundColor: "#74b9ff", padding: 15, flexDirection: "row", justifyContent: "space-between", borderBottomEndRadius: 5, borderBottomStartRadius: 5 }}>
                <PayFeature title="Pay" img={require("../../../assets/icons/upload-1.png")} />
                <PayFeature title="Nearby" img={require("../../../assets/icons/placeholder.png")} />
                <PayFeature title="Top Up" img={require("../../../assets/icons/add.png")} />
                <PayFeature title="More" img={require("../../../assets/icons/meat.png")} />
              </View>
            </View>
        )
    }
}

export default WalletService
