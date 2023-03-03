import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [materia1, setMateria1] = useState("Ingresa tu primer materia");
  const [materia2, setMateria2] = useState("Ingresa tu segunda materia");
  const [materia3, setMateria3] = useState("Ingresa tu tercera materia");
  const texto = "Tus materias";
  const a = "\n" + materia1 + "\n" + materia2 + "\n" + materia3;
  const Materias= (props)=>{
    return (
      <View> 
        <Text>{props.nombre}</Text>
      </View>
    );
  }

  const getMaterias = () =>{
    alert('Inscrito\n' 
            + materia1 +"\n"
            + materia2 +"\n"
            + materia3);    
            
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style= {styles.cajatexto}
        onChangeText={(newText) => setMateria1(newText)}
        defaultValue={materia1}
      />
      
      <Text></Text>

      <TextInput
        style= {styles.cajatexto}
        onChangeText={(newText) => setMateria2(newText)}
        defaultValue={materia2}
      />

      <Text></Text>

      <TextInput
        style= {styles.cajatexto}
        onChangeText={(newText) => setMateria3(newText)}
        defaultValue={materia3}
      />
      
      <Text></Text>

      <Button
        title='Inscribir'
        /*onPress={getMaterias}*/
        onPress={(getMaterias)
        }        
      />
    
      <Text></Text>

      <Text>{texto}</Text>
      <Materias nombre={a} />

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
  }
});
