import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [activo, setActivo] = useState(true);
  const [materia1, setMateria1] = useState("Ingresa tu primer materia");
  const [materia2, setMateria2] = useState("Ingresa tu segunda materia");
  const [materia3, setMateria3] = useState("Ingresa tu tercera materia");
  const [inscrito, setInscrito] = useState("");
  const [texto, setTexto] = useState("");
  const a = "\n" + materia1 + "\n" + materia2 + "\n" + materia3;
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulodisenio}>Registro de Materias</Text>

      <TextInput
        style= {styles.cajatexto}
        onChangeText={(newText) => setMateria1(newText)}
        placeholder= {materia1}

      />
      <TextInput
        style= {styles.cajatexto}
        onChangeText={(newText) => setMateria2(newText)}
        placeholder= {materia2}

      />
      <TextInput
        style= {styles.cajatexto}
        onChangeText={(newText) => setMateria3(newText)}
        placeholder= {materia3}
      />

      <Button
        style={styles.estilobutton}
        color="#8a2be2"
        onPress={()=>{
          setActivo(false);
          setTexto("Te inscribiste a:")
          setInscrito(a);
        }}
        disabled={(!activo)}
        title = {activo ? "Inscribir" : "Inscrito"}
      />

      <Text style={styles.resultadodisenio}>{texto}</Text>
      <Text style={styles.resultadomateriasdisenio}>{inscrito}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajatexto:{
    height:40,
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 200,
    borderRadius:30,
    padding:10,
    margin:10
  },
  titulodisenio:{
    height:60,
    color:"#c6ce00",
    fontSize:20
  },
  resultadodisenio:{
    height:30,
    color:"#8a2be2",
    fontSize:20
  },
  resultadomateriasdisenio:{
    height:100,
    color:"#0000ff",
    fontSize:15,
    fontStyle: 'italic'
  },
  estilobutton:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
