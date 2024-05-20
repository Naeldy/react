import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ExperienciasProfissionais = () => (
  <ScrollView style={styles.container}>
    <View style={styles.experienceContainer}>
      <Text style={styles.companyText}>De 1999-2007; Empresa: POLIFRIO DO NORDESTE LTDA</Text>
      <Text style={styles.roleText}>Último cargo: COORD. DE PROJETOS</Text>
      <Text style={styles.descriptionText}>
        Encarregado de treinamentos técnicos/ ajuda a suporte tecnológico (softwares da área),
        desenvolvimento de novos produtos. Coordenação da equipe de projetos, equipe de
        desenvolvimento, fábrica e treinamento. Visita a clientes para análise de instalações frigoríficas de refrigeração.
      </Text>
      <View style={styles.lineBreak} />
    </View>
    <View style={styles.experienceContainer}>
      <Text style={styles.companyText}>De 2007-2010; Empresa: VMAS REFRIGERAÇÃO LTDA</Text>
      <Text style={styles.roleText}>Cargo: COORD. DE PROJETOS</Text>
      <Text style={styles.descriptionText}>
        Cálculos, orçamentos, projetos, desenho. Suporte técnico na área de informática,
        atendimento a clientes para vendas internas e visitas externas para verificação dos locais
        de instalação e elaboração de croqui em auto cad.
      </Text>
      <View style={styles.lineBreak} />
    </View>
    <View style={styles.experienceContainer}>
      <Text style={styles.companyText}>De 2010-2014; Empresa: SUPERFRIO REFRIGERAÇÃO LTDA</Text>
      <Text style={styles.roleText}>Cargo: GERENTE</Text>
      <Text style={styles.descriptionText}>
        Encarregado dos processos fabris e suporte de tecnologia (Manutenção do estoque, ordens de
        fabricação, atendimento a clientes, controle de fabricação e assistência técnica, vendas e cálculos
        de orçamentos e dimensionamento de projetos (Auto cad e excel)).
      </Text>
      <View style={styles.lineBreak} />
    </View>
    <View style={styles.experienceContainer}>
      <Text style={styles.companyText}>De 2014-atual; Empresa: FRIGELAR</Text>
      <Text style={styles.roleText}>Cargo: TELEVENDAS</Text>
      <Text style={styles.descriptionText}>
        Vendedor especializado em refrigeração comercial, ar condicionado e câmaras frigoríficas.
      </Text>
      <View style={styles.lineBreak} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  experienceContainer: {
    marginBottom: 20,
  },
  companyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roleText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  descriptionText: {
    fontSize: 16,
  },
  lineBreak: {
    marginVertical: 10,
  },
});

export default ExperienciasProfissionais;
