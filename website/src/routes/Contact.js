import React from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Image heading="CONTACT." text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
