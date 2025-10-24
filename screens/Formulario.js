import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState } from 'react';
import styles from '../styles';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fone, setFone] = useState('');

  const salvar = () => {
    alert('Indicação de ' + nome + ' enviada com sucesso! Obrigado por contribuir 🐾');
  };

  return (
    <ImageBackground source={require('../assets/fundo2.png')} resizeMode='cover' style={styles.container}>
      <Image source={require('../assets/icon.png')} style={{ width: 150, height: 150 }} />
      <Text style={styles.titulo}>Indique uma Veterinária:</Text>

      <TextInput
        placeholder="Nome da Veterinária ou Pet Shop"
        style={styles.input}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Endereço"
        style={styles.input}
        onChangeText={setEndereco}
      />
      <TextInput
        placeholder="Telefone"
        style={styles.input}
        onChangeText={setFone}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvar}
      >
        <Text style={styles.botaoTexto}>Enviar Indicação</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
