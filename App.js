import React from 'react';
import { ScrollView, View } from 'react-native';

import RowIndent from './src/components/atoms/RowIndent'
import SearchFeature from './src/components/molecules/SearchFeature';
import NewsFeature from './src/components/molecules/NewsFeature';
import InfoFeature from './src/components/molecules/InfoFeature';
import BannerFeature from './src/components/molecules/BannerFeature';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar/Index';
import MainService from './src/containers/organisms/MainService';
import WalletService from './src/containers/organisms/WalletService';

const App: () => React$Node = () => {
  return (
    <>
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
            <NewsFeature title="Man.United vs Liverpool berakhir dengan skor imbang tanpa gol." img={require("./src/assets/images/muliv.jpg")} />
            {/* Banner Content */}
            <BannerFeature title="Training voucher apps" img={require("./src/assets/images/voucher.jpg")} />
            {/* Nearby Content */}
            <ScrollableProducts />
        </ScrollView>
        <NavBar />
      </View>
    </>
  );
};


export default App;
