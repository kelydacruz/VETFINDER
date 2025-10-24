import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/fundo2.png')} resizeMode='cover' style={styles.homeContainer}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.Logo}
      />

      <Text style={styles.homeTitulo}>🐾 Bem-vindo ao VetBagé 🐾</Text>

      <Text style={styles.homeDescricao}>
        Encontre as melhores clínicas veterinárias e pet shops de <Text style={styles.sobreTextoDestaqueVerde}>Bagé - RS</Text>. 
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Veterinárias')}
      >
        <Text style={styles.botaoTexto}>Lista de Veterinárias</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Mapa')}
      >
        <Text style={styles.botaoTexto}>Ver no Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Indicação')}
      >
        <Text style={styles.botaoTexto}>Indicar Nova Clínica</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
