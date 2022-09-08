import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.conreiner}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conreiner: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProfileScreen;
