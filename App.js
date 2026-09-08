import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  // ---------- Dados usados na INTERPOLAÇÃO ----------
  const nome = 'Matheus';
  const curso = 'Desenvolvimento Mobile';
  const nota1 = 8.5;
  const nota2 = 7.0;
  const media = (nota1 + nota2) / 2;
  const aprovado = media >= 7;

  const tarefas = [
    { id: 1, titulo: 'Instalar o Expo', feita: true },
    { id: 2, titulo: 'Aprender JSX', feita: true },
    { id: 3, titulo: 'Estilizar componentes', feita: false },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <StatusBar style="dark" />

      {/* ---------- INTERPOLAÇÃO ---------- */}
      <Text style={styles.titulo}>Interpolação no JSX</Text>

      {/* Variável simples */}
      <Text style={styles.texto}>Olá, {nome}!</Text>

      {/* Expressão com template string */}
      <Text style={styles.texto}>{`Disciplina: ${curso}`}</Text>

      {/* Cálculo direto dentro das chaves */}
      <Text style={styles.texto}>
        Média das notas: {media.toFixed(1)}
      </Text>

      {/* Operador ternário */}
      <Text style={[styles.texto, aprovado ? styles.aprovado : styles.reprovado]}>
        Situação: {aprovado ? 'Aprovado' : 'Reprovado'}
      </Text>

      {/* Loop de renderização com map() */}
      <Text style={styles.subtitulo}>Tarefas ({tarefas.length})</Text>
      {tarefas.map((tarefa) => (
        <Text key={tarefa.id} style={styles.texto}>
          {tarefa.feita ? '✅' : '⬜'} {tarefa.titulo}
        </Text>
      ))}

      {/* ---------- STYLES ---------- */}
      <Text style={styles.titulo}>Estilização (CSS-in-JS)</Text>

      <View style={styles.linha}>
        <View style={[styles.caixa, { backgroundColor: '#4C6EF5' }]} />
        <View style={[styles.caixa, { backgroundColor: '#12B886' }]} />
        <View style={[styles.caixa, { backgroundColor: '#FA5252' }]} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Card com StyleSheet</Text>
        <Text style={styles.texto}>
          Este bloco usa borda, sombra, padding e borderRadius definidos em
          StyleSheet.create.
        </Text>
      </View>

      <Text style={[styles.texto, styles.destaque]}>
        Este texto combina dois estilos em um array.
      </Text>
    </ScrollView>
  );
}

// ---------- Objeto de estilos ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  conteudo: {
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#212529',
    marginTop: 16,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#495057',
    marginTop: 12,
    marginBottom: 6,
  },
  texto: {
    fontSize: 16,
    color: '#343A40',
    marginBottom: 6,
    lineHeight: 22,
  },
  aprovado: {
    color: '#2B8A3E',
    fontWeight: 'bold',
  },
  reprovado: {
    color: '#C92A2A',
    fontWeight: 'bold',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  caixa: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DEE2E6',
    marginBottom: 16,
    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    // sombra Android
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#212529',
  },
  destaque: {
    backgroundColor: '#FFF3BF',
    padding: 10,
    borderRadius: 8,
    color: '#5C4813',
  },
});
