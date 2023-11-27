import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native"
import useRupiah from "../hooks/useRupiah";
import style from "../assets/style";
// https://www.frisianflag.com/storage/app/media/uploaded-files/ayam-teriyaki-crispy.jpg

export default function ItemCard({item}) {
    const navigation = useNavigation()
    const changeRupiah = useRupiah()
    function goDetail() {
        navigation.navigate("Item Detail", {
            itemId: item.id
        })
    }

    return (
        <View>
            <View style={style.card}>
                <Image 
                    source={item.imgUrl}
                    style={style.cardImage}
                    />
                <View style={style.cardContent}>
                    <Text style={style.cardTitle}>{item.name}</Text>
                    <Text style={style.cardTitle}>{changeRupiah(item.price)}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={goDetail}
                    >
                        <Text style={style.button}>See Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}