import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import style from "../assets/style";

export default function LoadingAnimation() {
  return (
    <>
      <View style={style.animationContainer}>
        <LottieView
        autoPlay
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/lottie-loading.json")}
        />
        <View>
            <Text style={[style.pageTitle, style.animationText]}>Loading ... </Text>
        </View>
      </View>
    </>
  );
}
