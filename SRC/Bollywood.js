import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

const DATA = [
  { id: 1, title: "Brahmastra", img: require("../assets/brahmastra.jpg") },
  { id: 2, title: "Vikram Vedha", img: require("../assets/Vikram-Vedha2.jpg") },
  { id: 3, title: "Tiger 3", img: require("../assets/tiger3.jpg") },
  { id: 4, title: "Jawan", img: require("../assets/jawan.jpg") },
  { id: 5, title: "Ramsetu", img: require("../assets/Ramsetu.jpg") },
  { id: 6, title: "Bhediya", img: require("../assets/Bhediya.jpg") },
];
const DATA1 = [
  { id: 1, title: "Dangal", img: require("../assets/Dangal.jpg") },
  { id: 2, title: "MS Dhoni", img: require("../assets/msdhoni1.jpg") },
  { id: 3, title: "Border", img: require("../assets/border.jpg") },
  { id: 4, title: "URI", img: require("../assets/URI.jpg") },
  { id: 5, title: "Udtapunjab", img: require("../assets/Udtapunjab.jpg") },
  { id: 6, title: "3Idiots", img: require("../assets/3idiots.jpg") },
];

export default function Bollywood({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Back1.png")}
            style={styles.imgBack}
          />
        </TouchableOpacity>
        <Text style={styles.netflix}>MOV.INFO</Text>
        <Text style={styles.H}>.BOLLYWOOD</Text>
      </View>
      <ImageBackground
        source={require("../assets/msdhoni.jpg")}
        style={styles.HImage}
      >
        <View style={styles.XYZ}>
          <TouchableOpacity onPress={() => alert("hel")}>
            <Image source={require("../assets/Left2.png")} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("hel")}>
            <Image source={require("../assets/right.png")} style={styles.img} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Text style={styles.UP}>UPCOMMING...</Text>
      <View>
        <FlatList
          data={DATA}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.container1}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Brahmastra")}
                >
                  <Image source={item.img} style={styles.IMG}></Image>
                  <Text style={styles.Name}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <Text style={styles.UP}>FOR YOU...</Text>

      <View>
        <FlatList
          data={DATA1}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.container1}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Brahmastra")}
                >
                  <Image source={item.img} style={styles.IMG}></Image>
                  <Text style={styles.Name}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <Text style={styles.also}>ALSO TRY...</Text>
      <View style={styles.TRY}>
        <TouchableOpacity onPress={() => navigation.navigate("Hollywood")}>
          <Text style={{ color: "red", fontSize: 17 }}>HOLLYWOOD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Tollywood")}>
          <Text style={{ color: "red", fontSize: 17 }}>TOLLYWOOD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.space}></View>
      <Text style={styles.Q}>Questions? Call 000-800-040-1843</Text>
      <View style={styles.TEXT1}>
        <View>
          <Text style={styles.TEXT2}>FAQ</Text>
          <Text style={styles.TEXT2}>Terms of Use</Text>
          <Text style={styles.TEXT2}>Cookie Preferences</Text>
        </View>
        <View>
          <Text style={styles.TEXT2}>Help Centre</Text>
          <Text style={styles.TEXT2}>Privacy</Text>
          <Text style={styles.TEXT2}>Corporate Information</Text>
        </View>
      </View>
      <Text style={styles.inf}>MOV.INFO INDIA</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  inf: {
    color: "white",
    margin: 20,
    fontSize: 18,
    alignSelf: "center",
  },
  also: {
    fontSize: 20,
    marginLeft: 25,
    marginBottom: 10,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  imgBack: {
    height: 30,
    width: 30,
    margin: 10,
    marginTop: 20,
  },
  H: { color: "white", alignSelf: "flex-end", marginBottom: 15 },
  UP: {
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 10,
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  Q: {
    color: "white",
    marginHorizontal: 20,
    fontSize: 18,
    marginBottom: 40,
  },
  space: {
    height: 2,
    width: "100%",
    backgroundColor: "gray",
    marginVertical: 30,
    marginTop: 70,
  },
  Header: {
    height: 80,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  login: {
    height: 40,
    width: 100,

    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
  },
  login1: {
    height: 60,
    width: 150,
    margin: 50,
    marginBottom: 0,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
  },
  netflix: {
    color: "red",
    marginTop: 15,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 20,
  },
  logintext: {
    color: "white",
    fontSize: 18,
  },
  HImage: {
    height: 200,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  img: {
    height: "100%",
    width: 60,
  },
  img1: {
    height: 40,
    width: 40,
    borderRadius: 80,
    margin: 5,
  },
  XYZ: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  TRY: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  Text: {
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",

    color: "white",
  },
  IMG: {
    height: 200,
    width: 160,
    margin: 10,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  more: {
    alignSelf: "flex-end",
    padding: 10,
    marginTop: 10,
    color: "white",
    fontSize: 15,
  },
  search: {
    height: 40,
    width: 300,
    padding: 10,
    margin: 5,

    borderWidth: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  search1: {
    flexDirection: "row",
    marginBottom: 15,
  },
  Name: {
    color: "white",
    alignSelf: "center",
    fontSize: 18,
  },
  TEXT1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  TEXT2: {
    color: "white",
    marginVertical: 5,
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
