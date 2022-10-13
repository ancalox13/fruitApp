import React from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from "react-native";

import CardRecent from "../ui/cardRecent";
import Item from "../data/imageItem";

function RecentShop() {
    return <View
        style={ styles.container }
    >
        <Text
            style={ styles.title }
        >
            Recent Shop
        </Text>
        <View
            style={{ marginTop: 16 }}
        >
            <FlatList
                showsVerticalScrollIndicator={ false }
                bounces={ false }
                data={ Item }
                renderItem={ (itemData) => {
                    return <CardRecent
                        name={ itemData.item.name }
                        image={ itemData.item.image }
                        price={ itemData.item.price }
                    />
                } }
            />
        </View>
    </View>
}

export default RecentShop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 12
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginStart: 6
    }
});