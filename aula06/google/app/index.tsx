import { Image, StyleSheet, Text, Button, Alert, Pressable } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


export default function HomeScreen() {
  const navigation = useNavigation();
  
  return (
    <ThemedView style={styles.body}>
      <Image source={require('../assets/images/google_logo.svg')} style={styles.image} />
      <ThemedView style={styles.bar}>
        <Image source={require('../assets/images/search.svg')} style={styles.image1} />
        <TextInput
          style={styles.input}
          placeholder="Pesquise aqui..."
          keyboardType="text"
          />
        <Image source={require('../assets/images/keyb3.png')} style={styles.image2} />
        <Image source={require('../assets/images/google-microphone-icon.svg')} style={styles.image2} />
        <Image source={require('../assets/images/Google_Lens_Icon.svg')} style={styles.image2} />
      </ThemedView>

      <ThemedView style={styles.btns}>
        <Pressable style={styles.btn}>
          <Text style={{ fontSize: 14, }}>
            Pesquisa Google
          </Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={{ fontSize: 14, }}>
            Estou com sorte
          </Text>
        </Pressable>
      </ThemedView>
      <ThemedView style={styles.header}>
        <Pressable style={styles.btn_header}>
          <Text style={{ fontSize: 14, }} >
            Gmail
          </Text>
        </Pressable>
        <Pressable style={styles.btn_header}>
          <Text style={{ fontSize: 14, }}>
            Imagens
          </Text>
        </Pressable>
        <Pressable style={styles.btn_header}>
        <Image source={require('../assets/images/apps_google.png')}/>
        </Pressable>
          <Pressable style={styles.btn_header_log}
          onPress={() => {navigation.navigate('email')}}>
            <Text style={{color: "white", fontSize: 14,}}>
              Fazer login
            </Text>
          </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,  // Ocupa toda a tela
    backgroundColor: 'white',  // Cor de fundo como se fosse o body
    alignItems: 'center',  // Centraliza o conteúdo horizontalmente
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
  },

  image1: {
    width: 20,
    height: 20,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
    marginLeft: 10,
  },
  
  image2: {
    width: 20,
    height: 20,
    margin: 10,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
    marginRight: 10,
  },
  
  bar: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: 'white',
    textAlignVertical: "center",
    textAlign: "center",
    alignItems: "center",
    width: 575,
    height: 45,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#dfe1e5",
    margin: 30,
  },

  input: {
    height: 40,
    width: 500,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
  },

  btns: {
    width: 275,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
  },

  btn: {
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#f8f9fa",
    fontSize: 800,
  },



  header: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",  
    right: 0,
    top: 0,
    backgroundColor: "white",
  }, 

  btn_header: {
    margin: 10,
    paddingVertical: 10,
  },

  btn_header_log: {
    margin: 12,
    backgroundColor: "#0b57d0",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: "center",
  },

});
