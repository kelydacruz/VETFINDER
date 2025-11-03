import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../styles';

export default function Sobre() {
  return (
     <ImageBackground source={require('../assets/fundo2.png')} resizeMode='cover' style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.Logo} />

      <Text style={styles.sobreTitulo}>🐾 VetFinder 🐾</Text>

      <Text style={styles.sobreTexto}>
        O <Text style={styles.sobreTextoDestaqueAzul}>VetFinder</Text> é um aplicativo desenvolvido
        para facilitar o acesso a informações sobre clínicas veterinárias e pet shops
        da cidade de <Text style={styles.sobreTextoDestaqueVerde}>Bagé-RS</Text>.
      </Text>

      <Text style={styles.sobreTexto}>
        O app permite visualizar locais no mapa, consultar informações, e indicar novas clínicas para ajudar outros tutores de pets. 
      </Text>

      <Text style={styles.sobreRodape}>
      {'\n'}Criado na disciplina de Desenvolvimento {'\n'}de Dispositivos Móveis{'\n'}
        Curso Técnico em Informática — IFSul Campus Bagé
      </Text>
    </ImageBackground>
  );
}
