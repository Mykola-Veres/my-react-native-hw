import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

  return (
    <View style={styles.conreiner}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Photo</Text>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
          </View>
        )}
      />
      <Button
        title="go to Map"
        onPress={() => {
          navigation.navigate("Map");
        }}
      ></Button>
      <Button
        title="Comments"
        onPress={() => {
          navigation.navigate("Comments");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  conreiner: { flex: 1 },
});

export default DefaultScreenPosts;
