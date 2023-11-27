import LottieView from "lottie-react-native";
import { View, TouchableOpacity, Text} from "react-native";
import { useNavigation } from "@react-navigation/core";
import style from "../assets/style";

export default function ErrorAnimation() {
  const navigation = useNavigation()

  function goBack() {
    navigation.goBack("Home")
  }

  return (
    <>
      <View style={style.animationContainer}>
        <LottieView
        autoPlay
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/lottie-error.json")}
        />
            <TouchableOpacity onPress={goBack}>
                <View style={[style.buttonBack, style.animationText]}>
                    <Text style={style.button}>Go Back</Text>
                </View>
            </TouchableOpacity>
      </View>
    </>
  );
}
