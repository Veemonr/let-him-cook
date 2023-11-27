import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    drawerBackground: {
        backgroundColor: "black",
    },
    drawerLabel: {
        color: "white"
    },
    drawerTitleBackground: {
        backgroundColor: "black",
    },
    drawerTitleColor: {
        color: "white"
    },
    drawerIcon: {
        paddingLeft: 10
    },
    imageMain: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        position: "absolute",
    },
    imageMainLogo: {
        width: 60,
        height: 100,
        zIndex: 2,
        position: "absolute",
    },
    imageContent: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    pageContent: {
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "white",
        padding: "3%",
    },
    pageTitle: {
        fontSize: 36,
        fontWeight: "bold"
    },
    cardImage: {
        width: "95%",
        height: 200
    },
    card: {
        alignItems: "center",
        borderColor: "orange",
        borderWidth: 2,
        padding: 5,
        margin: 5
    },
    cardContent: {
        padding: 5,
        width: "100%",
        alignItems:"flex-start"
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "400",
    },
    button: {
        backgroundColor: "black",
        color: "white",
        fontSize: 22,
        padding: 10,
        borderRadius: 20
    },
    buttonBack: {
        alignContent: "center",
        width: 105
    },
    detailImage: {
        width: "100%",
        height: 200
    },
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    animationText: {
        marginTop: "90%"   
    },
    detailPrice: {
        fontSize: 24
    },
    tagDetail: {
        textAlign: "center",
        alignItems: "stretch",
        backgroundColor: "lightgrey",
        padding: 5,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2
    },
    tagContainer: {
        width: "100%",
        justifyContent: "center",
        padding: 10,
        flexDirection: "row",
        gap: 20
    },
    detailTitle: {
        textAlign: "center",
        alignItems: "stretch",
        backgroundColor: "lightgreen",
        padding: 5,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2
    },
    ingredientList: {
        gap: 10,
        margin: 10
    },
    description: {
        borderRadius: 5,
        borderColor: "orange",
        borderWidth: 2,
        padding: 8,
        margin: 5
    },
    pageDetail: {
        width: "100%",
        backgroundColor: "white",
        padding: "3%",
    },
    centerTitle: {
        width: "100%",
        alignItems: "center"
    }
    
    

})

export default style