
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//        <h1 className="text-3xl font-bold underline text-gray-900 text-center">
//       Hello world!
//         </h1>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

