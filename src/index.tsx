import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/api";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import getTokens from "@kiwicom/orbit-components/lib/getTokens";

const customTokens = getTokens({
  palette: {
    product: {
      light: "#fdf0ff",
      lightHover: "#fbdfff",
      lightActive: "#f9ceff",
      normal: "#009FC7",
      normalHover: "#004FC9",
      normalActive: "#004FC9",
      dark: "#110013",
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider
      theme={{
        yourCustomTheme: { black: "#000" },
        orbit: customTokens,
        rtl: false,
        transitions: false,
        lockScrolling: false,
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
