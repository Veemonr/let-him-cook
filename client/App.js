import 'react-native-gesture-handler';
import MainDrawerNavigation from "./navigations/MainDrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://native.veemonr.fun/",
  cache: new InMemoryCache(),
});

export default function App() {


  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainDrawerNavigation />
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  )
} 