import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DadosPessoais = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Nome:</Text>
    <Text style={styles.value}>Naeldy Godoy Vital</Text>
    <View style={styles.lineBreak} />
    <Text style={styles.label}>Email:</Text>
    <Text style={styles.value}>naeldygodoy@gmail.com</Text>
    <View style={styles.lineBreak} />
    <Text style={styles.label}>Telefone:</Text>
    <Text style={styles.value}>(81) 98152-3534 / 99649-7498</Text>
    <View style={styles.lineBreak} />
    <Text style={styles.label}>Endereço:</Text>
    <Text style={styles.value}>Olinda, Pernambuco - Brasil</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  lineBreak: {
    marginVertical: 10,
  },
});

export default DadosPessoais;
