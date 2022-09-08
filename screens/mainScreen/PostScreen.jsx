import { View, Text, StyleSheet } from "react-native";

const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.conreiner}>
      <Text>PostScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conreiner: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default PostScreen;
