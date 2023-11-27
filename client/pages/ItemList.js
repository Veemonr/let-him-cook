import { View, Text, ScrollView } from "react-native"
import ImageMain from "../components/ImageMain"
import style from "../assets/style"
import ItemCard from "../components/ItemCard"
import { useQuery, gql } from '@apollo/client';
import LoadingAnimation from "../components/LoadingAnimation";
import ErrorAnimation from "../components/ErrorAnimation";

const GET_ALL_ITEMS = gql`
query Query {
    items {
      id
      name
      price
      imgUrl
    }
  }
`


export default function ItemList() {

    const { loading, error, data } = useQuery(GET_ALL_ITEMS)

    if(loading) return <LoadingAnimation />
    if(error) return <ErrorAnimation />

    return (
        <ScrollView>
            <ImageMain />
            <View style={style.pageContent}>
                <Text style={style.pageTitle}>Menu Item List</Text>
                {data?.items.map(item => <ItemCard key={item.id || 0 } item={item}/> )}
            </View>
        </ScrollView>
    )
}