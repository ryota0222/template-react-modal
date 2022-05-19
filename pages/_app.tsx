import type { AppProps } from "next/app";
import { ModalProvider } from "../contexts/ModalProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp;
