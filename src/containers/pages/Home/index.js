import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import RowIndent from '../../../components/atoms/RowIndent'
import SearchFeature from '../../../components/molecules/SearchFeature';
import NewsFeature from '../../../components/molecules/NewsFeature';
import InfoFeature from '../../../components/molecules/InfoFeature';
import BannerFeature from '../../../components/molecules/BannerFeature';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar/Index';
import MainService from '../../../containers/organisms/MainService';
import WalletService from '../../../containers/organisms/WalletService';

export class Home extends Component {    
    render() {
        return (
            <View style={{ flex: 1}}>
                <ScrollView style={{ flex: 1 }}>
                    {/* Search Content */}
                    <SearchFeature />
                    {/* Wallet Content */}
                    <WalletService />
                    {/* Service Content */}
                    <MainService />
                    <RowIndent />
                    {/* Internal Account Content */}
                    <InfoFeature />
                    {/* News Content */}
                    <NewsFeature title="Man.United vs Liverpool berakhir dengan skor imbang tanpa gol." img={require("../../../assets/images/muliv.jpg")} onPress={() => this.props.navigation.navigate("NewsDetail")} />
                    {/* Banner Content */}
                    <BannerFeature title="Training voucher apps" img={require("../../../assets/images/voucher.jpg")} />
                    {/* Nearby Content */}
                    <ScrollableProducts />
                </ScrollView>
                <NavBar />
            </View>
    
        )
    }
}

export default Home
