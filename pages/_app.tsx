import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/style.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { UserProvider as Auth0UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default App;
