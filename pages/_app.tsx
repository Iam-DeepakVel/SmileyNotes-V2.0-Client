import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import reduxStore from "@/store/store";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <motion.div>
      <Provider store={reduxStore}>
        <Navbar />
        <NextNProgress
          color="#ba882d"
          startPosition={0.3} 
          stopDelayMs={300}
          height={4}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Provider>
    </motion.div>
  );
}
