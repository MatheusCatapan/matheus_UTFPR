import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  const nome = "Matheus";

  const todayExercises = [
    { id: "e1", name: "Agachamento", sets: "3x12", completed: false },
    { id: "e2", name: "Flexão", sets: "3x10", completed: true },
    { id: "e3", name: "Prancha", sets: "3x60s", completed: false },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>TreinoHoje</Text>
          <Text style={styles.greeting}>Olá {nome} — pronto para treinar?</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Treino de Hoje</Text>

          {todayExercises.map((ex) => (
            <View key={ex.id} style={styles.exerciseRow}>
              <Text style={styles.exerciseName}>{ex.name}</Text>

              <Text style={styles.exerciseSets}>
                {ex.completed ? "CONCLUÍDO" : "Pendente"}
              </Text>
            </View>
          ))}

          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Iniciar Treino</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Criar Treino</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.exampleCard}>
          <Text style={styles.cardTitle}>Exemplo: Interpolação e Style</Text>

          <Text style={styles.exampleText}>Olá {nome}</Text>

          <Text style={[styles.exampleText, styles.muted]}>
            Repetições: {`${3}x12`}
          </Text>

          <Text style={[styles.exampleNote, { color: "#0A84FF" }]}>
            Este texto usa um style inline combinado com um style do StyleSheet.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    padding: 20,
  },

  header: {
    marginBottom: 18,
  },

  appTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0A84FF",
  },

  greeting: {
    fontSize: 16,
    color: "#444",
    marginTop: 6,
  },

  card: {
    backgroundColor: "#F6F8FB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  exerciseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E9EF",
  },

  exerciseName: {
    fontSize: 16,
  },

  exerciseSets: {
    fontSize: 14,
    color: "#666",
  },

  startButton: {
    marginTop: 14,
    backgroundColor: "#0A84FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  startButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  quickActions: {
    marginBottom: 40,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  actionText: {
    color: "#0A84FF",
    fontWeight: "600",
  },

  exampleCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#E6E9EF",
  },

  exampleText: {
    fontSize: 15,
    marginTop: 8,
  },

  muted: {
    color: "#666",
  },

  exampleNote: {
    marginTop: 10,
    fontSize: 13,
  },
});
