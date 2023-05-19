import "./globals.css";
import type { AppProps } from "next/app";
import {
  HttpLink,
  InMemoryCache,
  ApolloLink,
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "/api/graphql",
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const client = makeClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
