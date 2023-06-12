import React, { useContext, useState, useRef } from "react";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button, Image, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0 20px;
`;

const LOGO =
  "https://firebasestorage.googleapis.com/v0/b/rn-chat-88a1a.appspot.com/o/icon.png?alt=media";

const Signin = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);

  const _handleSigninBtnPress = () => {
    console.log("signin");
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Image url={LOGO} />
        <Input
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          label="Password"
          placeholder="Password"
          returnKeyType="done"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />
        <Button title="Sign in" onPress={_handleSigninBtnPress} />
        <Button
          title="or Sign up"
          onPress={() => navigation.navigate("Signup")}
          containerStyle={{ maraginTop: 0, backgroundColor: "transparent" }}
          textStyle={{ color: theme.btnTextLink, fontsize: 18 }}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
