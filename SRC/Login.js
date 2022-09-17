import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";

export default function Login({ navigation }) {
  const [Loading, setLoading] = useState(true);
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  function F_TEXT() {
    var x = "kranti@gmail.com";
    var z = "Kranti";
    var m = text1.slice(-10);
    //   setTimeout(() => {
    //     setLoading(false);
    //  }, 300);
    if (m == "@gmail.com") {
      if (text1 == x && text2 == z) {
        navigation.navigate("Home");
      } else {
        alert("Email Password don't match");
      }
    } else {
      alert("Enter A Correct Email");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/Background4.jpg")}
      style={{ height: "100%", width: "100%" }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.Header}>
         
          <Text style={styles.netflix}>MOV.INFO</Text>
        </View>

        <Text style={styles.login}>LOGIN</Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          // autoCorrect="false"
          placeholder="Email or Mobile number"
          onChangeText={(text) => settext1(text)}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          // autoCorrect="false"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(y) => settext2(y)}
        />
        <TouchableOpacity onPress={F_TEXT} style={styles.container1}>
          <Text style={styles.LoginText}>LOGIN</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
          }}
        >
          <Text style={{ color: "gray" }}>Remeber Me</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.Pass}>Need Help?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 50 }}>
          <Text style={{ fontSize: 18, color: "gray" }}>Need an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.SignUp}>Sign up now</Text>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  login: {
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 20,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  netflix: {
    color: "red",
    marginTop: 15,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 20,
  },
  Q: {
    color: "gray",
    marginHorizontal: 20,
    fontSize: 18,
    marginBottom: 40,
  },
  space: {
    height: 3,
    width: "100%",
    backgroundColor: "gray",
    marginTop: 100,
    marginBottom: 40,
  },
  TEXT1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  TEXT2: {
    color: "gray",
    marginVertical: 5,
  },
  input: {
    height: 60,
    marginHorizontal: 25,
    margin: 15,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "gainsboro",
    borderWidth: 0,
  },
  Pass: {
    color: "gray",
  },
  container1: {
    backgroundColor: "red",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    marginHorizontal: 25,
    marginVertical: 20,
  },
  Header: {
    height: 80,
    borderBottomWidth: 2,
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "white",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "#0066b2",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
  },
  LoginText: {
    color: "white",
    fontSize: 20,
  },
  SignUp: {
    fontSize: 20,
    color: "white",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
  SignUp1: {
    fontSize: 15,
    color: "blue",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
});
