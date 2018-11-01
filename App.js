import React from 'react';
import {createDrawerNavigator, SafeAreaView, DrawerItems} from 'react-navigation';
import {ScrollView, StyleSheet, View, Image, AppRegistry} from 'react-native';


import HomeScreen from "./src/screens/home/home_index";
import AboutScreen from "./src/screens/about/about_index";


import logo from "./assets/logo.png";

import GeneralCommands from "./src/screens/commands/general_commands";
import MakeCommands from "./src/screens/commands/make_commands";
import CacheCommands from "./src/screens/commands/cache_commands";
import DoctrineCommands from "./src/screens/commands/doctrine_commands";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFontReady: false

        };
    }



    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
        });
        this.setState({isFontReady: true});
    }

    render() {

        /**
         * Yüklenenleri bekle.
         */
        if (!this.state.isFontReady) {
            return <Expo.AppLoading/>;
        }

        return <DrawerStack/>;
    }

}


const CustomDrawerContentComponent = (props) => (

    /**
     * SafeAreaView ios 11 sonrası telefonlar için gerekli.
     * SafeAreaView, Çentikli ve yuvarlak ekranlarda kenar boşlukları ve yerleşimi otomatik olarak düzenler.
     * SafeAreaView kullanmazsanız header kısmı çentik altında kalabilir.
     */
    <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>

        <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={logo} style={{height: 100, width: 100, borderRadius: 60}}/>
        </View>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>

);

/**
 * DrawerNavigator (Açılır Menü)
 */
const DrawerStack = createDrawerNavigator(
    {
        Home: HomeScreen,
        About: AboutScreen,
        GeneralCommands: GeneralCommands,
        MakeCommands: MakeCommands,
        DoctrineCommands: DoctrineCommands,
        CacheCommands: CacheCommands
    },
    {
        contentComponent: CustomDrawerContentComponent
    }
);


//en sona koymamızın nedeni;
//arada kalan const ve fonksiyonları da kullanabilmemiz içindir.
export default App;

AppRegistry.registerComponent('App', () => App);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});