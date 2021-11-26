import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Button from "@kiwicom/orbit-components/lib/Button";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

import "./App.css";
import { SIG_IN } from "./gql/analitycs";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sigIn, result] = useMutation(SIG_IN, {
    onError: (error) => {
      // setError(error.graphQLErrors[0].message);
      console.log("Horror", error);
    },
  });

  const handleLogin = async (email: string, password: string) => {
    console.log("la data", email, password);

    const result = await sigIn({ variables: { email, password } });
    console.log("aver aver", result.data);
    if (result.data) {
      const token = result.data.signIn.accessToken;
      // setToken(token)
      console.log("access tokennn", token);

      localStorage.setItem("token", token);
    }
  };

  return (
    <div className="App">
      <div className="login">
        <Card>
          <CardSection>
            <InputField
              // error="Please enter your email"
              placeholder="your@email.com"
              label="Email"
              type="email"
              inputMode="email"
              spaceAfter="largest"
              value={email}
              onChange={({ currentTarget }) => setEmail(currentTarget.value)}
            />

            <InputField
              // error="Please enter your email"
              // placeholder=""
              label="Password"
              type="password"
              inputMode="email"
              value={password}
              onChange={({ currentTarget }) => setPassword(currentTarget.value)}
            />
          </CardSection>
          <CardSection noSeparator={true}>
            <Button
              fullWidth={true}
              onClick={() => handleLogin(email, password)}
            >
              Log In
            </Button>
          </CardSection>
        </Card>
      </div>
    </div>
  );
}

export default App;
