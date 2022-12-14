import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "./componentes/home";
import Login from "./componentes/login";
import CadastroCandidato from "./componentes/cadastroCandidato";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
    CadastroCandidato,
  })
);

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});