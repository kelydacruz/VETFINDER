import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Lista() {

  const lista = [
    {
      id: 1,
      nome: 'Clínica Veterinária Patrícia Salis',
      endereco : 'Av. Gen. Osório, 1601 - Centro',
      fone: '(53) 99900-2140',
      icone: require('../assets/salis.jpg'),
      descricao: 'Clínica completa com consultas, vacinas, exames e atendimento de emergência 24h para cães e gatos.'
    },

    {
      id: 2,
      nome: 'Veterinária Pampeana',
      endereco : 'Av. Mal. Floriano, 2286 – Centro',
      fone: '(53) 3242-2990',
      icone: require('../assets/pampeana.jpg'),
      descricao: 'Atendimento veterinário e pet-shop: consultas, banho & tosa, rações e linha completa de produtos para seu pet.'
    },
    {
      id: 3,
      nome: 'Maskotes',
      endereco : 'Rua Tenente Pedro Fagundes Oliveira, 289 – São Jorge',
      fone: '(53) 3242-2231',
      icone: require('../assets/maskotes.jpg'),
      descricao: 'Clínica e pet-shop com atendimento clínico, exames, cirurgias e serviços de banho e tosa; também para animais exóticos.'
    },
     {
      id: 4,
      nome: 'Animais Clínica Veterinária',
      endereco : 'Rua Marcílio Dias, 1316 – Centro',
      fone: '(53) 99965-4504',
      icone: require('../assets/animais.jpg'),
      descricao: 'Clínica e petshop combinados: consultas, estética (banho/tosa) e acessórios para pets, central no centro de Bagé'
    },
      {
      id: 5,
      nome: 'Pet Top',
      endereco : 'Rua Marcílio Dias, 1799 – Centro',
      fone: '(53) 99900-5250',
      icone: require('../assets/pettop.jpg'),
      descricao: 'Pet shop com veterinária, hospedagem, táxi pet e serviços de banho e tosa; ideal para cuidados completos do seu pet.'
    },
    {
      id: 6,
      nome: 'Clínica Veterinária Colosso',
      endereco : 'Rua Dezoito de Maio, 970 – Centro',
      fone: '(53) 99935-1595',
      icone: require('../assets/colosso.jpg'),
      descricao: 'Consultório veterinário com banho e tosa, hospedagem e atendimento tanto na clínica quanto a domicílio.'
    },
      {
      id: 7,
      nome: 'Império Animal',
      endereco : 'Rua Marcílio Dias, 874 – Centro',
      fone: '(53) 3247-7073',
      icone: require('../assets/imperio.jpg'),
      descricao: 'Atendimento clínico completo para pets no centro de Bagé.'
    },
      {
      id: 8,
      nome: 'Clínica Veterinária Caninos e Felinos',
      endereco : 'Rua Luiz Mércio Teixeira, 1663 - Centro',
      fone: '(53) 3242-5424',
      icone: require('../assets/caninosfelinos.jpg'),
      descricao: 'Consultas veterinárias, vacinas e cuidados gerais com cães e gatos.'
    },
      {
      id: 9,
      nome: 'Clínica Veterinária Zootel',
      endereco : 'Rua Gomes Carneiro, 1428 – Centro',
      fone: '(53) 3242-3263',
      icone: require('../assets/zootel.jpg'),
      descricao: 'Serviços de atendimento clínico, vacinas e banho e tosa para seu pet.'
    },
      {
      id: 10,
      nome: 'Bagévet Medicina Animal',
      endereco : 'Rua Gen. João Téles, 1568 – Centro',
      fone: '(53) 99137-2508',
      icone: require('../assets/bagevet.jpg'),
      descricao: 'Atendimento veterinário com cirurgias, exames, urgências, internação e banho e tosa.'
    },
      {
      id: 11,
      nome: 'SOS Cães e Gatos Clínica Veterinária',
      endereco : 'Rua Rodrigues Lima, 430 esquerda – Centro',
      fone: '(53) 9927-9134',
      icone: require('../assets/sos.jpg'),
      descricao: 'Atendimento veterinário, vacinação e serviços básicos de estética animal.'
    },
      {
      id: 12,
      nome: 'Veterinária Latidos e Relinchos',
      endereco : 'Rua Gen. João Téles, 1078 – Centro',
      fone: '(53) 3241-8615',
      icone: require('../assets/latidosrelinchos.jpg'),
      descricao: 'Consultas e cuidados essenciais de saúde para pequenos animais.'
    },
      {
      id: 13,
      nome: 'Vida Pet – Clínica Veterinária',
      endereco : 'Rua Fernando Machado, 144 – Centro',
      fone: '(53) 99930-50000',
      icone: require('../assets/pet.jpg'),
      descricao: 'Consultas veterinárias e serviços clínicos essenciais para pets.'
    },
  ]

  return (
    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode='cover' style={styles.container}>
     
      <FlatList
        data={lista}
        renderItem={ ({item}) =>

          <TouchableOpacity style={styles.viewItem} onPress={ () => alert(item.descricao) }>
            <Image source={item.icone} style={styles.icone} />

            <View>
              <Text style={styles.textoItem}>
                <Text style={styles.textoBold}>Nome:</Text> {item.nome}
              </Text>

              <Text style={styles.textoItem}>
                <Text style={styles.textoBold}>Endereço:</Text> {item.endereco}
              </Text>

              <Text style={styles.textoItem}>
                <Text style={styles.textoBold}>Telefone:</Text> {item.fone}
              </Text>
            </View>

          </TouchableOpacity>

        }
      />

    </ImageBackground>
  );
}
