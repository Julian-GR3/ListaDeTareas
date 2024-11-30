import { Text, View, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
      <Text style={styles.header}>Lista de Tareas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20,
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#5a66f7",
    },
    headercontainer: {
      
    }
  });
  
