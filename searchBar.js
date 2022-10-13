import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TextInput
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

function SearchBar() {
    const [itemInput, setItemInput] = useState("");
    const [searchIcon, setSearchIcon] = useState(true);

    function itemInputHandler(input) {
        setItemInput(input);
    }

    useEffect(() => {
        if(itemInput) {
            setSearchIcon(false);
        } else {
            setSearchIcon(true);
        }
    });

    return (
        <View
            style={ styles.container }
        >
            <View
                style={ styles.boxSearch }
            >
                { searchIcon && <Ionicons
                    color="gray"
                    name="search"
                    size={ 20 }
                /> }
                <TextInput
                    style={ styles.textInput }
                    placeholder="Search item..."
                    onChangeText={ itemInputHandler }
                    value={ itemInput }
                />
            </View>
            <View
                style={ styles.boxFilter }
            >
                <Ionicons
                    color="#ffffff"
                    name="options"
                    size={ 20 }
                />
            </View>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "space-between"
    },
    boxSearch: {
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 15,
        alignItems: "center"
    },
    textInput: {
        width: "70%",
        color: "black",
        marginStart: 12
    },
    boxFilter: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#ff6961",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#ff6961",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        shadowOpacity: 0.5
    }
});