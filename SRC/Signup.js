import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";

export default function Signup({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");
  const [text4, settext4] = useState("");
  const [text5, settext5] = useState("");
  const [text6, settext6] = useState("");
  function F_TEST() {
    var x = text1.search(" ");
    var y = text2.search(" ");
    var m = text3.slice(-10);
    var l = text4.length;
    var pass = text5;
    var Cpass = text6;

    if (x >= 0) {
      alert("Enter Valid First Name");
    } else if (y >= 0) {
      alert("Enter Valid Last Name");
    } else if (m !== "@gmail.com") {
      alert("Enter A Correct Email");
    } else if (l !== 10) {
      alert("Enter A valid Mobile Number");
    } else if (pass !== Cpass) {
      alert("Password and Confirm Password Don't match");
    } else {
      navigation.navigate("Login");
    }
  }
  return (
    <ImageBackground
      source={require("../assets/Background4.jpg")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/Back1.png")}
              style={styles.imgBack}
            />
          </TouchableOpacity>
          <Text style={styles.netflix}>MOV.INFO</Text>
        </View>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 25,
            marginTop: 30,
            color: "white",
          }}
        >
          SIGN UP
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TextInput
            style={styles.input1}
            placeholder="First Name"
            onChangeText={(text) => settext1(text)}
          />
          <TextInput
            style={[styles.input1, { marginLeft: 4 }]}
            placeholder="Last Name"
            onChangeText={(text) => settext2(text)}
          />
        </View>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email Address"
          onChangeText={(text) => settext3(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          onChangeText={(text) => settext4(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => settext5(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={(text) => settext6(text)}
        />
        <Text style={{ color: "gray", fontSize: 16, marginLeft: 25 }}>
          I have read & agree to the{" "}
          <Text style={{ textDecorationLine: "underline" }}>Tearm of use</Text>
        </Text>

        <Text
          style={{
            fontSize: 16,
            textDecorationLine: "underline",
            marginLeft: 25,
            color: "gray",
          }}
        >
          & Privacy policy
        </Text>
        <TouchableOpacity onPress={F_TEST} style={styles.container1}>
          <Text style={styles.LoginText}>SIGN UP</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
        >
          <Text style={{ color: "gray", fontSize: 20 }}>
            Already have a account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.Login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: 80,

    borderBottomWidth: 2,
    borderBottomColor: "white",
    flexDirection: "row",
    width: "100%",

    alignItems: "center",
  },
  input: {
    height: 50,
    width: 310,
    margin: 10,
    marginHorizontal: 25,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "gainsboro",
    borderWidth: 0,
  },
  input1: {
    height: 50,
    width: 142,
    margin: 10,
    marginHorizontal: 25,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "gainsboro",
    borderWidth: 0,
  },
  netflix: {
    color: "red",
    marginTop: 15,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 20,
  },
  container1: {
    backgroundColor: "red",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginTop: 40,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  LoginText: {
    color: "white",
    fontSize: 20,
  },
  Login: {
    fontSize: 20,
    alignSelf: "flex-end",
    color: "white",
  },
  imgBack: {
    height: 30,
    width: 30,
    margin: 10,
    marginTop: 20,
  },
});
