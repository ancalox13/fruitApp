import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Profile() {
    return (
        <View
            style={ styles.container }
        >
            <View
                style={ styles.containerFirst }
            >
                <View
                    style={ styles.boxIconProfile }
                >
                    <Image
                        style={ styles.image }
                        source={ require("../assets/man.png") }
                    />
                </View>
                <View
                    style={ styles.containerName }
                >
                    <Text
                        style={ styles.textFirst }
                    >
                        Hi Ancalox
                    </Text>
                    <Text
                        style={ styles.textSecond }
                    >
                        Let's get some item!
                    </Text>
                </View>
            </View>
            <View
                style={ [styles.boxIconProfile, { backgroundColor: "#fff5f5"}] }
            >
                <Ionicons
                    name="cart-outline"
                    size={ 30 }
                />
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerFirst: {
        flexDirection: "row"
    },
    boxIconProfile: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#ff6961",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 30,
        height: 30
    },
    containerName: {
        justifyContent: "space-around",
        paddingStart: 12
    },
    textFirst: {
        fontWeight: "500"
    },
    textSecond: {
        fontWeight: "bold",
        fontSize: 16
    }
});