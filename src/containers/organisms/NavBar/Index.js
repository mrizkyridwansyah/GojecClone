import React, { Component } from 'react'
import { View } from 'react-native'
import NavBarIcon from '../../../components/molecules/NavBarIcon'

export class NavBar extends Component {
    render() {
        return (
            <View style={{ height: 54, backgroundColor: "white", flexDirection: "row"}}>
                <NavBarIcon img={require('../../../assets/icons/house.png')} name="Home" active />
                <NavBarIcon img={require('../../../assets/icons/shopping-bag.png')} name="Cart" />
                <NavBarIcon img={require('../../../assets/icons/information.png')} name="Help" />
                <NavBarIcon img={require('../../../assets/icons/download.png')} name="Inbox" />
                <NavBarIcon img={require('../../../assets/icons/book.png')} name="Account" />
            </View>
          )
    }
}

export default NavBar
