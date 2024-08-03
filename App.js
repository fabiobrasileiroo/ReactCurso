import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  // const [nome, setNome] = useState('Fábio');
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState)
  }

  const entrar = () => {
    setNome('Fabio dinamico');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Button title="Entrar" onPress={entrar} /> */}
      <Button title="Toggle Visibility" onPress={toggleVisibility}/>
      {/* <Text>{nome}</Text> */}
      {isVisible && <Text>O texto está visivel!</Text>}
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
});
