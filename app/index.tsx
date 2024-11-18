import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { theme } from "../styles/theme";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    Keyboard.dismiss();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      router.push("/profile");
    }
  }

  async function signUpWithEmail() {
    Keyboard.dismiss();
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          source={require("../assets/images/welcome-img.png")}
          style={styles.image}
        />
        <Text style={commonStyles.title}>NextQuest</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter username"
          placeholderTextColor={theme.colors.placeholder}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor={theme.colors.placeholder}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
        <View style={{width: "90%"}}>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => Alert.alert("Forgot password clicked!")}
        >
          Forgot your login?
        </Text>
        </View>
        <View style={{flexDirection: "row", gap: "5%"}}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: theme.colors.secondary },
            ]}
            onPress={signUpWithEmail}
            disabled={loading}
          >
            <Text style={commonStyles.buttonText}>
              {loading ? "Loading..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={signInWithEmail}
            disabled={loading}
          >
            <Text style={commonStyles.buttonText}>
              {loading ? "Loading..." : "Sign In"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: theme.colors.placeholder,
    fontSize: theme.fontSizes.small,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    marginBottom: theme.spacing.medium,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.small,
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    backgroundColor: '#f9f9f9',
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  }
});
