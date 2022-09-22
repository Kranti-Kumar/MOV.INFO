import { useState, react } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  SectionList,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
const DATA = [
  { id: 1, img: require("../assets/brahmastra.jpg"), title: "Brahmastra" },
  { id: 2, img: require("../assets/Vikram-Vedha2.jpg"), title: "Vikram Vedha" },
  { id: 3, img: require("../assets/tiger3.jpg"), title: "Tiger 3" },
  { id: 4, img: require("../assets/jawan.jpg"), title: "Jawan" },
];
const DATA1 = [
  {
    id: 1,
    img: require("../assets/blackpanther2.jpg"),
    title: "Black Panther",
  },
  { id: 2, img: require("../assets/blackadam.jpg"), title: "Black Adam" },
  { id: 3, img: require("../assets/avatar.jpg"), title: "Avatar" },
  { id: 4, img: require("../assets/Morbius.jpg"), title: "Morbius" },
];
const DATA2 = [
  { id: 1, img: require("../assets/Salaar.jpg"), title: "Salaar" },
  { id: 2, img: require("../assets/adipurush.jpg"), title: "Adipurush" },
  { id: 3, img: require("../assets/Karthikeya.jpg"), title: "Karthikeya 2" },
  { id: 4, img: require("../assets/Liger.jpg"), title: "Liger" },
];
const DATA3 = [
  { id: 1, img: require("../assets/M1.jpg") },
  { id: 2, img: require("../assets/M2S.jpg") },
  { id: 3, img: require("../assets/M3H.jpg") },
  { id: 4, img: require("../assets/M4B.jpg") },
];

export default function Home({ navigation }) {
  const [text2, settext2] = useState("");

  function F_SEARCH(item) {
    if (text2 == item.title) {
      navigation.navigate("Brahmastra");
      settext2("");
    } else {
      alert(text2);
      settext2("");
    }
  }
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

        <TouchableOpacity style={styles.login}>
          <Text
            style={styles.logintext}
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search1}>
        <TextInput
          style={styles.search}
          onChangeText={(y) => settext2(y)}
          defaultValue={text2}
        ></TextInput>
        <TouchableOpacity onPress={F_SEARCH}>
          <Image
            source={require("../assets/search1.jpg")}
            style={styles.img1}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          horizontal={true}
          data={DATA3}
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
      </View>
      <Text style={styles.Text}>BOLLYWOOD MOVIES</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate("Bollywood")}>
        <Text style={styles.more}>More....</Text>
      </TouchableOpacity>

      <Text style={styles.Text}>HOLLYWOOD MOVIES</Text>
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

      <TouchableOpacity onPress={() => navigation.navigate("Hollywood")}>
        <Text style={styles.more}>More....</Text>
      </TouchableOpacity>

      <Text style={styles.Text}>TOLLYWOOD MOVIES</Text>
      <View>
        <FlatList
          data={DATA2}
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
      <TouchableOpacity onPress={() => navigation.navigate("Tollywood")}>
        <Text style={styles.more}>More....</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.login1}
      >
        <Text style={styles.logintext}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.space}></View>
      <Text style={styles.Q}>Questions? Call 000-800-040-1843</Text>
      <View style={styles.TEXT1}>
        <View>
          <Text style={styles.TEXT2}>FAQ</Text>
          <Text style={styles.TEXT2}>Account</Text>
          <Text style={styles.TEXT2}>Investor Relations</Text>
          <Text style={styles.TEXT2}>Ways to Watch</Text>
          <Text style={styles.TEXT2}>Privacy</Text>
          <Text style={styles.TEXT2}>Corporate Information</Text>
          <Text style={styles.TEXT2}>Speed Test</Text>
          <Text style={styles.TEXT2}>Only on Netflix</Text>
        </View>
        <View>
          <Text style={styles.TEXT2}>Help Centre</Text>
          <Text style={styles.TEXT2}>Media Centre</Text>
          <Text style={styles.TEXT2}>Jobs</Text>
          <Text style={styles.TEXT2}>Terms of Use</Text>
          <Text style={styles.TEXT2}>Cookie Preferences</Text>
          <Text style={styles.TEXT2}>Contact Us</Text>
          <Text style={styles.TEXT2}>Legal Notices</Text>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          margin: 20,
          fontSize: 18,
          alignSelf: "center",
        }}
      >
        MOV.INFO INDIA
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imgBack: {
    height: 30,
    width: 30,
    margin: 10,
    marginRight: 0,
    marginTop: 20,
  },
  netflix: {
    color: "red",
    marginTop: 15,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  Q: {
    color: "white",
    marginHorizontal: 20,
    fontSize: 18,
    marginBottom: 40,
  },
  space: {
    height: 10,
    width: "100%",
    backgroundColor: "gray",
    marginVertical: 30,
  },
  Header: {
    height: 80,

    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginTop: 10,
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
