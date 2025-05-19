
import { Navbar2 } from "./components/Navbar2";
import { Header30 } from "./components/Header30";
import { Layout239 } from "./components/Layout239";
import { Testimonial18 } from "./components/Testimonial18";
import { Contact20 } from "./components/Contact20";
import { Footer3 } from "./components/Footer3";
import Gallery from "./components/Gallery";
import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Header30 />
      <Gallery/>
      <Logo />
      <Layout239 />
      <Testimonial18 />
      <Contact20 />
      <Footer3 />
    </div>
  );
}