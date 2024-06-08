import React from "react";
import { About } from "./Components/about/About";
import { Contact } from "./Components/contact/Contact";
import { Footer } from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import { Home } from "./Components/home/Home";
import { Service } from "./Components/service/Service";

export const Index = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};
