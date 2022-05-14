import '../styles/globals.css'
import type { AppProps } from 'next/app'
import client from '../lib/ApolloClient'
import '../styles/globals.css'; //Global css import
import {
  ApolloProvider,
  gql
} from "@apollo/client";
import Header from '../src/commonComponent/header/Header';
function MyApp({ Component, pageProps }: AppProps) {
  client
    .query({
      query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
    })
    .then(result => console.log(result));
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
