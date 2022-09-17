import * as React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { Video } from "expo-av";

export default function Brahmastra({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ImageBackground
      source={require("../assets/Background6.jpg")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Back1.png")}
            style={styles.imgBack}
          />
        </TouchableOpacity>
        <Text style={styles.netflix}>MOV.INFO</Text>
      </View>
      <ScrollView style={styles.container}>
        <Image
          source={require("../assets/brahmastra2.jpg")}
          style={styles.IMG}
        ></Image>
        <Text style={styles.UP}>Brahmāstra: Part One – Shiva</Text>
        <View style={styles.textV}>
          <Text style={styles.TextM}>DIRECTED BY {"  "}: </Text>
          <Text style={styles.TextB}> Ayan Mukerji</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>WRITTEN BY {"   "}: </Text>
          <Text style={styles.TextB}> Ayan Mukerji</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}> DIALOGUE BY : </Text>
          <Text style={styles.TextB}> Hussain Dalal</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>PRODUCED BY :</Text>
          <View>
            <Text style={styles.TextB}> Karan Johar</Text>
            <Text style={styles.TextB}> Apoorva Mehta</Text>
            <Text style={styles.TextB}> Namit Malhotra</Text>
            <Text style={styles.TextB}> Ranbir Kapoor</Text>
            <Text style={styles.TextB}> Marijke Desouza</Text>
            <Text style={styles.TextB}> Ayan Mukerji</Text>
          </View>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>STARRING{"        "} :</Text>
          <View>
            <Text style={styles.TextB}>Amitabh Bachchan</Text>
            <Text style={styles.TextB}>Ranbir Kapoor</Text>
            <Text style={styles.TextB}> Alia Bhatt</Text>
            <Text style={styles.TextB}> Mouni Roy</Text>
            <Text style={styles.TextB}> Nagarjuna Akkineni</Text>
          </View>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>MUSIC BY {"         "}:</Text>
          <Text style={styles.TextB}>Pritam</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>RELEASE DATE :</Text>
          <Text style={styles.TextB}>9 September 2022</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>RUNNING TIME :</Text>
          <Text style={styles.TextB}>167 minutes</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>BUDGET {"             "}:</Text>
          <Text style={styles.TextB}>est. ₹410 crore</Text>
        </View>

        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/brahmastra.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  textV: {
    flexDirection: "row",

    marginTop: 10,
  },
  IMG: {
    marginTop: 20,
    height: 200,
    width: "100%",
    alignSelf: "center",
  },
  TextM: {
    fontSize: 18,
    color: "red",
    marginHorizontal: 25,
  },
  TextB: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  UP: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 40,
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
  Header: {
    height: 80,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  video: {
    width: 360,
    height: 200,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  netflix: {
    color: "red",
    marginTop: 15,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 20,
  },
});
