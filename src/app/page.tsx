import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Skills from "./components/skills";

export default function Home () {
  return (
    <div>
    <Hero />
    <About />
    <Skills />
    <Contact />
    </div>
  )
}