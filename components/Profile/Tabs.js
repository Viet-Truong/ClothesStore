import React, { useState } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Text } from "native-base";
import CartUser from "./CartUser";
import Profile from "./Profile";
import Colors from "../../color";
import { NativeBaseProvider } from "native-base";

const renderScene = SceneMap({
    first: Profile,
    second: CartUser,
});

export default function Tabs() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "first",
            title: "PROFILE",
        },
        {
            key: "second",
            title: "Cart",
        }
    ]);

    const renderTabsBar = (props) => (
        <TabBar
            {...props}
            tabStyle={styles.tabStyle}
            indicatorStyle={{ backgroundColor: Colors.black }}
            activeColor={Colors.main}
            inactiveColor={Colors.white}
            renderLabel={({ route, color }) => <Text style={{ color, ...styles.text }}>{route.title}</Text>}
        />
    );
    return (
        <NativeBaseProvider>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabsBar}
            />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: "black",
    },
    text: {
        fontSize: 13,
        fontWeight: "bold",
    },
});
