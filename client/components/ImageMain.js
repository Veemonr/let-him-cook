import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Dimensions } from "react-native"
import style from "../assets/style";

const fullWindowHeight = Dimensions.get("window").height

function ImageMain() {
  return (
      <View style={styleImageMainSize.imageMain}>
        <Image source={require("../assets/gyukkakuWalpaper.jpg")} style={style.imageMain} contentFit="cover" transition={1000} />
        <View style={style.imageContent}>
        </View>
      </View>
  );
}

const styleImageMainSize = StyleSheet.create({
  imageMain: {
    height: fullWindowHeight,
    width: "100%"
  }
})

export default ImageMain
