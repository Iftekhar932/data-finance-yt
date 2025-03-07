import React from "react";
// import Typed from "react-typed";
import { ReactTyped } from "react-typed";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "../firebase/firebase.init";

const Hero = () => {
  const handleProfileDownload = async () => {
    const pdfRef = ref(storage, "HHC PROFILE.pdf"); // Reference the specific PDF file
    const url = await getDownloadURL(pdfRef);

    // Create a temporary anchor element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = "HHC PROFILE.pdf"; // Set the desired filename
    link.click();
  };
  return (
    <div
      className="text-white bg-no-repeat bg-cover bg-center bg-heroBgImg mix-blend-hard-light"
      // style={{ backgroundImage: `url(${imgURL})` }}
      data-n="hero"
    >
      <div
        // className="max-w-[800px] mt-[96px]  w-full h-screen mx-auto text-center flex flex-col justify-center"
        className="max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center"
      >
        <p className="text-[#00df9a] font-bold p-2">
          Trading And Contracting W.L.L
        </p>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
          RESTORING THE PAST BUILDING THE FUTURE
        </h1>
        {/*  */}
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Our work is
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Efficient", "Flexible", "Punctual"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          We Are Reliable
        </p>
        <button
          onClick={handleProfileDownload}
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
        >
          Download Profile
        </button>
      </div>
    </div>
  );
};

export default Hero;
