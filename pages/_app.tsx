import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import client from "@/config/apollo";
import "@/styles/globals.css";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ApolloProvider client={client}>
         <Provider store={store}>
            <Component {...pageProps} />
         </Provider>
      </ApolloProvider>
   );
}
