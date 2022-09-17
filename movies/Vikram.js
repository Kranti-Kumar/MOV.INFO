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
          source={require("../assets/Vikram1.jpg")}
          style={styles.IMG}
        ></Image>
        <Text style={styles.UP}>Vikram Vedha</Text>
        <View style={styles.textV}>
          <Text style={styles.TextM}>DIRECTED BY {"  "}: </Text>
          <Text style={styles.TextB}> Pushkar–Gayathri</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>WRITTEN BY {"   "}: </Text>
          <Text style={styles.TextB}> Pushkar–Gayathri</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}> DIALOGUE BY : </Text>
          <Text style={styles.TextB}> Hussain Dalal</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>PRODUCED BY :</Text>
          <View>
            <Text style={styles.TextB}> S. Sashikanth</Text>
            <Text style={styles.TextB}> Chakravarthy</Text>
            <Text style={styles.TextB}> Ramachandra</Text>
            <Text style={styles.TextB}> Vivek Agrawal</Text>
            <Text style={styles.TextB}> Bhushan Kumar</Text>
          </View>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>STARRING{"        "} :</Text>
          <View>
            <Text style={styles.TextB}> Hrithik Roshan</Text>
            <Text style={styles.TextB}>Saif Ali Khan</Text>
            <Text style={styles.TextB}> Radhika Apte</Text>
            <Text style={styles.TextB}> Rohit Saraf</Text>
          </View>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>MUSIC BY {"         "}:</Text>
          <Text style={styles.TextB}>Richard Kevin A</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>RELEASE DATE :</Text>
          <Text style={styles.TextB}>30 September 2022</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>RUNNING TIME :</Text>
          <Text style={styles.TextB}>147 minutes</Text>
        </View>
        <View style={styles.textV}>
          <Text style={styles.TextM}>BUDGET {"             "}:</Text>
          <Text style={styles.TextB}>₹175 crore</Text>
        </View>

        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/Vikram.mp4")}
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
