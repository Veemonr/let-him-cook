import { useNavigation } from "@react-navigation/native"
import { useRoute } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import { useQuery, gql } from "@apollo/client";
import { Image } from "expo-image";
import useRupiah from "../hooks/useRupiah";
import style from "../assets/style"
import LoadingAnimation from "../components/LoadingAnimation";
import ErrorAnimation from "../components/ErrorAnimation";
import { ScrollView } from "react-native-gesture-handler";

const GET_ITEM_BY_ID = gql`
query ItemById($itemByIdId: ID!) {
  itemById(id: $itemByIdId) {
    item {
      id
      name
      description
      price
      imgUrl
      categoryId
      authorId
      Category {
        id
        name
      }
      Ingredients {
        id
        itemId
        name
      }
    }
    author {
      _id
      username
      email
      role
      phoneNumber
      address
      password
    }
  }
}
`


export default function ItemDetail() {
    const changeRupiah = useRupiah()
    const navigation = useNavigation()
    const route = useRoute()
    const { itemId } = route.params
    const { data, error, loading } = useQuery(GET_ITEM_BY_ID, {
        variables: { itemByIdId: itemId}
    })
    if(loading) return <LoadingAnimation />
    if(error) return <ErrorAnimation />


    function goBack() {
        navigation.goBack()
    }
    
    return (
        <>
        <View>
            <Image 
                source={data?.itemById.item.imgUrl}
                style={style.detailImage}
                contentFit="cover"
            />
        </View>
        <View style={style.pageDetail}>
            <Text style={style.pageTitle}>{data?.itemById.item.name}</Text>
            <Text style={style.detailPrice}>{changeRupiah(data?.itemById.item.price)}</Text>
            <View style={style.tagContainer} >
                <Text style={style.tagDetail}>{data?.itemById.item.Category.name}</Text>
                <Text style={style.tagDetail}>Author : {data?.itemById.author.email}</Text>
            </View>
            <View style={style.centerTitle}>
                <Text style={style.detailPrice}>Ingredients</Text>
            </View>
            <View style={style.tagContainer}>
                {data?.itemById.item.Ingredients.map(ingredient => <Text style={style.detailTitle} key={ingredient.id}>{ingredient.name}</Text>)}
            </View>
            <View style={style.centerTitle}>
                <Text style={style.detailPrice}>Description</Text>
            </View>
            <ScrollView style={style.description}>
                <Text>
                    {data?.itemById.item.description}
                </Text>
                </ScrollView>
            <View style={style.centerTitle}>
                <TouchableOpacity onPress={goBack}>
                    <View style={style.buttonBack}>
                        <Text style={style.button}>Go Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}