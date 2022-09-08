import { View, Text, StyleSheet } from "react-native";

const CreateScreen = () => {
  return (
    <View style={styles.conreiner}>
      <Text>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conreiner: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CreateScreen;
