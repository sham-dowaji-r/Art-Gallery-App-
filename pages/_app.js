import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
