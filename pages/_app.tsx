import type { AppProps } from "next/app";
import Footer from "@components/footer";
import Header from "@components/header";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="w-screen selection:bg-orange-300 ">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
