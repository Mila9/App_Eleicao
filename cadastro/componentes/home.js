import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Votacao from "../componentes/votacao";
import Actions from "../componentes/actions";
import Partidos from "../componentes/partidos";
import Candidatos from "../componentes/candidatos";
import Resultado from "../componentes/resultado";
import CadastroPartido from "./cadastroPartido";
import CadastroCandidato from "./cadastroCandidato";
const Routes = createAppContainer(
  createSwitchNavigator({
    Actions,
    Partidos,
    Candidatos,
    Votacao,
    Resultado,
    CadastroPartido,
    CadastroCandidato

  })
);

export default function Home({ navigation }) {
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
