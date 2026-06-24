/* Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../components/Perfil';

/* Zona2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      
      <Perfil estiloE={styles.tarjetaRoja} nombre= "Sántiago de vicente alan " carrera= "Ingeniería en Sistemas Computacionales" materia= "Programación Móvil" cuatrimestre= "9no Cuatrimestre"></Perfil>
      
      <Perfil
      estiloE={styles.tarjetaVerde} 
      nombre= "judiht maqueda " 
      carrera= "negocios" 
      materia= "Notas" 
      cuatrimestre= "6to Cuatrimestre">
      </Perfil>

      <Perfil estiloE={styles.tarjetaRoja} nombre= "karen botello" carrera= "licenciatura " materia= "comercio" cuatrimestre= "9no Cuatrimestre"></Perfil>

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1dec4a',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
  },
  tarjetaRoja: {backgroundColor: '#FF6B6B'},
  tarjetaVerde: {backgroundColor: '#6BCB77'},
});
