import ImageMain from "../components/ImageMain"
import { View, Text, ScrollView } from "react-native"
import style from "../assets/style"

export default function HomePage() {
    
    return (
        <ScrollView>
        <ImageMain />
        <View style={style.pageContent}>
            <View>
                <Text style={style.pageTitle}>Home Page</Text>
            </View>
        </View>
    </ScrollView>
    )
}