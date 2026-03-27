import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Concerts from "./components/Concerts/Concerts";
import Band from "./components/Band/Band";
import History from "./components/History/History";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ style: { background: "#111827", color: "#fff" } }} />
      <Header />
      <main>
        <Hero />
        <Concerts />
        <Band />
        <History />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
