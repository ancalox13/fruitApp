import React from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from "react-native";

import CardItem from "../ui/cardItem";
import Item from "../data/imageItem";

function PopularItem() {
    return (
        <View>
            <Text
                style={ styles.title }
            >
                Popular Item
            </Text>
            <View>
                <FlatList
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    data={ Item }
                    renderItem={ (itemData) => {
                        return <CardItem
                            name={ itemData.item.name }
                            image={ itemData.item.image }
                            price={ itemData.item.price }
                        />
                    } }
                />
            </View>
        </View>
    );
}

export default PopularItem;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginStart: 6
    }
});