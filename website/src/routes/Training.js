import React from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import TrainingSection from "../components/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <Image heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
