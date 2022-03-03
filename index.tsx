import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  concat,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { SettingsProvider } from "../src/components/contexts/SettingsContext";

const httpLink = new HttpLink({
  //@ts-ignore
  uri: `${process.env.REACT_APP_BACKEND_URL}`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = sessionStorage.getItem("accessToken");

  if (operation.operationName === "FetchAdministrator") {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
      },
    }));
  } else {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }));
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <ApolloProvider client={client}>
        <SettingsProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SettingsProvider>
      </ApolloProvider>
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
