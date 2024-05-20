import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const cursos = [
  "Superior em Análise e Desenvolvimento de Sistemas: Faculdade SENAC (Em andamento)",
  "Superior em Ciências da Computação: Faculdade Nova Roma",
  "Superior em Letras, Português e Inglês: FUNESO",
  "Programação em Delphi, Banco de Dados, Access, Lógica de Programação: INTERDATA",
  "Solid Edge, Desenho Tridimensional: UGS",
  "ISO 9001:2000: DATAMULTI",
  "Sistema de Gestão da Qualidade da Empresa: DATAMULTI",
  "Curso de Formação de Gerentes, Fidelização de Clientes e Gerenciamento de Pessoas: FS AEFA",
  "Formação de Líder: FS AEFA",
  "Arte do Sucesso nos Relacionamentos: INA TRAINING",
  "Negociação em Vendas: SENAC",
  "Como Vender Mais e Melhor: SEBRAE",
  "Aprender a Empreender: SEBRAE",
  "Análise e Planejamento Financeiro: SEBRAE",
  "Tecnologia Industrial Básica: IPDMAQ",
  "Patenteamento e Inovação Tecnológica: IPDMAQ"
  
];

const EscolaridadeCursos = () => {
  return (
    <ScrollView style={styles.container}>
      {cursos.map((curso, index) => (
        <View key={index} style={styles.cursoContainer}>
          <Text style={styles.text}>{index + 1}. {curso}</Text>
          <View style={styles.lineBreak} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cursoContainer: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  lineBreak: {
    marginVertical: 6,
  },
});

export default EscolaridadeCursos;
