import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DadosPessoais from './DadosPessoais';
import EscolaridadeCursos from './EscolaridadeCursos';
import ExperienciasProfissionais from './ExperienciasProfissionais';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.homeContent}>
    <Image source={{ uri: 'https://github.com/Naeldy/react/blob/main/naeldy2.jpg?raw=true' }} style={styles.foto} />
    <Text style={styles.nome}>Naeldy Godoy Vital</Text>
  </View>
);

const CustomHeader = ({ navigation, title }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu" size={32} color="black" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        header: () => <CustomHeader navigation={navigation} title="Curriculum" />,
      }}
    />
    <Stack.Screen
      name="DadosPessoais"
      component={DadosPessoais}
      options={{
        header: () => <CustomHeader navigation={navigation} title="Dados Pessoais" />,
      }}
    />
    <Stack.Screen
      name="EscolaridadeCursos"
      component={EscolaridadeCursos}
      options={{
        header: () => <CustomHeader navigation={navigation} title="Escolaridade e Cursos" />,
      }}
    />
    <Stack.Screen
      name="ExperienciasProfissionais"
      component={ExperienciasProfissionais}
      options={{
        header: () => <CustomHeader navigation={navigation} title="Experiências Profissionais" />,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Dados Pessoais" component={DadosPessoais} />
        <Drawer.Screen name="Escolaridade e Cursos" component={EscolaridadeCursos} />
        <Drawer.Screen name="Experiências Profissionais" component={ExperienciasProfissionais} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
