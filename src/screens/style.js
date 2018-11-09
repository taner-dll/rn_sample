import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

/**
 * Global Styles
 */
export default StyleSheet.create({

    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    },
    content: {
        backgroundColor: '#eeeeee'
    }
});