import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(null);

  const sortearNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 11);
    setNumero(numeroAleatorio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        {numero !== null ? `Número sorteado: ${numero}` : 'Nenhum número sorteado'}
      </Text>
      <TouchableOpacity style={styles.botao} onPress={sortearNumero}>
        <Text style={styles.textoBotao}>Sortear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 18,
    width: 160, // 160dp
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});
