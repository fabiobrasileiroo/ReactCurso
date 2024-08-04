import { StatusBar } from "expo-status-bar";
import { TouchableHighlight,Button, KeyboardAvoidingView, SafeAreaView,StyleSheet, Text, TextInput, View,Image, TouchableOpacity, Switch, ActivityIndicator, Modal, ScrollView, FlatList, SectionList} from "react-native";
import { useState } from "react";
import Constants from "expo-constants";

import tanjiroImage  from './assets/tanjiro.jpg'
import tanjiroHabilidade from './assets/chara1_thumb.png'

// resolver o tamanho para não ficar em cima da status bar
const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");

  const [tanjiroImg, setTanjiroImg] = useState(tanjiroImage)
  const [tanjiroTextFrase, setTanjiroTextFrase] = useState("Qual será a habilidade que tanjiro usar?")

  const [isEnabled, setIsEnabled] = useState(false)

  const frases = [
    'Hanafuda: Ichi no Kata',
    'Hanafuda: Ni no Kata',
    'Dança do Deus do Fogo (Hinokami Kagura)',
    'Respiração da Água 1 forma',
    'Respiração da Água 2 forma',
    'Respiração da Água 3 forma',
    'Respiração da Água 4 forma',
    'Respiração da Água 5 forma',
    'Respiração da Água 6 forma',
    'Respiração da Água 7 forma',
    'Mundo Transparente'
  ]

  const toogleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }

  const ataque = () => {
    const numRandom = Math.floor(Math.random() * frases.length)
    setTanjiroImg(tanjiroHabilidade)
    setTanjiroTextFrase(frases[numRandom])
  }

  const handleTextChange = (newText) => {
    setInputText(newText);
  };

  const handleButtonClick = () => {
    console.log(text);
    // if(text === '') 
    //   alert("Digite algo")

    setText(inputText);
    setInputText("");
  };


const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];
const data1 = [
  {
    title: 'Section 1',
    data: ['Item 1.1', 'Item 1.2', 'Item 1.3'],
  },
  {
    title: 'Section 2',
    data: ['Item 2.1', 'Item 2.2', 'Item 2.3'],
  },
];

const renderItem1 = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

{/* <TouchableScale
  onPress={() => {
    alert('Tapped!');
  }}
  activeScale={0.9}
>
  <Text>Tap me</Text>
</TouchableScale> */}


  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);
  return (
    <View style={styles.container}>
       {/* <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
    </SafeAreaView> */}
     {/* <SectionList
    sections={data1}
    keyExtractor={(item, index) => item + index}
    renderItem={renderItem1}
    renderSectionHeader={renderSectionHeader}
  />
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0"  />
        <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  /> */}
         {/* <KeyboardAvoidingView
      style={styles.container}
      behavior="padding" // Additional padding when the keyboard is open.
    >
      <TextInput
        placeholder="Type something here"
        style={styles.textInput}
      />
    </KeyboardAvoidingView> */}
{/* 
      <ScrollView>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
        <Text>Item 1</Text>
      </ScrollView> */}

{/* <TouchableHighlight
  onPress={() => {
    alert('Tapped!');
  }}
  underlayColor="gray"
>
  <Text>Tap me</Text>
</TouchableHighlight> */}
      <View style={styles.containerInput}>
      {/* <Modal style={{with: 20, height: 20}}><Text>Ola</Text></Modal> */}
        <TextInput
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          style={styles.input}
          onChangeText={handleTextChange}
          value={inputText}
        />
        <Button
          style={styles.button}
          title="Entrar"
          onPress={handleButtonClick}
        ></Button>
      </View>
      <Text style={styles.texto}>{text ? "Bem vindo: " + text : ""}</Text>
      <Image style={{width: 400, height:200}}
        source={tanjiroImg} 
      />

      <Text style={styles.textoFrase}>{tanjiroTextFrase}</Text>
      <TouchableOpacity onPress={ataque} style={styles.botaoNew}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Ataque</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text>Enable Feature:</Text>
        <Switch
          trackColor={{false: "#767577", true: "#81b0ff"}}
          thumbColor={isEnabled ? '#f5dd4b': '#f4f3f4'}
          onValueChange={toogleSwitch}
          value={isEnabled}
        />
      </View>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Loading, please wait...</Text>
    <ActivityIndicator animating={true} />
  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight + 8,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  containerInput: {
    flexDirection: "row",
  },
  input: {
    height: 45,
    width: "70%",
    borderWidth: 1,
    borderColor: "darkgray",
    borderRadius: 20,
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  },
  textoFrase: {
    fontSize: 18,
    color: '#0E185D',
    fontWeight: '800',
    margin: 30,
    fontStyle: 'italic'
  },
  botaoNew: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#0E185D',
    // backgroundColor: '#0E185D',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    // backgroundColor: "#0E185D",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0E185D'
  }
});
