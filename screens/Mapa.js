import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles';

export default function Mapa() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapa}
        region={{
          latitude: -31.3190476,
          longitude: -54.1041255,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        mapType="hybrid"
      >
        <Marker
          title="Clínica Veterinária Patrícia Salis"
          description="Av. Gen. Osório, 1601 - Centro"
          coordinate={{ latitude: -31.3222462, longitude: -54.1083102 }}
        />

        <Marker
          title="Veterinária Pampeana"
          description="Av. Mal. Floriano, 2286 – Centro"
          coordinate={{ latitude: -31.3133004, longitude: -54.1068983 }}
        />

        <Marker
          title="Maskotes"
          description="Rua Tenente Pedro Fagundes Oliveira, 289 – São Jorge"
          coordinate={{ latitude: -31.3120398, longitude: -54.1041541 }}
        />

        <Marker
          title="Animais Clínica Veterinária"
          description="Rua Marcílio Dias, 1316 – Centro"
          coordinate={{ latitude: -31.3256973, longitude: -54.1034556 }}
        />

        <Marker
          title="Pet Top"
          description="Rua Marcílio Dias, 1799 – Centro"
          coordinate={{ latitude: -31.3190476, longitude: -54.1041255 }}
        />

        <Marker
          title="Clínica Veterinária Colosso"
          description="Rua Dezoito de Maio, 970 – Centro"
          coordinate={{ latitude: -31.3320609, longitude: -54.1138027 }}
        />

        <Marker
          title="Império Animal"
          description="Rua Marcílio Dias, 874 – Centro"
          coordinate={{ latitude: -31.3318927, longitude: -54.1026476 }}
        />

        <Marker
          title="Clínica Veterinária Caninos e Felinos"
          description="Rua Luiz Mércio Teixeira, 1663 - Centro"
          coordinate={{ latitude: -31.3221541, longitude: -54.1125444 }}
        />

         <Marker
          title="Clínica Veterinária Zootel"
          description="Rua Gomes Carneiro, 1428 – Centro"
          coordinate={{ latitude: -31.32505, longitude: -54.1112056}}
        />

         <Marker
          title="Bagévet Medicina Animal"
          description="Rua Gen. João Téles, 1568 – Centro"
          coordinate={{ latitude: -31.3221308, longitude: -54.1026061}}
        />

        <Marker
          title="SOS Cães e Gatos Clínica Veterinária"
          description="Rua Rodrigues Lima, 430 esquerda – Centro"
          coordinate={{ latitude: -31.3216078, longitude: -54.1129187}}
        />
        
        <Marker
          title="Veterinária Latidos e Relinchos"
          description="Rua Gen. João Téles, 1078 – Centro"
          coordinate={{ latitude: -31.3290799, longitude: -54.1015321}}
        />

          <Marker
          title="Vida Pet – Clínica Veterinária"
          description="Rua Fernando Machado, 144 – Centro"
          coordinate={{ latitude: -31.3189142, longitude: -54.105288}}
        />

      </MapView>
    </View>
  );
}