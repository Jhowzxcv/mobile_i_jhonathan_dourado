import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.body}>
         <Image source={require('../../assets/images/google_logo.svg')} style={styles.image} />
         <ThemedView style={styles.bar}>
         <TextInput
            style={styles.input}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
         </ThemedView>

        <ThemedText style={styles.text} >Estilizando o "body" no React Native</ThemedText>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,  // Ocupa toda a tela
    backgroundColor: 'white',  // Cor de fundo como se fosse o body
    justifyContent: 'center',  // Centraliza o conteúdo verticalmente
    alignItems: 'center',  // Centraliza o conteúdo horizontalmente
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',  // Ajusta a imagem proporcionalmente
  },

  bar: {
    backgroundColor: 'white',
    width: 500,
    height: 50,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
