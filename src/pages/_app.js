import Wrapper from "@/components/wrapper/Wrapper";
import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
