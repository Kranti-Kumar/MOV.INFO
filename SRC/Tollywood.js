import * as React from "react";
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
  { id: 1, title: "Salaar", img: require("../assets/Salaar.jpg") },
  { id: 2, title: "Adipurush", img: require("../assets/adipurush.jpg") },
  { id: 3, title: "Godfather", img: require("../assets/godfatherS2.jpg") },
  { id: 4, title: "Ramarao On Duty", img: require("../assets/ramarao.jpg") },
  { id: 5, title: "Agent", img: require("../assets/agent.jpg") },
  { id: 6, title: "Project K.", img: require("../assets/project.jpg") },
];
const DATA1 = [
  { id: 1, title: "     KGF \nChapter 2", img: require("../assets/kgf2.jpg") },
  { id: 2, title: "RRR ", img: require("../assets/RRR.jpg") },
  { id: 3, title: "Master", img: require("../assets/master.jpg") },
  { id: 4, title: " Pushpa \nThe Rise", img: require("../assets/pushpa.jpg") },
  { id: 5, title: "Jai Bhim", img: require("../assets/Jai_Bhim.jpg") },
  { id: 6, title: "Cobra", img: require("../assets/Cobra.jpg") },
];

const DATA2 = [
  { id: 1, img: require("../assets/SalaarB.jpg") },
  { id: 2, img: require("../assets/M2S.jpg") },
  { id: 3, img: require("../assets/M3S.jpg") },
  { id: 4, img: require("../assets/M1S.jpg") },
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
        <Text style={styles.H}>.TOLLYWOOD</Text>
      </View>
      <FlatList
        horizontal={true}
        data={DATA2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container1}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Brahmastra")}
              >
                <Image source={item.img} style={styles.HImage}></Image>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <Text style={styles.U}>UPCOMMING...</Text>
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

      <Text style={styles.for}>FOR YOU...</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate("Bollywood")}>
          <Text style={{ color: "red", fontSize: 17 }}>BOLLYWOOD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Hollywood")}>
          <Text style={{ color: "red", fontSize: 17 }}>HOLLYWOOD</Text>
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
  H: { color: "white", alignSelf: "flex-end", marginBottom: 15 },
  for: {
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 10,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  also: {
    fontSize: 20,
    marginLeft: 25,
    marginBottom: 10,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  inf: {
    color: "white",
    margin: 20,
    fontSize: 18,
    alignSelf: "center",
  },
  U: {
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 10,
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  Q: {
    color: "white",
    marginHorizontal: 20,
    fontSize: 18,
    marginBottom: 40,
  },
  imgBack: {
    height: 30,
    width: 30,
    margin: 10,
    marginTop: 20,
  },
  TRY: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
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
    width: 350,
    marginHorizontal: 5,
    marginBottom: 20,
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
});
